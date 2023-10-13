import { useEffect } from 'react'
import { BsPlayCircle } from "react-icons/bs";
import { aos } from '../../utils/Animation/aos-animation';
import AboutUs from './aboutus';
import SchoolTech from './SchoolTech';



const Home = ({ navigate }: any) => {
  useEffect(() => {
    aos.animate();
  }, []);

  return (
    <>

      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>Welcome to <span>FlaveConsole</span></h1>
          <h2>Looking for a technology partner to help you achieve your goals ?</h2>
          <div className="d-flex">
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><BsPlayCircle size={20} color='#106eea' /><span>Watch Video</span></a>
          </div>
        </div>
      </section>

      <section className='section-bg'>
        <AboutUs />
      </section>

      <section className='section'>
        <SchoolTech />
      </section>



    </>
  )
}


export default Home