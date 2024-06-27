import axios from "axios";
import { getAccessToken } from "../auth/user-service";

    
export async function w() {
    await axios
    .get("https://localhost:5001/api/Note",{
        headers: {
            "Authorization": "Bearer " + await getAccessToken()
        }
    })
    .then((res) => {return res.data.notes;})
    .catch((err) => console.error(err));

}