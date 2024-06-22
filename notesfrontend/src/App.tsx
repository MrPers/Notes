import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import userManager, { loadUser, signinRedirect, signoutRedirect } from './auth/user-service';
import AuthProvider from './auth/auth-provider';
import SignInOidc from './auth/SigninOidc';
import SignOutOidc from './auth/SignoutOidc';
import NoteList from './notes/NoteList';

// type Note = {
//   id: number;
//   title: string;
//   content: string;
// };

function App() {
  // const [notes, setNotes] = useState<Note[]>([
  //   {
  //     id: 1,
  //     title: "test note 1",
  //     content: "bla bla note1",
  //   },
  //   {
  //     id: 2,
  //     title: "test note 2 ",
  //     content: "bla bla note2",
  //   },
  //   {
  //     id: 3,
  //     title: "test note 3",
  //     content: "bla bla note3",
  //   },
  //   {
  //     id: 4,
  //     title: "test note 4 ",
  //     content: "bla bla note4",
  //   },
  //   {
  //     id: 5,
  //     title: "test note 5",
  //     content: "bla bla note5",
  //   },
  //   {
  //     id: 6,
  //     title: "test note 6",
  //     content: "bla bla note6",
  //   },
  //   ]);
  
    return (

      <div className="App">
      <header className="App-header">
          <button onClick={() => signinRedirect()}>Login</button>
          <button onClick={() => signoutRedirect()}>Logout</button>
          <AuthProvider userManager={userManager}>
              <Router>
                  <Switch>
                      <Route exact path="/" component={NoteList} />
                      <Route
                          path="/signout-oidc"
                          component={SignOutOidc}
                      />
                      <Route path="/signin-oidc" component={SignInOidc} />
                  </Switch>
              </Router>
          </AuthProvider>
      </header>
  </div>

    // <div className="app-container">
    //   <form className="note-form">
    //     <input
    //       required
    //       placeholder="title"
    //     />
    //     <textarea
    //       placeholder="Content"
    //       required
    //       rows={10}
    //     />
    //     <button type='submit'> 
    //       Add Note
    //     </button>
    //   </form>      
    //   <div className="notes-grid">
    //     {notes.map((note) => (
    //       <div className="note-item">
    //         <div className="notes-header">
    //           <button>x</button>
    //         </div>
    //         <h2>{note.title}</h2>
    //         <p>{note.content}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
