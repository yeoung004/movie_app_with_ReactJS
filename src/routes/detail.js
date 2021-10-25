import React from 'react';
import "./detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { state } = this.props.location;

        if(state){
            return (
                <div className="detail">
                    <img className="detail__poster" src={ state.poster }/>
                    <div className="detail__movie">
                        <p className="detail__movie__title">{ state.title }</p>
                        <p className="detail__movie__runtime">{state.runtime} minutes</p>
                        <p className="detail__movie__rating">{state.rating} / 10</p>
                        <ul className="detail__movie__genres">
                            {state.genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                        </ul>
                        <p className="detail__movie__story">{ state.story }</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;