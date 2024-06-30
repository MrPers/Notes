import axios from "axios";
import { getAccessToken } from "../auth/user-service";

export async function getNotes(): Promise<Note[] | void> {
    try {
        const res = await axios
            .get("https://localhost:5001/note/allFullInformation", {
                headers: {
                    "Authorization": "Bearer " + getAccessToken()
                }
            });
        return res.data.notes;
    } catch (err) {
        return console.error(err);
    }
}

export async function updateNote(body: Note): Promise<void> {
    try {
        debugger;
        const res = await axios
            .put("https://localhost:5001/note",
                body,
                {
                    headers: {
                        "Authorization": "Bearer " + getAccessToken()
                    }
                });
        return res.data.notes;
    } catch (err) {
        debugger;
        return console.error(err);
    }
}



export interface Note {
    id?: string;
    title?: string | undefined;
    details?: string | undefined;
}