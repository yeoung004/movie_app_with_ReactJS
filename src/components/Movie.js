import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres, story, runtime, rating}) {
    return (
        <div className="movie">
            <Link to=
            {{
                pathname: `/detail/${id}`,
                state: {
                    story,
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                    story,
                    runtime,
                    rating
                }
            }}>
                <img className="movie__poster" src={poster} alt={title} title={title}/>
            </Link>
            <div className="movie__data">
                <h3 className="movie__title">{title.slice(0,40)}{title.length <= 40? "" : "..." }</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.slice(0,2).map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                </ul>
                <p className="movie__summary">{summary.slice(0,170)}{summary.length <= 0? "" : "..." }</p>
            </div>
        </div>
    
    );
} 

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;