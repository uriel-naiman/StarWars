import axios from "axios";

const BaseUrl = 'https://swapi.dev/api/films/';

export const getMovies =async () => {
    const response = await axios.get(`${BaseUrl}`);
        return response.data;
}

