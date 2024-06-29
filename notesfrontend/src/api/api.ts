import axios from "axios";
import { getAccessToken } from "../auth/user-service";

    
export async function getNotes(): Promise<NoteLookupDto[] | void> {
    try {
        const res = await axios
            .get("https://localhost:5001/api/Note", {
                headers: {
                    "Authorization": "Bearer " + getAccessToken()
                }
            });
        return res.data.notes;
    } catch (err) {
        return console.error(err);
    }
}

export interface NoteLookupDto {
    id?: string;
    title?: string | undefined;
}