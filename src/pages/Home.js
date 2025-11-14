import { useHelperFunction } from "../utils/helperFuntion";
import Layout from "../Components/Layout/Layout";
import ProjectItem from "../Components/ProjectItem";
import Me from "../assets/images/meee.png";
import "../assets/styles/home.scss";
import RainbowSwirl from "../Components/RainbowSwirl";
import MouseScroll from "../Components/Slice/MouseScroll";
import HomeIntro from "../Components/HomeIntro";
import Details from "../Components/Details";
import Work from "../Components/Work";
import Expertise from "../Components/Expertise";
import Skills from "../Components/Skills";
import SEO from "../Components/SEO";
import ResumeButton from "../Components/Slice/ResumeButton";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ferdinand T. Celis (Inan Celis)",
  alternateName: "Inan Celis",
  url: "https://inancelis.com/",
  image: "https://inancelis.com/static/media/meee.4c7463169d8947aeed63.png",
  jobTitle: "Full Stack Web Developer",
  description:
    "Professional web developer in the Philippines specializing in React, Laravel, Vue, and WordPress development",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Philippines",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  sameAs: ["https://github.com/inancelis", "https://linkedin.com/in/inancelis"],
  knowsAbout: [
    "React",
    "Vue",
    "Laravel",
    "PHP",
    "JavaScript",
    "WordPress",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bachelor of Science in Information Technology",
  },
};

function Home() {
  useHelperFunction("");
  return (
    <Layout>
      <SEO
        title="Website Developer Philippines | Web Development Philippines | Inan Celis"
        description="Expert website developer Philippines. Professional web development Philippines services - React, Vue, Laravel, WordPress (Elementor). Quality websites."
        url="https://inancelis.com/"
        structuredData={structuredData}
      />
      <div className="d-none d-md-block">
        <RainbowSwirl position={"Absolute"} />
      </div>
      <div className="container">
        <HomeIntro photo={Me} />
        <MouseScroll />
      </div>
      <div>
        <ProjectItem
          itemCount={3}
          viewAll={true}
          hasObject={null}
          otherItem={false}
        />
      </div>
      <div className="margin-top-big padding-mobile">
        <Details />
      </div>
      <div className="margin-top-big">
        <Expertise />
      </div>
      <div className="margin-top-big">
        <Skills />
      </div>
      <div className="margin-top-big">
        <Work />
      </div>
      <div className="d-flex justify-content-center pb-5">
        <ResumeButton />
      </div>
    </Layout>
  );
}

export default Home;
