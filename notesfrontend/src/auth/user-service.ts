import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { setAuthHeader } from './auth-headers';

const userManagerSettings: UserManagerSettings = {
    client_id: 'notes-web-app',
    redirect_uri: 'http://localhost:3000/signin-oidc',
    response_type: 'code',
    scope: 'openid profile NotesWebAPI',
    authority: 'https://localhost:44380/',
    post_logout_redirect_uri: 'http://localhost:3000/signout-oidc',
};

const userManager = new UserManager(userManagerSettings);
var user:any;
export async function loadUser() {
    user = await userManager.getUser();
    console.log('User: ', user);
    debugger;
    const token = user?.access_token;
    setAuthHeader(token);
}

export const signinRedirect = () => userManager.signinRedirect();

export const signinRedirectCallback = () =>
    userManager.signinRedirectCallback();

export const signoutRedirect = () => {
    console.log('User: ', user);
    debugger;
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirect(user.id_token );
};

export const signoutRedirectCallback = () => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirectCallback();
};

export default userManager;
