import React, { useEffect, useState }from 'react';
import { NavLink } from 'react-router-dom';
import LineClipPath from './Slice/LineClipPath';
import '../assets/styles/details.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Details() {

    const [age, setAge] = useState('');
    useEffect(() => {
        var birthday = '1998-09-04';
        var calculatedAge = calculate_age(birthday);
        setAge(calculatedAge);
    }, [])

    const calculate_age = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    }
    return (
        <>
        <div className='details-about container'>
            <div className='content'>
                <div className={`details`}>
                    <h3 className='font-weight-bold pb-3' data-aos="fade-up">Hello there</h3>
                    <p className="text-muted f-text-m pb-4" data-aos="fade-up">
                        I'm <b>Inan</b>, a full-stack web developer specializing in building
                        scalable web applications and intuitive user experiences. With extensive
                        expertise in modern frontend frameworks (React, Vue) and backend technologies
                        (Laravel, PHP, Node.js), I transform complex requirements into elegant,
                        high-performance solutions. <br/><br/>My approach combines technical excellence
                        with user-centered design principles, ensuring every project delivers both
                        functionality and exceptional user experience. I'm proficient in the complete
                        development lifecycle, from architecture planning to deployment, with additional
                        expertise in WordPress/Elementor Pro, database optimization, and cloud services.
                    </p>
                    <NavLink to={`/contact`} className="link">
                    <i className="fa-regular fa-paper-plane"></i> <span>Send Message</span>
                    </NavLink>
                    <div className='pt-5'>
                        <h4 className='f-text-m pb-2' data-aos="fade-up">Personal Information</h4>
                        <div className='item-border pb-5' >
                            <div data-aos="fade-up">  
                               <strong className='font-weight-bold text-muted f-text-s'>Name </strong>
                               <span>Ferdinand T. Celis</span>
                            </div> 
                            <div data-aos="fade-up">  
                               <strong className='font-weight-bold text-muted f-text-s'>Birthday</strong>
                               <span>September 4, 1998</span>
                            </div> 
                            <div data-aos="fade-up">  
                                <strong className='font-weight-bold text-muted f-text-s'>Age</strong>
                               <span>{age}</span>  
                            </div>  
                            <div data-aos="fade-up">  
                                <strong className='font-weight-bold text-muted f-text-s'>Degree</strong>
                               <span>
                                    Bachelor of Science in Information Technology
                                </span>  
                            </div>  
                        </div>
                    </div>
                    
                </div>
                <div className='image' data-aos="fade-up">
                    <LineClipPath content={`About me`} textClass={'f-text-s'}/>
                    <LazyLoadImage src={require(`../assets/images/me-at-office.jpg`)} />
                </div>
            </div>
        </div> 
        </>
    )
}

export default Details;