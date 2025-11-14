
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import ProjectView from "./pages/ProjectView";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function RedirectToTrailingSlash() {
  const location = useLocation();
  return <Navigate to={`${location.pathname}/`} replace />;
}

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
      <BrowserRouter>
        <ScrollToTop />
        <div id="cursor"></div>
        <div id="cursor-border"></div>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Home/>}/>

            {/* Redirects for URLs without trailing slashes */}
            <Route path='/project' element={<Navigate to="/project/" replace />} />
            <Route path='/blog' element={<Navigate to="/blog/" replace />} />
            <Route path='/details' element={<Navigate to="/details/" replace />} />
            <Route path='/resume' element={<Navigate to="/resume/" replace />} />
            <Route path='/contact' element={<Navigate to="/contact/" replace />} />

            {/* Routes with trailing slashes */}
            <Route exact path='/project/' element={<Project/>}/>
            <Route path='/project/:id/' element={<ProjectView/>}/>
            <Route path='/project/:id' element={<RedirectToTrailingSlash />} />

            <Route exact path='/blog/' element={<Blog/>}/>
            <Route path='/blog/:slug/' element={<BlogPost/>}/>
            <Route path='/blog/:slug' element={<RedirectToTrailingSlash />} />

            <Route exact path='/details/' element={<About/>}/>
            <Route exact path='/resume/' element={<Resume/>}/>
            <Route exact path='/contact/' element={<Contact/>}/>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Fragment>
      </BrowserRouter>

  );

}

export default App;
