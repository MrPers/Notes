import { User, UserManager, UserManagerSettings} from 'oidc-client';
import { Redirect } from 'react-router-dom';

const userManagerSettings: UserManagerSettings = {
    // userStore: new WebStorageStateStore({ store: window.localStorage }),
    authority: "https://localhost:6001",//
    client_id: "client_id_js",//
    response_type: "code",//
    scope: "openid profile NotesWebAPI",//
    redirect_uri: "http://localhost:3000/signin-oidc",//
    silent_redirect_uri : "http://localhost:3000/refresh-oidc",//надо создать
    post_logout_redirect_uri : "http://localhost:3000/signout-oidc"//
};

const userManager = new UserManager(userManagerSettings);
// var user: any;

export async function getUser() {
    return await userManager.getUser();
}

export async function getAccessToken() {
    // if (user == null){
        // debugger;
        var user = await getUser();
    // }
    // debugger;
    return user?.access_token;
}

export async function callApi() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://localhost:5001/api/Note");
    xhr.setRequestHeader("Authorization", "Bearer " + await getAccessToken());
    xhr.send();
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            return xhr.response;
        } else {
            debugger;
        }
    }
}

export const signinRefresh = () => 
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
    // debugger;
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirectCallback();
};

export default userManager;
