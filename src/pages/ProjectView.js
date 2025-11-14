import React, { useEffect, useState }from 'react';
import Layout from '../Components/Layout/Layout';
import AlertPopup from '../Components/Slice/AlertPopup';
import { NavLink, useNavigate} from 'react-router-dom';
import { useHelperFunction } from '../utils/helperFuntion';
import '../assets/styles/project.scss';
import project from '../api/projects.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProjectImageSlider from '../Components/Slice/ProjectImageSlider';

function ProjectView() {
  
    const [projItem, setProjItem] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const navigate = useNavigate();
    const [alert, setAlert] = useState({message: '', type: '', isVisible: false});
    // const [next, setNext] = useState();
    let data = project;
    let str = window.location.href;
    str = str.split("/").filter(segment => segment !== ""); // Remove empty segments
    let obj = data.filter(item => item.url === str[str.length - 1]);
    
    useEffect(() => {
        // console.log(obj)
        if(obj.length === 0) {
          navigate("/not-found")
        } else {
          setProjItem(obj[0]) 
          document.title = `${projItem.company} | Inan The Future`;
          setCurrentPage(obj[0].id)
        }
        
        
    });
    useHelperFunction('nothing');
  
    const redirectPage = (to) => {
      window.scrollTo(0, 0);

      setTimeout(() => {
        let currentPage = parseInt(obj[0].id);
        if(to === 'prev') {
          let prevNum = currentPage - 1 ;
          let prevLink = data.filter(item => item.id === prevNum);
          if(prevLink.length === 0) {
            setAlert({message: 'No previous project, please click Next.', type: 'error', isVisible: true});
          } else {
            navigate(`/project/${prevLink[0].url}/`);
            window.location.reload(false);
          }

        } else {
            let nextNum = currentPage + 1 ;
            let nextLink = data.filter(item => item.id === nextNum);
            if(nextLink.length === 0) {
              setAlert({message: 'No more project, please click Previous.', type: 'error', isVisible: true});
            } else {
              navigate(`/project/${nextLink[0].url}/`);
              window.location.reload(false);
            }
        }
      }, 1000);
      
    } 
    
    
    
  return (
    <Layout>
      <>
        <AlertPopup
              alertInfo={alert}
              onClose={() => setAlert(alert.isVisible = false)}
          />
        <div className='paginator shadow'>
          <button type="button" onClick={() => redirectPage('prev')} data-toggle="tooltip" data-placement="left" title="Previous">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button type="button" onClick={() => redirectPage('next')} data-toggle="tooltip" data-placement="left" title="Next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className='project-item-bg' style={{position: 'fixed', backgroundImage: `url('/project/${projItem.imageBg}')`}}></div>
        <div className='project-item-content container' key={projItem.id}>
          <div className='details' >
            <h1 className='title-3' data-aos="fade-up">{projItem.company}</h1>
            <p className='text-muted f-text-m' data-aos="fade-up">
              {projItem.description } {projItem.responsibilities}
            </p>
            { projItem.website ?(
              <NavLink target={"_blank"} to={`${projItem.website}`} className='link'>
                <i className="fa-solid fa-chevron-right"></i> <span>Visit website</span>
              </NavLink>
            ) : ''}
          </div>
          <div className='tools'>
            {projItem.tools?.map(tool => (  
              <div key={tool} data-aos="fade-up">  
                {tool}  
              </div>  
            ))}  
          </div>
        </div>
        <div className='container pt-4' style={{paddingBottom: '5rem' }}>
          <ProjectImageSlider data={projItem.featured_image} />
          {/* {projItem.featured_image?.map(featured => (  
              <LazyLoadImage src={`project/featured/${featured}`}  className="w-100 mb-3" key={featured} data-aos="fade-up"/>
          ))}  */}
          
        </div>
      </>
      
    </Layout>
  );
}

export default ProjectView;