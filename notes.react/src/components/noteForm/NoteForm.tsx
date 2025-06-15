import React, { useState } from 'react';
import { addNote, CreateNote } from '../../api/api';
import './NoteForm.css';

const NoteForm: React.FC = () => {
  const [note, setNote] = useState<CreateNote>({ title: "", details: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.title?.trim() || !note.details?.trim()) return;

    try {
      setIsSubmitting(true);
      await addNote(note);
      setNote({ title: "", details: "" });
    } catch (error) {
      console.error('Failed to add note:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(prev => ({ ...prev, title: e.target.value }));
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(prev => ({ ...prev, details: e.target.value }));
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={note.title}
          onChange={handleTitleChange}
          placeholder="Заголовок заметки"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          value={note.details}
          onChange={handleDetailsChange}
          placeholder="Содержание заметки"
          required
          rows={10}
          className="form-textarea"
        />
      </div>
      <button 
        type="submit" 
        className="form-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Сохранение...' : 'Сохранить заметку'}
      </button>
    </form>
  );
};

export default NoteForm;
