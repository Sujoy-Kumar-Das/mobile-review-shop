import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const MyReview = () => {
    UseTitle('my-reviews')
    return (
        <div className='mb-20'>
            <h2 className={`text-4xl text-center`}>My Reviews</h2>
        </div>
    );
};

export default MyReview;