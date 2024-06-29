import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignOutOidc from './page/auth/SignoutOidc';
import NoteList from './components/notes/NoteList';
import React from 'react';
import RefreshOidc from './page/auth/RefreshOidc';
import SignInOidc from './page/auth/SigninOidc';
import NoteForm from './components/noteForm/NoteForm';
import Header from './components/header/header';


export function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <NoteForm />
        <NoteList />
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin-oidc" component={SignInOidc} />
          <Route path="/signout-oidc" component={SignOutOidc} />
          <Route path="/refres-oidc" component={RefreshOidc} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

