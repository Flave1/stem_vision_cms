import { useState } from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { contactUs } from "../../store/actions/app-layout-actions";
import * as Yup from 'yup';
import { useFormik } from "formik";

function SchoolTech({ sendMessage }: any) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validation = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Name Too Short!')
            .max(100, 'Name Too Long!')
            .required('Name is required to login'),
        email: Yup.string()
            .required("Password Required")
            .email(),
        phone: Yup.string()
            .required("Phone is required")
    });

    const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: "Demo Request"
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values: any) => {
            sendMessage(values);
            // console.log('phone', values);

        }
    });


    return (
        <div className="container mt-5 schooltech-bg rounded-lg p-4">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Demo Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {touched.email && errors.email && <p className="danger">{errors.email}</p>}
                        {touched.name && errors.name && <p className="danger">{errors.name}</p>}
                        {touched.phone && errors.phone && <p className="danger">{errors.phone}</p>}
                    </Row>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"

                                name={values.name}
                                onChange={(e: any) => {
                                    handleChange("name")
                                    setFieldValue("name", e.target.value)
                                }}
                                value={values.name}
                                onBlur={() => handleBlur('name')}
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email"

                                name={values.email}
                                onChange={(e: any) => {
                                    handleChange("email")
                                    setFieldValue("email", e.target.value)
                                }}
                                value={values.email}
                                onBlur={() => handleBlur('email')}
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="tel"
                                placeholder="Enter your phone number"

                                name={values.phone}
                                onChange={(e: any) => {
                                    handleChange("phone")
                                    setFieldValue("phone", e.target.value)
                                }}
                                value={values.phone}
                                onBlur={() => handleBlur('phone')}
                                className="form-control"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleSubmit()} className="start-button" >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="row align-items-center" data-aos="fade-up">
                <div className="col-md-6">
                    <img src={require('../../assets/schooltech.png')} alt="Schools and Technology" className="section-image" />
                </div>
                <div className="col-md-6 text-center">
                    <h2>Welcome to the Future of Education</h2>
                    <p>Discover how technology is transforming schools and learning experiences.</p>
                    <button className="start-button" onClick={handleShow}>Request For demo</button>
                </div>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch: any) {
    return { sendMessage: (values: any) => contactUs(values)(dispatch) };
}

export default connect(null, mapDispatchToProps)(SchoolTech);