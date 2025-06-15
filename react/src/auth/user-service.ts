import { User, UserManager, UserManagerSettings} from 'oidc-client';

const userManagerSettings: UserManagerSettings = {
    authority: "https://localhost:6001",//
    client_id: "client_id_js",//
    response_type: "code",//
    scope: "openid profile NotesWebAPI",//
    redirect_uri: "http://localhost:3000/signin-oidc",//
    silent_redirect_uri : "http://localhost:3000/refresh-oidc",
    post_logout_redirect_uri : "http://localhost:3000/signout-oidc"//
};

const userManager = new UserManager(userManagerSettings);
let userGlob: User | null;

userManager.getUser()
    .then((user) => userGlob = user);


export function isAuthenticated(): boolean {
    return userGlob != null && ! userGlob.expired;
}

export function getAccessToken() {
    return userGlob?.access_token;
}

export const signinRefresh = (): Promise<User| undefined> => 
    userManager.signinSilentCallback();

export const signinRedirect = () => 
    userManager.signinRedirect();

export const signinRedirectCallback = async () =>{
    userManager.signinRedirectCallback()    
    .then(function (user) {
        console.log(user);
        window.location.href = "http://localhost:3000";
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const signoutRedirect = async () => {
    return userManager.signoutRedirect();
};

export const signoutRedirectCallback = () => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirectCallback();
};

export default userManager;
