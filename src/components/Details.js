import React, {Component} from 'react'

class Details extends Component {
    render() {
        const filmDetails = this.props.films.map((film) => {
            (
               <div>
                   <h1>{film.title}</h1>
               </div>
           )
       })
        return ( 
          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <h1>
                <ul>{filmDetails}</ul>
            </h1>
          </div>
      );
    }
  }
  
  export default Details;