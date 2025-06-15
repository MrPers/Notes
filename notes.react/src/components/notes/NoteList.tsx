import React, { useEffect, useState } from 'react';
import { deleteNote, getNotes, Note } from '../../api/api';
import { EditNote } from '../editNote/EditNote';
import './NoteList.css';

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const fetchedNotes = await getNotes();
      if (fetchedNotes) {
        setNotes(fetchedNotes);
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <div className="loading">Загрузка заметок...</div>;
  }

  return (
    <>
      <EditNote 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedNote(undefined);
        }} 
        note={selectedNote}
      />
      <div className="notes-grid">
        {notes.length === 0 ? (
          <div className="no-notes">Нет заметок</div>
        ) : (
          notes.map((note) => (
            <div 
              key={note.id} 
              className="note-item"
              onClick={() => handleNoteClick(note)}
            >
              <div className="note-header">
                <button 
                  className="delete-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(note.id!);
                  }}
                >
                  ×
                </button>
              </div>
              <h2 className="note-title">{note.title}</h2>
              <p className="note-content">{note.details}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default NoteList;

