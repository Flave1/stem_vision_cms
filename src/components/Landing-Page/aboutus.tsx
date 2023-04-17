import { GiCyberEye } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";

function AboutUs() {
    return (
        <section id="about" className="about ">
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
                                    <p >Our mission is to provide innovative, technology-driven solutions that improve education and enhance
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
    )
}

export default AboutUs;