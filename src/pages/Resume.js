import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import Expertise from "../Components/Expertise";
import Work from "../Components/Work";
import Skills from "../Components/Skills";
import PageIndicator from "../Components/Slice/PageIndicator";
import ResumeButton from "../Components/Slice/ResumeButton";
import SEO from "../Components/SEO";

function Resume() {
  useHelperFunction("Resume |");

  return (
    <Layout>
      <SEO
        title="Resume - Inan Celis | Full Stack Developer"
        description="Download Inan Celis' professional resume. Detailed work experience, technical skills, education, and certifications. Proven expertise in building enterprise web applications and leading development teams."
        url="https://inancelis.com/resume/"
      />
      <div className="container">
        <h1 className="page-title">My Resume</h1>
      </div>
      <div className="pb-5">
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
      <PageIndicator page="Resume" />
    </Layout>
  );
}

export default Resume;
