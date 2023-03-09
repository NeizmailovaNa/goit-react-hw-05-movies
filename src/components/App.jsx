import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const paths = lazy(() => import ('../router/paths'));
const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (
  <Suspense>  
    <Routes>
      <Route path={paths.home} element={<Home />}></Route>;
      <Route path={paths.movies} element={<Movies />}></Route>;
      <Route path={paths.movieDetails} element={<MovieDetails />}></Route>;
      <Route path={paths.cast} element={<Cast />}></Route>;
      <Route path={paths.reviews} element={<Reviews />}></Route>;
    </Routes>  
  </Suspense>
  );
};
export default App;
