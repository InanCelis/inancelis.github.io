import Layout from "../Components/Layout/Layout";
import { useHelperFunction } from "../utils/helperFuntion";
import Expertise from "../Components/Expertise";
import Work from "../Components/Work";
import Skills from "../Components/Skills";
import PageIndicator from "../Components/Slice/PageIndicator";
import ResumeButton from "../Components/Slice/ResumeButton";
import SEO from "../Components/SEO";

const resumeStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Resume - Inan Celis, WordPress & Website Developer",
  description: "Professional resume of Inan Celis. WordPress and website developer in the Philippines with expertise in WordPress, WooCommerce, PHP, Laravel, and React.",
  url: "https://inancelis.com/resume/",
  mainEntity: {
    "@type": "Person",
    name: "Ferdinand T. Celis (Inan Celis)",
    jobTitle: "WordPress & Website Developer",
    url: "https://inancelis.com/",
    knowsAbout: ["WordPress", "WooCommerce", "PHP", "Laravel", "JavaScript", "React", "Vue"],
  },
};

function Resume() {
  useHelperFunction("Resume |");

  return (
    <Layout>
      <SEO
        title="Resume | WordPress & Website Developer Philippines"
        description="Download Inan Celis' resume. WordPress and website developer in the Philippines with expertise in WordPress, WooCommerce, PHP, Laravel, and React. View skills and experience."
        url="https://inancelis.com/resume/"
        structuredData={resumeStructuredData}
        breadcrumbs={[
          { name: "Home", url: "https://inancelis.com/" },
          { name: "Resume", url: "https://inancelis.com/resume/" },
        ]}
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
