import React, { lazy } from 'react';

const movieDetails = lazy(() => import('../MovieDetails/MovieDetails.module.css'))

const MovieDetails = () => {
    return (
        <div className={movieDetails}>Home</div>
    )
};
 export default MovieDetails;