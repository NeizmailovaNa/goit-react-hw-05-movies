import React, { lazy } from 'react';

const cast = lazy(() => import('../Home/Home.module.css'))

const Cast = () => {
    return (
        <div className={cast}>Home</div>
    )
};
 export default Cast;