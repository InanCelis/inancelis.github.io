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
        title="About Inan Celis | Web Developer Philippines"
        description="Meet Inan Celis, passionate web developer from the Philippines. Discover my journey and expertise in creating digital solutions."
        url="https://inancelis.com/details/"
        type="profile"
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
