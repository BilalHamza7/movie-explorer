import axios from 'axios';

const getAllMovies = async ({ pageNumber, selectedReleaseYear, selectedReleaseDateGte, selectedReleaseDateLte, selectedRating, selectedGenre }) => {

    console.log("genre ", selectedGenre);

    const params = new URLSearchParams({
        include_adult: 'false',
        include_video: 'false',
        with_original_language: 'en',
        sort_by: 'popularity.desc',
    });

    if (pageNumber) params.append('page', pageNumber);
    if (selectedReleaseYear) params.append('primary_release_year', selectedReleaseYear);
    if (selectedReleaseDateGte) params.append('primary_release_date.gte', selectedReleaseDateGte);
    if (selectedReleaseDateLte) params.append('primary_release_date.lte', selectedReleaseDateLte);
    if (selectedRating) params.append('vote_average.gte', selectedRating);
    if (selectedGenre) params.append('with_genres', selectedGenre);

    const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`;
    console.log(params.toString());

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
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default getAllMovies;