import { Link } from "react-router-dom";
import { app_routes } from "../../router/routes";

function Pricing({ navigate }: any) {

    return (
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
                                <Link to={app_routes.contact_us + '?cot=1'} className="btn-buy"  >GET STARTED</Link>
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


    )
}

export default Pricing;