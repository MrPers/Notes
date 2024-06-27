import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { signinRedirect, signoutRedirect } from './auth/user-service';
import SignOutOidc from './page/auth/SignoutOidc';
import NoteList from './page/notes/NoteList';
import React from 'react';
import RefreshOidc from './page/auth/RefreshOidc';
import SignInOidc from './page/auth/SigninOidc';


function App() {
  return (
    <div>       
      <div>
        <button onClick={() => signinRedirect()}>Login</button>
        <button onClick={() => signoutRedirect()}>Logout</button>
      </div>     
      <div className="app-container">
      <form className="note-form">
        <input required placeholder="title" />
        <textarea placeholder="Content" required rows={10} />
        <button type='submit'> Add Note </button> 
      </form> 
      <Router>
          <Switch>
              <Route exact path="/" component={NoteList} />
              <Route path="/signin-oidc" component={SignInOidc} />
              <Route path="/signout-oidc"component={SignOutOidc}/>
              <Route path="/refres-oidc"component={RefreshOidc}/>
          </Switch>
      </Router>
      </div>
    </div>
  );}

export default App;
