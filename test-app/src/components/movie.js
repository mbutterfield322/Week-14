import React from 'react';

export default class Movie extends React.Component {
render() {
return(
    <div>
<h1>{this.props.movie.moviename}</h1>
    </div>
)
}
}