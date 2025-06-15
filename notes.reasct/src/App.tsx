import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignOutOidc from './pages/auth/SignoutOidc';
import NoteList from './components/notes/NoteList';
import React from 'react';
import RefreshOidc from './pages/auth/RefreshOidc';
import SignInOidc from './pages/auth/SigninOidc';
import NoteForm from './components/noteForm/NoteForm';
import Header from './components/header/Header';

export function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <NoteForm />
        <NoteList />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin-oidc" element={<SignInOidc/>} />
          <Route path="/signout-oidc" element={<SignOutOidc/>} />
          <Route path="/refres-oidc" element={<RefreshOidc/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

