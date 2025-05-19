import React from 'react';
import '../styling/Tech.css';
import Contact from '../Contact';

function Tech() {
    return(
        <>
            <h1 class="techName">Tech and Software</h1>
            <h3> See my GitHub profile!</h3>

           
            {/* GitHub Contributions Grid */}
             {/*
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                
                <h2>My Github Contribitions</h2>
                <img
                    src="https://github-contributions-api.deno.dev/ImaniGomez.svg?bg=000000&color=c9c9c9"
                    alt="GitHub contribution graph"
                    style={{ width: '100%', maxWidth: '800px', borderRadius: '1rem' }}
                />
            </div>

                */}
                <div className="tech-blocks-container tech-grid">
                    <a href="https://github.com/ImaniGomez/Scripty" target="_blank" rel="noopener noreferrer" className="tech-block-item">
                        <div className="tech-title-overlay">Scripty</div>
                    </a>
                    <a href="https://github.com/ImaniGomez/FigureSkatingScoreCalculator" target="_blank" rel="noopener noreferrer" className="tech-block-item">
                        <div className="tech-title-overlay">Figure Skating Score Calculator</div>
                    </a>
                    <a href="https://github.com/ImaniGomez/RaspberryPi-Security-Camera-Motion-Detection" target="_blank" rel="noopener noreferrer" className="tech-block-item">
                        <div className="tech-title-overlay">Raspberry Pi Security Camera</div>
                    </a>
                    <a href="https://github.com/ImaniGomez/BoxOfficeInsights" target="_blank" rel="noopener noreferrer" className="tech-block-item">
                        <div className="tech-title-overlay">Box Office Insights</div>
                    </a>
                    <a href="https://github.com/ImaniGomez/Taxi-Demand-Forecaster" target="_blank" rel="noopener noreferrer" className="tech-block-item">
                        <div className="tech-title-overlay">Taxi Demand Forecaster</div>
                    </a>
                    <a href="https://github.com/ImaniGomez/Portfolio_Site" target="_blank" rel="noopener noreferrer" className="tech-block-item">
                        <div className="tech-title-overlay">Portfolio React Site</div>
                    </a>
                </div>

            <Contact />
        </>
    );
    
}

export default Tech;
