import React from 'react';
import Cards from './elements/card';



function Home() {
    return (
        <div className="home-body">
            <div className="home-container">
                    <div className="container-description">
                    <div className="nahra-badge">
                        <p className="acronym">NAHRA</p><hr />
                        <p className="description">Nicaraguan-American Human Rights Alliance</p>
                    </div>
                    <div className="home-intro">
                        <p>NAHRA is a 501(c)(3) nonprofit organization that promotes and defends the human rights of Nicaraguan migrants and refugees who had to flee their home country due to persecution. </p>
                    </div>
                    <div className="home-learn-more">
                        <a href="#">Learn More</a>
                    </div>
                    </div>
                
            </div>
            <div className="home-content">
                <div className="recent-posts">
                    <Cards />
                </div>
            </div>
            
        </div>
    )
}

export default Home;