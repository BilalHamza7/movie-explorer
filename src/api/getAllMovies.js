import axios from 'axios';

const getAllMovies = async ({ pageNumber, releaseYear, releaseDateGreaterThan, releaseDateLessThan, rating, genres }) => {

    const params = new URLSearchParams({
        include_adult: 'false',
        include_video: 'false',
        sort_by: 'primary_release_date.desc',
    });

    if (pageNumber) params.append('page', pageNumber);
    if (releaseYear) params.append('primary_release_year', releaseYear);
    if (releaseDateGreaterThan) params.append('primary_release_date.gte', releaseDateGreaterThan);
    if (releaseDateLessThan) params.append('primary_release_date.lte', releaseDateLessThan);
    if (rating) params.append('vote_average.gte', rating);
    if (genres) params.append('with_genres', genres);

    const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`;

    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzMzNTZhNTZjZmQ5Nzk0MGY5Mjg5YmM5MzdkNDAwNyIsIm5iZiI6MTc0NjY4OTczOS43NDIsInN1YiI6IjY4MWM1ZWNiNTBjNDZkNmY0ZDNlYzcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ejvhFexR7SgsUG5_fhkop9eZ_ZOss9pz-pkN6yqrVAY'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default getAllMovies;