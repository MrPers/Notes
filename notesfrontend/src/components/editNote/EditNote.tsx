import React, { useEffect, useState } from "react";
import "./EditNote.css";
import { Transition } from "react-transition-group";
// import { Note } from "../../api/api";
import { Note, updateNote } from "../../api/api";

type EditNote = {
  isOpen: boolean;
  onClose: () => void;
  note: Note | undefined;
};

export const EditNote: React.FC<EditNote> = ({ isOpen, onClose, note}) => {

  const[noteF, setNoteF] = useState<Note|undefined>(note);
  
  useEffect(() => {debugger; setNoteF(note);}, [note?.id]);

  const onWrapperClick = (event: any) => {
    if (event.target.classList.value =="modal-wrapper"){
      setNoteF(undefined);
      onClose();
    } 
  };
  const onEditClick = async () => {
    await updateNote(noteF!);
    setNoteF(undefined);
    onClose();
  };
  const newTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNoteF({ id: noteF!.id, title: event.target.value, details: noteF!.details});
  };
  const newDetails = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNoteF({ id: noteF!.id, title: noteF!.title, details: event.target.value });
  };

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
      {(state) => (
        <div className={`modal modal--${state}`}>
          <div className="modal-wrapper" onClick={onWrapperClick}>
            <div className="modal-content">
              <form className="note-form">
                <input type="text" required defaultValue={noteF?.title} onChange={newTitle}/>
                <textarea placeholder="Content" required rows={6} defaultValue={noteF?.details} onChange={newDetails}/>
                <button type='submit' onClick={onEditClick}> Edit Note </button>
              </form>
            </div>
          </div>
        </div>
      )}
      </Transition>
    </>
  );
};
