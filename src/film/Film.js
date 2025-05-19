import React from 'react';
import '../styling/Film.css';
import { films } from './filmData';
import { Link } from 'react-router-dom';
import Contact from '../Contact';

function Film() {
    return (
        <>

            <h1 className="filmsTitle"> FILMS </h1>

            <div className="film-container">
                <div className="video-wrapper">
                    <iframe
                    src="https://player.vimeo.com/video/898973280" 
                    allow="fullscreen; picture-in-picture"
                    title="Film Reel"
                    className='reelBlock'
                    ></iframe>
                </div>

                 {/* Film Blocks */}
                 <div className="film-blocks-container">
                {films.map((film) => (
                    <Link to={`/films/${film.id}`} key={film.id} className="film-block-item">
                    <div
                        className="film-background"
                        style={{
                        backgroundImage: `url(${film.thumbnailUrl || film.coverImage})`
                        }}
                    >
                        <div className="film-title-overlay">
                        <h2>{film.title}</h2>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>

            <Contact />
        
        </>
    );

}

export default Film;
