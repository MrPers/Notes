import React, { FC, ReactElement, useState } from 'react';
import { addNote, CreateNote } from '../../api/api';
import './NoteForm.css';

const NoteForm: FC<{}> = (): ReactElement => {

  const[noteEdit, setNoteEdit] = useState<CreateNote|undefined>({title:"", details:""});
  
  const onAddClick = async () => {
    await addNote(noteEdit!);
    setNoteEdit(undefined);
  };
  const newTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNoteEdit({title: event.target.value, details: noteEdit!.details});
  };
  const newDetails = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNoteEdit({title: noteEdit!.title, details: event.target.value });
  };

  return (
    <form className="note-form">
      <input type="text" required onChange={newTitle}/>
      <textarea placeholder="Content" required rows={10} onChange={newDetails}/>
      <button type='submit' onClick={onAddClick}> Edit Note </button>
    </form>
  );
};

export default NoteForm;
