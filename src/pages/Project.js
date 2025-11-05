import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import ProjectItem from "../Components/ProjectItem";
import PageIndicator from "../Components/Slice/PageIndicator";
import SEO from "../Components/SEO";

function Project() {
  useHelperFunction("Project |");
  return (
    <Layout>
      <SEO
        title="Projects - Inan Celis Portfolio"
        description="Explore my portfolio of web development projects built with React, Vue, Laravel, WordPress and modern web technologies. View case studies and live demos."
        url="https://www.inancelis.com/project"
      />
      <PageIndicator page="Projects" />
      <ProjectItem viewAll={false} otherItem={true} />
    </Layout>
  );
}

export default Project;
