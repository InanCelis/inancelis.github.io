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
        description="Browse 15+ web development projects. Enterprise WordPress sites, custom React apps, e-commerce, and business websites."
        url="https://inancelis.com/project/"
      />

      <div className="container">
        <h1 className="page-title">My Projects</h1>
      </div>
      <ProjectItem viewAll={false} otherItem={true} />
      <PageIndicator page="Projects" />
    </Layout>
  );
}

export default Project;
