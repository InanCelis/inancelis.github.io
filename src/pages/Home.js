import React from "react";
import { useHelperFunction } from "../utils/helperFuntion";
import Layout from "../Components/Layout/Layout";
import ProjectItem from "../Components/ProjectItem";
import Me from "../assets/images/meee.png";
import "../assets/styles/home.scss";
import RainbowSwirl from "../Components/RainbowSwirl";
import MouseScroll from "../Components/Slice/MouseScroll";
import HomeIntro from "../Components/HomeIntro";
import Details from "../Components/Details";
import Work from "../Components/Work";
import Expertise from "../Components/Expertise";
import Skills from "../Components/Skills";
import { NavLink } from "react-router-dom";
import MetaSetup from "../Components/MetaSetup";
import ResumeButton from "../Components/Slice/ResumeButton";
function Home() {
  useHelperFunction("");
  return (
    <Layout>
      <MetaSetup />
      <div className="d-none d-md-block">
        <RainbowSwirl position={"Absolute"} />
      </div>
      <div className="container">
        <HomeIntro photo={Me} />
        <MouseScroll />
      </div>
      <div>
        <ProjectItem
          itemCount={3}
          viewAll={true}
          hasObject={null}
          otherItem={false}
        />
      </div>
      <div className="margin-top-big padding-mobile">
        <Details />
      </div>
      <div className="margin-top-big">
        <Expertise />
      </div>
      <div className="margin-top-big">
        <Skills />
      </div>
      <div className="margin-top-big">
        <Work />
      </div>
      <div className="d-flex justify-content-center pb-5">
        <ResumeButton />
      </div>
    </Layout>
  );
}

export default Home;
