import React, {Component} from 'react'
import FilmRow from './FilmRow';

class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film) => {
            return (
                <div>
                    <FilmRow film={film}
                    // key={film-row}
                    />
                </div>
            )
        })
      return (
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div>
                    <h1>{allFilms}</h1>
                    {/* <h1>{this.props.films[0].title}</h1> */}
                </div>
            </div>
        </>
      );
    }
  }
  
  export default FilmList;