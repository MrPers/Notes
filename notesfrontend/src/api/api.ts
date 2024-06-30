import axios from "axios";
import { getAccessToken } from "../auth/user-service";

const url = "https://localhost:5001";

export async function getNotes(): Promise<Note[] | void> {
    try {
        const res = await axios
            .get(url + "/note/allFullInformation",
                { headers: {
                    "Authorization": "Bearer " + getAccessToken()
                } });
        return res.data.notes;
    } catch (err) {
        return console.error(err);
    }
}

export async function updateNote(body: Note): Promise<void> {
    try {
        const res = await axios
            .put(url + "/note",
                body,
                { headers: {
                    "Authorization": "Bearer " + getAccessToken()
                } });
        return res.data.notes;
    } catch (err) {
        return console.error(err);
    }
}

export async function addNote(body: CreateNote): Promise<void> {
    try {
        const res = await axios
            .post(url + "/note",
                body,
                { headers: {
                    "Authorization": "Bearer " + getAccessToken()
                } });
        return res.data.notes;
    } catch (err) {
        return console.error(err);
    }
}

export async function deleteNote(id: string): Promise<void> {
    try {
        const res = await axios
            .delete(url + "/note/" + id,
            { headers: {
                "Authorization": "Bearer " + getAccessToken()
            } });
        return res.data.notes;
    } catch (err) {
        return console.error(err);
    }
}

export interface Note {
    id?: string;
    title?: string | undefined;
    details?: string | undefined;
}

export interface CreateNote {
    title?: string | undefined;
    details?: string | undefined;
}