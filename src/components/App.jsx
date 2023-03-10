import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('../others/NotFound/NotFound'));
const SharedLayout = lazy(() => import('../others/SharedLayout/SharedLayout'));

const App = () => {
  return (
  <Suspense>  
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}></Route>;
      <Route path="movies" element={<Movies />}></Route>;
      <Route path="movieDetails" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />}></Route>;
        <Route path="reviews" element={<Reviews />}></Route>;
    </Route>;
      </Route>;
      
      <Route path="*" element={<NotFound />}></Route>
    </Routes>  
  </Suspense>
  );
};
export default App;
