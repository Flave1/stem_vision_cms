import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsFillPhoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Alert } from "../../utils/Alert";
import { connect } from "react-redux";
import { contactUs } from "../../store/actions/app-layout-actions";
import { aos } from '../../utils/Animation/aos-animation';

function ContactUsForm({ sendMessage }: any) {
    useEffect(() => {
        aos.animate();
    }, []);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const option = Number(queryParams.get('cot') || 0);
    const [showError, setError] = useState(false)

    const messages = [
        { id: 1, message: "How can I see a demo of the school managment portal" },
        { id: 2, message: "How can I see a demo of the Computer base test system" },
        { id: 3, message: "Other ....." },
    ]
    const [selectedOption, setSelectedOption] = useState<number>(option);
    const onMessageSelect = (id: number) => setSelectedOption(id);

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Email is required to login'),
        name: Yup.string()
            .required("Name is Required"),
        message: Yup.string()
            .required("Message Required")
    });

    const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: "",
            name: "",
            message: messages[selectedOption - 1]?.message ?? "",
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values: any) => {
            sendMessage(values);
        }
    });

    useEffect(() => {
        touched.email && errors.email ? setError(true) : setError(false)
        touched.name && errors.name ? setError(true) : setError(false)
        touched.message && errors.message ? setError(true) : setError(false)
    }, [errors])

    console.log('errors', errors);
    console.log('errors', errors);

    return (
        <>
            <section id="contact" className="contact" data-aos="fade-up">
                <div className="container" data-aos="fade-up">

                    <div className="section-title" style={{ marginTop: '30px' }}>
                        <h2>Contact Us</h2>
                        <p>Please get in touch with us via the form below, by phone, or by sending an email. </p>
                    </div>

                    <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">

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
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <form role="form" className="php-email-form">
                                <div className="row">
                                    {showError && <p className="danger">{errors.email}</p>}
                                    {showError && <p className="danger">{errors.name}</p>}
                                    {showError && <p className="danger">{errors.message}</p>}
                                    <div className="col-md-6 form-group">
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
                                    <div className="col-md-6 form-group">
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
                                        value={values.message}
                                        onBlur={() => handleBlur('message')}
                                        className="form-control"
                                        placeholder="Enter Message"
                                        rows={8}
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit()
                                        }
                                        }
                                    >Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>

    )
}

function mapStateToProps(state: any) {
    return { auth: state.auth };
}

function mapDispatchToProps(dispatch: any) {
    return { sendMessage: (values: any) => contactUs(values)(dispatch) };
}

export default ContactUsForm; //connect(mapStateToProps, mapDispatchToProps)(ContactUsForm);