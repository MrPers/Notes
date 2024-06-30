import React, { FC, ReactElement, useEffect, useState } from 'react';
import { getNotes, Note } from '../../api/api';
import { EditNote } from '../editNote/EditNote';
import './NoteList.css';

const NoteList: FC<{}> = (): ReactElement => {

    const [notes, setNotes] = useState<Note[] | undefined>(undefined);
    const [note, setNote] = useState<Note| undefined>(undefined);
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

    useEffect(() => {
        getNotes()
            .then((arg) => {
                if (arg != null) { setNotes(arg); }
            });
    }, []);

    const onEditClick = (note:Note) => {
        setModalInfoOpen(true);
        setNote(note);
    };
    return (
        <>
        <EditNote isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)} note= {note}/>
        <div className="notes-grid">
            {notes?.map((note) => (
                <div className="note-item" onClick={() => onEditClick(note)}>
                    <div className="notes-header">
                        <button>x</button>
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