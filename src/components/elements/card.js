import { useState } from 'react';
import DefaultButton from './button';
import ourWork from '../../assets/images/ourWork.svg';
import howToHelp from '../../assets/images/howToHelp.svg';
import resources from '../../assets/images/resources.svg';


const Cards = () => {
    const cardList = "Provide accompaniment to Nicaraguans seeking asylum in the U.S. " + "Seek alliances with like organizations to better serve our community. " + "Advocate for the rights of refugees and immigrants to the U.S."
    const [cardContent, setCardContent] = useState([
        {
            title: "Our Work",
            icon: ourWork,
            description: cardList
        },
        {
            title: "How To Help",
            icon: howToHelp,
            description: "NAHRA needs your support to be able to continue assisting the vulnerable population that we serve. Here are some ways in which you can make a difference! "
        },
        {
            title: "Resources",
            icon: resources,
            description: "NAHRA needs your support to be able to continue assisting the vulnerable population that we serve. Here are some ways in which you can make a difference! "
        }

    ])
        
        return(
            <div className="card-main">
                {cardContent.map((card) => (
                    <div className="card-container" key={card.title}>
                        <div className="card-title">
                            <h1>{card.title}</h1>
                        </div>
                        <div className="card-icon">
                            <img className='img' src={card.icon} alt="card icon"/>
                        </div>
                        <div className="card-description">

                            <p>{card.description}</p>
                            
                        </div>
                        <DefaultButton />
                    </div>
                ))}
            </div>
        )
    


}


export default Cards;