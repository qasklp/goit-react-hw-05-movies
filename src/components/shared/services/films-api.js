import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: "bd3df65c58adfe1a0f9f7b7557ea4fe2",
    }
})

export const trendingFilms = async () => {
    const { data } = await instance.get(`trending/movie/day`);
    return data;
}

export const getMovieDetails = async (id) => {
    const { data } = await instance.get(`movie/${id}`);
    return data;
}

export const searchMovies = async (query) => {
    const { data } = await instance.get(`search/movie`, {
        params: {
            query,
        }
    });
    return data;
}

export const getCast = async (id) => {
    const { data } = await instance.get(`movie/${id}/credits`);
    return data;
}

export const getReviews = async (id) => {
    const { data } = await instance.get(`movie/${id}/reviews`);
    return data;
}



