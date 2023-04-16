import { connect } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsFillPhoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import HomeHeader from "./header";
import "./home.css"
import { useRef, useState } from "react";
import { Login } from "../../store/actions/auth-actions";
import { useNavigate } from "react-router-dom";

function ContactUp() {

    const navigate = useNavigate();
    const messages = [
        { id: 1, message: "How can I see a demo of the school managment portal" },
        { id: 2, message: "How can I see a demo of the Computer base test system" },
        { id: 3, message: "Type ....." },
    ]
    const [selectedOption, setSelectedOption] = useState<number>(2);
    const onMessageSelect = (id: number) => setSelectedOption(id);


    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Username is required to login'),
        name: Yup.string()
            .required("Name is Required"),
        message: Yup.string()
            .required("Message Required")
    });

    const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: messages[selectedOption + 1]?.message ?? "",
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values: any) => {
            // login(values, navigate);
        }
    });





    return (
        <>
            {/* <HomeHeader /> */}
            <main id="main">
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Contact Us</h2>
                            {/* <h3><span>Contact Us</span></h3> */}
                            <p>Please get in touch with us via the form below, by phone, or by sending an email. </p>
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
                                <div className="contact-messages">
                                    <ul style={{ listStyleType: 'none' }}>
                                        {
                                            messages.map((msg: any) => {
                                                return (
                                                    <li
                                                        key={msg.id}
                                                        onClick={() => onMessageSelect(msg.id)}>
                                                        <input
                                                            type="radio"
                                                            value={msg.id}
                                                            checked={selectedOption == msg.id}
                                                            onChange={() => setSelectedOption(msg.id)}
                                                            name="msg" /> {msg.message}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <form role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col form-group">
                                            <input
                                                type="text"
                                                name={values.name}
                                                onChange={(e: any) => {
                                                    handleChange("name")
                                                    setFieldValue("name", e.target.value)
                                                }}
                                                value={values.name}
                                                onBlur={() => handleBlur('name')}
                                                className="form-control"
                                                placeholder="Enter Name" />
                                        </div>
                                        <div className="col form-group">
                                            <input
                                                type="email"
                                                name={values.email}
                                                onChange={(e: any) => {
                                                    handleChange("email")
                                                    setFieldValue("email", e.target.value)
                                                }}
                                                value={values.email}
                                                onBlur={() => handleBlur('email')}
                                                className="form-control"
                                                placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name={values.message}
                                            onChange={(e: any) => {
                                                handleChange("message")
                                                setFieldValue("message", e.target.value)
                                            }}
                                            value={values.email}
                                            onBlur={() => handleBlur('message')}
                                            className="form-control"
                                            placeholder="Enter Message"
                                            rows={8}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </>

    )
}

// function mapStateToProps(state: any) {
//     return { auth: state.auth };
// }

// function mapDispatchToProps(dispatch: any) {
//     return { login: (values: any, navigate: any) => Login(values, navigate)(dispatch) };
// }
export default ContactUp;