import React from 'react';
import Stars from './stars';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
        };
    }

    render() {

        let reviews = [];
        if(this.state.reviews) {
            for (let reviews of this.state.reviews) {
                reviews.push
            }
        }
    return(
    <div>
    <h3>Review</h3>
<label htmlFor="fname">Review:</label>
<input type="text" id="text" name="text"/>
</div>

)
}
}