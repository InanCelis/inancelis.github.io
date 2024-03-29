import { NavLink } from 'react-router-dom';
import LineClipPath from './Slice/LineClipPath';
import '../assets/styles/details.scss';

function Details() {
    return (
        <div className='details-about container'>
            <div className='content'>
                <div className={`details`}>
                    <h3 className='font-weight-bold pb-3'>Hello there</h3>
                    <p className="text-muted mb-4  f-text-m">
                        I'm a dedicated web developer with a deep passion 
                        for frontend technologies. My journey in web development 
                        started with a fascination for creating intuitive and engaging 
                        user interfaces. Over the years, I've honed my skills in HTML, 
                        CSS, JavaScript, and frameworks like React, WordPress, Laravel always aiming 
                        to deliver seamless web experiences. <br/><br/>Beyond coding, my life is enriched by my 
                        love for pets. Whether it's a break for a play or simply having a furry 
                        friend by my side while I code, they remind me of the importance of 
                        balance and empathy, qualities I bring into my development projects.
                    </p>
                    <NavLink target={"_blank"} to={`#`} className="link" >
                    <i class="fa-regular fa-paper-plane"></i> <span>Send Message</span>
                    </NavLink>
                </div>
                <div className='image'>
                    <LineClipPath content={`About me`} textClass={'f-text-s'}/>
                    <img src={require(`../assets/images/me-at-office.jpg`)}  className="shadow" />
                </div>
            </div>
        </div> 
    )
}

export default Details;