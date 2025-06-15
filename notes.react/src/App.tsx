import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignOutOidc from './pages/auth/SignoutOidc';
import NoteList from './components/notes/NoteList';
import RefreshOidc from './pages/auth/RefreshOidc';
import SignInOidc from './pages/auth/SigninOidc';
import NoteForm from './components/noteForm/NoteForm';
import Header from './components/header/Header';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={
              <>
                <NoteForm />
                <NoteList />
              </>
            } />
            <Route path="/signin-oidc" element={<SignInOidc />} />
            <Route path="/signout-oidc" element={<SignOutOidc />} />
            <Route path="/refresh-oidc" element={<RefreshOidc />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

