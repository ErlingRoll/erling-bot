import axios from "axios";

export default class MemeAPI {
    static getRandomMeme(subReddit?: string) {
        let endpoint = "https://meme-api.herokuapp.com/gimme";
        if (subReddit) endpoint += "/" + subReddit;
        return axios.get(endpoint).catch(_error => {});
    }
}
