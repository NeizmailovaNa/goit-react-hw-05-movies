import React, { lazy } from 'react';

const movies = lazy(() => import('../Movies/Movies.module.css'))

const Movies = () => {
    return (
        <button type='button' className={movies}>Movies</button>
    )
};
 export default Movies;