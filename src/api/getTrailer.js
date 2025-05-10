import axios from 'axios';

const getTrailer = async (id) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzMzNTZhNTZjZmQ5Nzk0MGY5Mjg5YmM5MzdkNDAwNyIsIm5iZiI6MTc0NjY4OTczOS43NDIsInN1YiI6IjY4MWM1ZWNiNTBjNDZkNmY0ZDNlYzcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejvhFexR7SgsUG5_fhkop9eZ_ZOss9pz-pkN6yqrVAY'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default getTrailer;