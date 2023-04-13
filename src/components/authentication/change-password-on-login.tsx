import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
// img
import { useDispatch, useSelector } from 'react-redux'
import { changeMyPassword } from '../../store/actions/auth-actions';
import { AuthenticationResponse } from '../../store/Models/AuthState';
import Card from '../../utils/Card';
import { app_routes } from '../../router/routes';
import Logo from '../../utils/logo';


const FirstTimeLoginPassswordChange = () => {

    const locations = useLocation();
    const dispatch = useDispatch();
    const state = useSelector((state:any) => state);


    const { message } = state.auth;
    var token = sessionStorage.getItem('token');
    var userDetail = sessionStorage.getItem('userDetail');
    const [userId, setId] = useState('');
    React.useEffect(() => {
        const queryParams = new URLSearchParams(locations.search);
        const id = queryParams.get("id");
        if (!id) return;
        setId(id);
    }, [userId, locations.search]);

    React.useEffect(() => {
        if (userDetail) {
            if (JSON.parse(userDetail).userType === 'Client') {
                window.location.href = '/client-dashboard';
            } else {
                window.location.href = '/dashboard';
            }

        }

    }, [token, userDetail])

    const validation = Yup.object().shape({
        oldPassword: Yup.string().required("Old Password Required")
            .min(4, 'Password must be a minimum of 4 characters'),
        newPassword: Yup.string().required("New Password Required")
            .min(4, 'Password must be a minimum of 4 characters'),
        confirmNewPassword: Yup.string().required("Confirm Password Required")
            .min(4, 'Password must be a minimum of 4 characters')
            .when("newPassword", {
                is: (val:any) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref("newPassword")], "Confirm password need to be the same with new password")
            })
    })
    
    return (
        <>
            <section className="login-content">
            <Row className="m-0 align-items-center d-flex justify-content-center bg-white vh-100">
             <Col md="6">
                    <Row className="justify-content-center">
                    <Col md="10">
                        <Card className="card auth-card d-flex justify-content-center mb-0">
                            <Card.Body>
                            <h2 className="mb-5 text-center">Change Password</h2>
                                <p className='text center mb-2'>Enter your current password and a new passsword</p>


                                <Formik
                                    initialValues={{
                                        oldPassword: '',
                                        newPassword: '',
                                        confirmNewPassword: ''
                                    }}
                                    validationSchema={validation}
                                    onSubmit={values => {
                                        changeMyPassword(
                                            {
                                                userId: userId,
                                                oldPassword: values.oldPassword,
                                                newPassword: values.newPassword
                                            })(dispatch)
                                    }}
                                >
                                    {({
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        values,
                                        touched,
                                        errors,
                                        isValid }) => (

                                        <Form >
                                            <Row>
                                                {message && <div className='text-danger'>{message}</div>}
                                                <Col lg="12">
                                                    <div className="form-group">
                                                        {((touched.oldPassword && errors.oldPassword) || message) && <div className='text-danger'>{errors.oldPassword}</div>}
                                                        <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                                        <Field type="password" className="form-control" name="oldPassword" id="oldPassword" aria-describedby="oldPassword" required placeholder=" " />
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="pt-4">
                                                    <div className="form-group">
                                                        {(touched.newPassword && errors.newPassword) && <div className='text-danger'>{errors.newPassword}</div>}
                                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                                        <Field type="password" required className="form-control" name="newPassword" id="newPassword" aria-describedby="newPassword" placeholder=" " />
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="pt-4">
                                                    <div className="form-group">
                                                        {(touched.confirmNewPassword && errors.confirmNewPassword) && <div className='text-danger'>{errors.confirmNewPassword}</div>}
                                                        <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                                                        <Field type="password" required className="form-control" name="confirmNewPassword" id="confirmNewPassword" aria-describedby="confirmNewPassword" placeholder=" " />
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="pt-4 d-flex justify-content-between">
                                                    <div className="form-check mb-3 form-Check">
                                                        <Field type="checkbox" id="customCheck1" className="form-check-input" />
                                                        <label htmlFor="customCheck1" className='check-label'>Remember Me </label>
                                                    </div>
                                                    <Link to={app_routes.authentication.sign_in}>Return back to login?</Link>
                                                </Col>
                                            </Row>
                                            <div className="d-flex justify-content-center pt-4">
                                                <button onSubmit={() => {
                                                    handleSubmit()
                                                }} type="submit"  className='btn btn-primary'>Sign In</button>
                                            </div>
                                            {/* <p className="mt-3 text-center">
                                                        Don’t have an account? <Link to="/auth/sign-up" className="text-underline">Click here to sign up.</Link>
                                                    </p> */}
                                        </Form>
                                    )}
                                </Formik>



                            </Card.Body>
                        </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                </Row>
            </section>
        </>
    )
}

export default FirstTimeLoginPassswordChange
