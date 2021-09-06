import React from 'react';
import Cards from './elements/card';
import nahraPic from '../assets/images/bodypic.jpg';




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
            <div className='main-banner'>
                <div className='main-banner-left'>
                    <div className='background-square'></div>
                    <img className='body-img' src={nahraPic} alt='body picture' />
                </div>
                <div className='main-banner-right'>
                    <h1>Nicaraguan-American Human Rights Alliance</h1>
                    <p>NAHRA is a 501(c)(3) nonprofit organization that promotes and defends the human rights of Nicaraguan migrants and refugees who had to flee their home country due to persecution.<br />

Government repression and human rights violations in Nicaragua since April 2018 forced 100,000+ people to flee violence and seek refuge in other countries, mainly neighboring Costa Rica and the United States.<br /><br />

The ZERO TOLERANCE policy and anti-immigration sentiments have contributed to the REVICTIMIZATION of those affected by the genocide in Nicaragua.<br />

Immigrants in deportation proceedings do not have the right to free representation. Without a lawyer, many will likely lose their case and be sent back to the nightmare they were escaping. For many, deportation is the equivalent of illegal incarceration or worse, a death sentence. </p>
                </div>
            </div>
        </div>
    )
}

export default Home;