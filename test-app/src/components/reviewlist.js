import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {

    render() {
        let reviews = [
            { reviewname: 'Terrible' },
            { moviename: 'Funny' },
            { moviename: 'Hilarious' },
            { moviename: 'Comical' }
        ]
        return (
            <div>
                {reviews.map((review, index) => {
                    return <Review key={index} review={review} />
                })}

            </div>
        )
    }
}