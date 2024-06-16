// import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <form className="note-form">
        <input
          required
          placeholder="title"
        />
        <textarea
          placeholder="Content"
          required
          rows={10}
        />
        <button type='submit'> 
          Add Note
        </button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note Content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
