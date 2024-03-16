import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { ConstantsService } from './services/constants.service';
import { CurrencyService } from './services/currency.service';
import { AuthModule } from './modules/auth/auth.module';
import { RefreshComponent } from './pages/refresh/refresh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LocalStoreManager } from './services/local-store-manager.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    RefreshComponent,
  ],
  imports: [
    FormsModule,//add [(ngModel)]
    BrowserModule,
    RouterModule,// надо для Router
    AppRoutingModule,// надо для Router
    HomeModule,// новый роут для Router
    AuthModule,// новый роут для Router
    ScrollToModule.forRoot(), //add scrol, ндо чтобы была в App
    HttpClientModule,  //add работа с Http
    OAuthModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),  //add [typeahead]
    ReactiveFormsModule,
  ],
  providers: [
    CurrencyService,
    ConstantsService,
    LocalStoreManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
