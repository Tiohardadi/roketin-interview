import axios from "axios";

const baseURL = "https://randomuser.me/api/";

export const getUser = async () => {
    try {
        const response = await axios.get(baseURL+'?results=25')
        return response.data.results;
    } catch(e) {
        console.log("Error: "+ e.response.data);
        return [];
    }
};