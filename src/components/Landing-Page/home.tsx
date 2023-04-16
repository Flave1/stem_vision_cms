import React, { useEffect } from 'react'
import "./home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import HomeHeader from './header';
import HomeFooter from './footer';
import { AiOutlineTwitter, AiFillProject, AiTwotoneMail } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { GiCyberEye } from "react-icons/gi";
import { ImHappy2 } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsPlayCircle, BsFillPhoneFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { app_routes } from '../../router/routes';

const SocialComponent = () => {
  return (
    <div className="social">
      <a href=""><AiOutlineTwitter size={20} color='white' /></a>
      <a href=""><BsFacebook size={20} color='white' /></a>
      <a href=""><BsInstagram size={20} color='white' /></a>
      <a href=""><BsLinkedin size={20} color='white' /></a>
    </div >
  )
}

const Home = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

  }, []);

  return (
    <>
      {/* Top Bar */}
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:flaveconosole@gmail.com">flaveconosole@gmail.com</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+234 7067650531</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href=""><AiOutlineTwitter size={20} color='white' /></a>
            <a href=""><BsFacebook size={20} color='white' /></a>
            <a href=""><BsInstagram size={20} color='white' /></a>
            <a href=""><BsLinkedin size={20} color='white' /></a>
          </div>
        </div>
      </section>

      {/* nav bar */}
      <HomeHeader />

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

      <main id="main">

        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex  align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title"><a href="" className='text-danger'>School Managemnt System</a></h4>
                  <p className="description">The school management portal is an innovative educational management system that
                    seeks to revolutionize the way school, college and university administrations manage their operations</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title"><a href="" className='text-info'>Computer Base Test (CBT)</a></h4>
                  <p className="description">The CBT sytem is an assessment infrastructure system that utilizes computers
                    and digital technologies as the primary delivery system for tests, exams, quizzes or surveys which provides an excellent testing experience</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4 className="title "><a href="" className='text-success'>Intel Schools</a></h4>
                  <p className="description">Intel school is an advanced schools search engine.  Our innovative platform makes finding the perfect school
                    for your child a breeze.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title"><a href="" className='text-warning'>Child Gadget Monitor</a></h4>
                  <p className="description"> Designed to help parents monitor their child's mobile device usage. With this app, parents can receive detailed
                    reports of their child's activity, including which apps they are using, how long they are spending on each app, and what times of day they
                    are most active</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About</h2>
              <h3>Find Out More <span>Flave Console</span></h3>
              <p>We are committed to driving success for our clients and creating lasting partnerships that fuel growth and innovation</p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6  content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">

                <ul>
                  <li className='pb-4'>
                    <i style={{ background: 'black' }}><HiLightBulb size={40} color='yellow' /></i>
                    <div>
                      <h5>MISSION:</h5>
                      <p>Our mission is to provide innovative, technology-driven solutions that improve education and enhance
                        child safety. We aim to simplify administrative tasks for schools, deliver accurate testing results,
                        enable parents to monitor their children's device usage, and help parents find the best schools for their children</p>
                    </div>
                  </li>
                  <li className='pt-4'>
                    <i style={{ background: 'white' }}><GiCyberEye size={40} color='' /></i>
                    <div>
                      <h5>VISION</h5>
                      <p>Our vision is to be the leading provider of educational technology solutions worldwide. We aspire to
                        continually innovate and improve our services to meet the evolving needs of our customers.
                        We are committed to promoting excellence in education and ensuring the safety and well-being of children in the digital age.</p>
                    </div>
                  </li>
                </ul>
                {/* <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p> */}
              </div>
            </div>

          </div>
        </section>



        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i ><ImHappy2 size={20} /></i>
                  <span className="purecounter"><CountUp start={0} end={232} duration={3} /></span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i ><AiFillProject size={20} /></i>
                  <span className="purecounter"><CountUp start={0} end={521} duration={3} /></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i ><BiSupport size={20} /></i>
                  <span className="purecounter"><CountUp start={0} end={1463} duration={3} /></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i><MdWorkHistory size={20} /></i>
                  <span className="purecounter"><CountUp start={0} end={15} duration={3} /></span>
                  <p>Hard Workers</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="clients" className="clients section-bg">
          <div className="container" data-aos="zoom-in">

            <div className="row">

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-1.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-2.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-3.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-4.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-5.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-6.png" className="img-fluid" alt="" />
              </div>

            </div>

          </div>
        </section>



        {/* <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section> */}

        {/* <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Team</h2>
              <h3>Our Hardworking <span>Team</span></h3>
              <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>

            <div className="row">

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="member-img">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    <SocialComponent />
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <div className="member-img">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <SocialComponent />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="member">
                  <div className="member-img">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    <SocialComponent />
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="member">
                  <div className="member-img">
                    <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    <SocialComponent />
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section> */}

        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Pricing</h2>
              <h3>Check our <span>Pricing</span></h3>
              <p>Below is a view table for our two  pricing options for you to  choose one that best suits you</p>
            </div>

            <div className="row d-flex  justify-content-center">

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="box">
                  <h3>Free (initial term only)</h3>
                  <h4><sup>$</sup>0<span> / student</span></h4>
                  <ul>
                    <li><a href="#">All portal features</a></li>
                    <li><a href="#">CBT</a></li>
                    <li><a href="#">Intel school Ads</a></li>
                    <li className="na"><a href="#">Child gadget monitor</a></li>
                  </ul>
                  <div className="btn-wrap">
                    <Link to={app_routes.contact_us} className="btn-buy"  >GET STARTED</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                <div className="box featured">
                  <h3>Premium (each term)</h3>
                  <h4><sup>$</sup>3<span> / student</span></h4>
                  <ul>
                    <li><a href="#">All portal features</a></li>
                    <li><a href="#">CBT</a></li>
                    <li><a href="#">Intel school Ads</a></li>
                    <li><a href="#">Child gadget monitor</a></li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">GET STARTED</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>F.A.Q</h2>
              <h3>Frequently Asked <span>Questions</span></h3>
              <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <ul className="faq-list">

                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>

                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                      </p>
                    </div>
                  </li>

                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                    <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                      </p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </section> */}

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
              <h3><span>Contact Us</span></h3>
              <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>

            <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="col-lg-6">
                <div className="info-box mb-4">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div> */}

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className=""><AiTwotoneMail size={40} color='black' /></i>
                  <h3>Email Us</h3>
                  <p>flaveconsole@gmail.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  <i className=""><BsFillPhoneFill size={40} color='black' /></i>
                  <h3>Call Us</h3>
                  <p>+234 7067650531</p>
                </div>
              </div>

            </div>

            <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-8">
                <form role="form" className="php-email-form">
                  <div className="row">
                    <div className="col form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      <HomeFooter />


    </>
  )
}

export default Home