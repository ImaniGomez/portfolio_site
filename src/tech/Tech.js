import React from 'react';
import '../styling/Tech.css';

function Tech() {
    return(
        <>
            <h1 class="techName">Tech and Software</h1>



            <div className="film-blocks-container">
                {tech.map((film) => (
                    <Link to={`/tech/${tech.id}`} key={tech.id} className="tech-block-item">
                    </Link>
                ))}
                </div>
        </>
    );
    
}

export default Tech;
