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
        description="Browse 15+ real-world web development projects. From enterprise WordPress sites to custom React applications. See live examples of e-commerce, business websites, and web apps I've built for clients worldwide."
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
