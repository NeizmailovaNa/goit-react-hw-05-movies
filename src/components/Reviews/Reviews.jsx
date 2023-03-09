import React, { lazy } from 'react';

const reviews = lazy(() => import('../Reviews/Reviews.module.css'))

const Reviews = () => {
    return (
        <div className={reviews}>Reviews</div>
    )
};
 export default Reviews;