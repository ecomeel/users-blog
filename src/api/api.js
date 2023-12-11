import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export function getAlbums() {
    return axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.data);
}
