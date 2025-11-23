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
        title="Web Development Projects Portfolio Philippines"
        description="Browse 15+ web development projects by Inan Celis. Enterprise WordPress sites, custom React apps, e-commerce platforms, and business websites built in the Philippines."
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
