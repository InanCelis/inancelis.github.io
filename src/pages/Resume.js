import React from "react";
import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import Expertise from "../Components/Expertise";
import Work from "../Components/Work";
import Skills from "../Components/Skills";
import PageIndicator from "../Components/Slice/PageIndicator";
// import { NavLink } from 'react-router-dom';
import ResumeButton from "../Components/Slice/ResumeButton";
function Resume() {
  useHelperFunction("Resume |");

  return (
    <Layout>
      <PageIndicator page="Resume" />
      <div className="pt-5 pb-5">
        <Expertise />
      </div>
      <div className="pt-5 pb-5">
        <Skills />
      </div>
      <div className="pt-5">
        <Work />
      </div>
      <div className="d-flex justify-content-center pb-5">
        <ResumeButton />
      </div>
    </Layout>
  );
}

export default Resume;
