import React, { lazy } from 'react';

const home = lazy(() => import('../Home/Home.module.css'))

const Home = () => {
    return (
        <button type='button' className={home}>Home</button>
    )
};
 export default Home;