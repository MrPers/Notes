import React, { useEffect, useState } from "react";
import "./EditNote.css";
import { Note, updateNote } from "../../api/api";

type EditNote = {
  isOpen: boolean;
  onClose: () => void;
  note: Note | undefined;
};

export const EditNote: React.FC<EditNote> = ({ isOpen, onClose, note}) => {

  const[noteEdit, setNoteEdit] = useState<Note|undefined>(note);
  
  useEffect(() => {setNoteEdit(note)}, [note?.id != noteEdit?.id && isOpen]);

  const onWrapperClick = (event: any) => {
    if (event.target.classList.value =="modal-wrapper"){
      setNoteEdit(undefined);
      onClose();
    } 
  };
  const onEditClick = async () => {
    await updateNote(noteEdit!);
    setNoteEdit(undefined);
    onClose();
  };
  const newTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNoteEdit({ id: noteEdit!.id, title: event.target.value, details: noteEdit!.details});
  };
  const newDetails = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNoteEdit({ id: noteEdit!.id, title: noteEdit!.title, details: event.target.value });
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-wrapper" onClick={onWrapperClick}>
            <div className="modal-content">
              <form className="note-form">
                <input type="text" required defaultValue={noteEdit?.title} onChange={newTitle}/>
                <textarea placeholder="Content" required rows={6} defaultValue={noteEdit?.details} onChange={newDetails}/>
                <button type='submit' onClick={onEditClick}> Edit Note </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
