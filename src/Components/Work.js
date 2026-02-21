import parse from 'html-react-parser'
import "../assets/styles/work.scss";
import data from '../api/work.json';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function Work() {


    const works = data.slice(0, 5).map((w) =>{
        return (
            <div className="w-item shadow" key={w.id} data-aos="fade-up">
                <div className="w-header">
                    <div className="company-position">
                        {w.position} - {w.job_type}
                    </div>
                    <div className="year">{w.from_date} - {w.to_date}</div>
                </div>
                <div className="w-content">
                    <div className="w-details">
                        <p className="font-weight-bold f-text-m">{w.company}</p>
                        <span className="pr-3"><i className="fa-solid fa-location-dot textMain"></i> {w.address}</span>
                        <span><a href={`${w.site}`} target="_blank"><i className="fa-solid fa-link textMain"></i> {w.site_text}</a></span>
                    
                        <div className='pt-3 pb-2'>
                            {parse(w.description)}
                        </div>
                        <div className="tool-used">
                            {w.tool.map(function(item, index){
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                    </div>
                    <div className="w-logo">
                        <LazyLoadImage
                            src={w.logo.startsWith('http') ? w.logo : require(`../assets/images/company/${w.logo}`)}
                            className="my-image"
                        />
                    </div>
                </div>
             </div>
        )
    })
    return (
      <div className="work container">
        <h3 className='font-weight-bold text-center pb-5' data-aos="fade-up">Professional Experience</h3>
        {works}
      </div>
      
    )
}

export default Work;