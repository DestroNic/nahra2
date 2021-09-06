import Facebook from '../../assets/images/icons/facebook.svg';
import Youtube from '../../assets/images/icons/youtube.svg';
import Instagram from '../../assets/images/icons/instagram.svg';
import Twitter from '../../assets/images/icons/twitter.svg';




const SocMediaGrid = () => {

    const socialMediaInfo = [
        {
            url:'www.facebook.com',
            icon:{Facebook}
        },
        {
            url:'www.twitter.com',
            icon:{Twitter}
        },
        {
            url:'www.youtube.com',
            icon:{Youtube}
        },
        {
            url:'www.instagram.com',
            icon:{Instagram}
        }
    ]

    return(
        <div className='footer-center-body'>
            {socialMediaInfo.map((media)=>{
               return(
            
                     <img className='Social Media' src={media.icon} alt='Social Media' />
                
                )
            })}

        </div>
    )
}

export default SocMediaGrid;