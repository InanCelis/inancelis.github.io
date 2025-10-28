import React from "react";
import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
// import '../assets/styles/project.scss';
import ProjectItem from "../Components/ProjectItem";
import PageIndicator from "../Components/Slice/PageIndicator";
function Project() {
  useHelperFunction("Project |");
  return (
    <Layout>
      <PageIndicator page="Projects" />
      <ProjectItem viewAll={false} otherItem={true} />
    </Layout>
  );
}

export default Project;
