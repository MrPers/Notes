import React, { FC, ReactElement, useEffect, useState } from 'react';
import { deleteNote, getNotes, Note } from '../../api/api';
import { EditNote } from '../editNote/EditNote';
import './NoteList.css';

const NoteList: FC<{}> = (): ReactElement => {

    const [notes, setNotes] = useState<Note[] | undefined>(undefined);
    const [note, setNote] = useState<Note| undefined>(undefined);
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

    useEffect(() => {
        getListNotes(setNotes);
    }, []);  
    
    function getListNotes(setNotes: React.Dispatch<React.SetStateAction<Note[] | undefined>>) {
        getNotes()
            .then((arg) => {
                if (arg != null) { setNotes(arg); }
            });
    }

    const onDeletelick = async (id:string) => {
      await deleteNote(id).then(()=>{
          getListNotes(setNotes);
      })
    };

    const onEditClick = (event: any, note:Note) => {
        if (event.target.classList.value =="note-item"){
            setModalInfoOpen(true);
            setNote(note);
        } 
    };
    return (
        <>
        <EditNote isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)} note= {note}/>
        <div className="notes-grid">
            {notes?.map((note) => (
                <div className="note-item" onClick={(event) => onEditClick(event, note)}>
                    <div className="notes-header">
                        <button onClick={()=> onDeletelick(note.id!)}>x</button>
                    </div>
                    <h2>{note.title}</h2>
                    <p>{note.details}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default NoteList;

