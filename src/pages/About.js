import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import Details from "../Components/Details";
import PageIndicator from "../Components/Slice/PageIndicator";
import SEO from "../Components/SEO";

function About() {
  useHelperFunction("Details |");

  return (
    <Layout>
      <SEO
        title="About Inan Celis | WordPress Developer Philippines"
        description="Meet Inan Celis, WordPress and website developer from the Philippines. Specializing in custom WordPress development, business websites, and web solutions."
        url="https://inancelis.com/details/"
        type="profile"
        breadcrumbs={[
          { name: "Home", url: "https://inancelis.com/" },
          { name: "About", url: "https://inancelis.com/details/" },
        ]}
      />
      <div className="container">
        <h1 className="page-title">About Me</h1>
        <div className="text-container">
          <Details />
        </div>
      </div>
      <PageIndicator page="Details" />
    </Layout>
  );
}

export default About;
