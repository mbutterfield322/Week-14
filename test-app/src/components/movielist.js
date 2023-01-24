import React from 'react';
import Movie from './movie';
export default class MovieList extends React.Component {

    render() {
        let movies = [
            { moviename: 'Step Brothers' },
            { moviename: 'The Wedding Ringer' },
            { moviename: 'The Hangover' },
            { moviename: 'The Interview' }
        ]
        return (
            <div>
                Test
                {movies.map((movie, index) => (

<Movie

  key={index}

  name={movie.moviename}


/>

))}

            </div>
        )
    }
}