import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { signinRedirect, signoutRedirect } from './auth/user-service';
import SignInOidc from './page/SigninOidc';
import SignOutOidc from './page/SignoutOidc';
import NoteList from './notes/NoteList';
import RefreshOidc from './page/RefreshOidc';
import React from 'react';


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
          </Switch>
      </Router>
      <Router>
          <Switch>
              <Route path="/signin-oidc" component={SignInOidc} />
              <Route path="/signout-oidc"component={SignOutOidc}/>
              <Route path="/refres-oidc"component={RefreshOidc}/>
          </Switch>
      </Router>
      </div>
    </div>
  );}

export default App;
