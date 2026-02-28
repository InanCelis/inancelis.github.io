import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import ProjectItem from "../Components/ProjectItem";
import PageIndicator from "../Components/Slice/PageIndicator";
import SEO from "../Components/SEO";

const projectStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Web Development Projects by Inan Celis",
  description: "Browse 15+ web development projects including custom WordPress sites, WooCommerce stores, business websites, and web applications.",
  url: "https://inancelis.com/project/",
  author: {
    "@type": "Person",
    name: "Ferdinand T. Celis (Inan Celis)",
    url: "https://inancelis.com/",
  },
};

function Project() {
  useHelperFunction("Project |");
  return (
    <Layout>
      <SEO
        title="Web Development Projects Portfolio Philippines"
        description="Browse 15+ web development projects by Inan Celis. Custom WordPress sites, WooCommerce stores, business websites, and web applications built in the Philippines."
        url="https://inancelis.com/project/"
        structuredData={projectStructuredData}
        breadcrumbs={[
          { name: "Home", url: "https://inancelis.com/" },
          { name: "Projects", url: "https://inancelis.com/project/" },
        ]}
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
