

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationService } from './configuration.service';
import { DBkeys, LoginResponse, User, PermissionValues } from './constants.service';
import { JwtHelper } from './jwt-helper';

import { LocalStoreManager } from './local-store-manager.service';
import { OidcHelperService } from './oidc-helper.service';

@Injectable()
export class AuthService {

  public get loginUrl() { return this.configurations.loginUrl; }
  public loginRedirectUrl: string ="";
  private previousIsLoggedInCheck = false;
  private loginStatus = new Subject<boolean>();
  // public reLoginDelegate: () => void;


  get currentUser(): User  {

    const user = this.localStorage.getDataObject<User>(DBkeys.CURRENT_USER);
    this.reevaluateLoginStatus(user);

    return user as User;
  }

  get isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  get rememberMe(): boolean {
    return this.localStorage.getDataObject<boolean>(DBkeys.REMEMBER_ME) === true;
  }

  constructor(private router:Router,private localStorage: LocalStoreManager, private oidcHelperService: OidcHelperService,
    private configurations: ConfigurationService) {
      this.initializeLoginStatus();
  }

  refreshLogin() {
    return this.oidcHelperService.refreshLogin()
      .pipe(map((resp: any) => this.processLoginResponse(resp)));
  }

  get isSessionExpired(): boolean {
    return this.oidcHelperService.isSessionExpired;
  }

  logout(): void {
    this.localStorage.deleteData(DBkeys.ACCESS_TOKEN);
    this.localStorage.deleteData(DBkeys.REFRESH_TOKEN);
    this.localStorage.deleteData(DBkeys.TOKEN_EXPIRES_IN);
    this.localStorage.deleteData(DBkeys.USER_PERMISSIONS);
    this.localStorage.deleteData(DBkeys.CURRENT_USER);

    this.configurations.clearLocalChanges();

    this.reevaluateLoginStatus();
  }

  get accessToken(): string {
    return this.oidcHelperService.accessToken;
  }

  redirectForLogin() {
    this.loginRedirectUrl = this.router.url;
    this.router.navigate([this.loginUrl]);
  }


  private saveUserDetails(user: User, permissions: PermissionValues[], accessToken: string, refreshToken: string, expiresIn: Date, rememberMe: boolean) {
    if (rememberMe) {
      this.localStorage.savePermanentData(accessToken, DBkeys.ACCESS_TOKEN);
      this.localStorage.savePermanentData(refreshToken, DBkeys.REFRESH_TOKEN);
      this.localStorage.savePermanentData(expiresIn, DBkeys.TOKEN_EXPIRES_IN);
      this.localStorage.savePermanentData(permissions, DBkeys.USER_PERMISSIONS);
      this.localStorage.savePermanentData(user, DBkeys.CURRENT_USER);
    } else {
      this.localStorage.saveSyncedSessionData(accessToken, DBkeys.ACCESS_TOKEN);
      this.localStorage.saveSyncedSessionData(refreshToken, DBkeys.REFRESH_TOKEN);
      this.localStorage.saveSyncedSessionData(expiresIn, DBkeys.TOKEN_EXPIRES_IN);
      this.localStorage.saveSyncedSessionData(permissions, DBkeys.USER_PERMISSIONS);
      this.localStorage.saveSyncedSessionData(user, DBkeys.CURRENT_USER);
    }

    this.localStorage.savePermanentData(rememberMe, DBkeys.REMEMBER_ME);
  }

  processLoginResponse(response) {

    const accessToken = response.access_token;
    let rememberMe = this.rememberMe;
    const refreshToken = response.refresh_token || this.refreshToken;
    const expiresIn = response.expires_in;
    const tokenExpiryDate = new Date();
    tokenExpiryDate.setSeconds(tokenExpiryDate.getSeconds() + expiresIn);
    const accessTokenExpiry = tokenExpiryDate;
    const jwtHelper = new JwtHelper();
    const decodedAccessToken = jwtHelper.decodeToken(accessToken);

    const permissions: PermissionValues[] = Array.isArray(decodedAccessToken.permission) ? decodedAccessToken.permission : [decodedAccessToken.permission];

    if (!this.isLoggedIn) {
      this.configurations.import(decodedAccessToken.configuration);
    }

    debugger;

    const user = new User(
      decodedAccessToken.sub,
      decodedAccessToken.name,
      decodedAccessToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      decodedAccessToken.jti
    );

    this.saveUserDetails(user, permissions, accessToken, refreshToken, accessTokenExpiry, rememberMe);

    this.reevaluateLoginStatus(user);

    return user;
  }

  getAuthorizationHeaderValue(): HttpHeaders {
    var headers = new HttpHeaders()
      .append( 'Accept', 'application/json, text/plain, */*')
      .append('Content-Type', 'application/json')
      .append( 'Authorization', 'Bearer ' + this.oidcHelperService.accessToken);
      debugger;
    // headers = headers.append( 'Content-Type', 'application/json');
    // headers = headers.append( 'Authorization', 'Bearer ' + this.oidcHelperService.accessToken);
    // headers = headers.append( 'Accept', 'application/json, text/plain, */*');

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Bearer ' + this.oidcHelperService.accessToken,
    //   Accept: 'application/json, text/plain, */*'
    // });
    return headers;
    }

  get refreshToken(): string {
    return this.oidcHelperService.refreshToken;
  }

  private initializeLoginStatus() {
    this.localStorage.getInitEvent().subscribe(() => {
      this.reevaluateLoginStatus();
    });
  }

  private reevaluateLoginStatus(currentUser?: User | null) {

    const user = currentUser || this.localStorage.getDataObject<User>(DBkeys.CURRENT_USER);
    const isLoggedIn = user != null;

    if (this.previousIsLoggedInCheck !== isLoggedIn) {
      setTimeout(() => {
        this.loginStatus.next(isLoggedIn);
      });
    }

    this.previousIsLoggedInCheck = isLoggedIn;
  }

  getLoginStatusEvent(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
}

