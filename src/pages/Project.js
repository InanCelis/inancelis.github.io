import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
// import '../assets/styles/project.scss';
import ProjectItem from '../Components/ProjectItem';
function Project() {
    useHelperFunction('Project |');
  return (
    <Layout>
      <ProjectItem viewAll={false} otherItem={true}/>
    </Layout>
  );
}

export default Project;