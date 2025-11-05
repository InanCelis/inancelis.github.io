import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import Details from '../Components/Details';
import PageIndicator from '../Components/Slice/PageIndicator';
import SEO from '../Components/SEO';

function About() {
  useHelperFunction('Details |');


  return (
    <Layout>
      <SEO
        title="About Me - Inan Celis"
        description="Learn more about Inan Celis, a full-stack web developer with expertise in React, Vue, Laravel, and WordPress. Building scalable web applications with modern technologies."
        url="https://www.inancelis.com/details"
        type="profile"
      />
      <PageIndicator page='Details'/>
      <div className='container pt-5'>
        <div className="text-container">
          <Details />
        </div>
      </div>
    </Layout>
  );
}

export default About;
