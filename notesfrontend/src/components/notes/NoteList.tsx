import React, { FC, ReactElement, useEffect, useState } from 'react';
import { getNotes, NoteLookupDto } from '../../api/api';
import './NoteList.css';

const NoteList: FC<{}> = (): ReactElement => {

    const [notes, setNotes] = useState<NoteLookupDto[] | undefined>(undefined);

    useEffect(() => {
        getNotes()
            .then((arg) => {
                if (arg != null) { setNotes(arg); }
            });
    }, []);

    return (
        <div className="notes-grid">
            {notes?.map((note) => (
                <div className="note-item">
                    <div className="notes-header">
                        <button>x</button>
                    </div>
                    <h2>{note.title}</h2>
                    <p>Test data</p>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
