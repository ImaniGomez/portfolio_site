// FilmPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { films } from './filmData';
import '../styling/FilmPage.css';
import { Link } from 'react-router-dom';


function FilmPage() {
    const { id } = useParams();
    const film = films.find((f) => f.id === id);

    if (!film) return <div>Film not found</div>;

    const currentIndex = films.findIndex(film => film.id === id); // adjust based on your data structure

    const prevFilm = currentIndex > 0
    ? films[currentIndex - 1]
    : films[films.length - 1];

    const nextFilm = currentIndex < films.length - 1
    ? films[currentIndex + 1]
    : films[0];
    
    let crewList = film.crew.split(",").map(line => <span>{line},<br/></span>);
  return (
    <>
      <div className="film-page">
      <h1 className="filmsTitle">{film.title}</h1>
      <div className="film-container">

      
        <div className="video-wrapper">
          <iframe
            src={film.videoUrl}
            allow="fullscreen; picture-in-picture"
            className="reelBlock"
            title="Film Reel"
          ></iframe>
        </div>
        <p className="filmDescription">{film.description}</p>
        <h1 className="crewHeader"> -CREW- </h1>
        <p className="crewList">{crewList}</p>

        <div className="film-footer">
          <Link to={`/films/${prevFilm.id}`}>
            <h3>&larr;  {prevFilm.title}</h3>
          </Link>
          <Link to="/Film" className="no-styling">
            <h3>All Films</h3>
            </Link>
          <Link to={`/films/${nextFilm.id}`}>
            <h3>{nextFilm.title}  &rarr;</h3>
          </Link>
        </div>

      </div>
      </div>


        
    </>
  );
}


export default FilmPage;
