import React, { FC, ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessToken } from '../auth/user-service';

export interface NoteLookupDto {
    id?: string;
    title?: string | undefined;
}

const NoteList: FC<{}> = (): ReactElement => {

    const [notes, setNotes] = useState<NoteLookupDto[] | undefined>(undefined);
    
    async function getNotes() {
        axios
        .get("https://localhost:5001/api/Note",{
            headers: {
                "Authorization": "Bearer " + await getAccessToken()
            }
        })
        .then((res) => setNotes(res.data.notes))
        .catch((err) => console.error(err));
    }

    useEffect(() => {
        getNotes();
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
