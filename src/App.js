
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            <Route path="*" element={<NotFound />} />
            <Route exact path='/' element={<Home/>}/>
            <Route>
              <Route exact path='/project' element={<Project/>}/>
              <Route path='/project/:id' element={<ProjectView/>}/>
            </Route>
            <Route>
              <Route exact path='/blog' element={<Blog/>}/>
              <Route path='/blog/:slug' element={<BlogPost/>}/>
            </Route>
            <Route exact path='/details' element={<About/>}/>
            <Route exact path='/resume' element={<Resume/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
        </Fragment>
      </BrowserRouter>

  );

}

export default App;
