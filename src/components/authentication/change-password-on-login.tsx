import { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

import { useFormik } from 'formik';
// img
import { connect } from 'react-redux'
import { ChangePassword } from '../../store/actions/auth-actions';
import Card from '../../utils/Card';
import { app_routes } from '../../router/routes';
import AOS from 'aos';
import HomeFooter from '../Landing-Page/footer';
import HomeHeader from '../Landing-Page/header';


const FirstTimeLoginPassswordChange = ({ changePassword, auth }: any) => {
    const locations = useLocation();
    const [userId, setId] = useState('');
    const navigate = useNavigate();
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

    }, [])


    useEffect(() => {
        const queryParams = new URLSearchParams(locations.search);
        const id = queryParams.get("id");
        if (!id) return;
        setId(id);
    }, [userId, locations.search]);

    const validation = Yup.object().shape({
        oldPassword: Yup.string().required("Old Password Required")
            .min(4, 'Password must be a minimum of 4 characters'),
        newPassword: Yup.string().required("New Password Required")
            .min(4, 'Password must be a minimum of 4 characters'),
        confirmNewPassword: Yup.string().required("Confirm Password Required")
            .min(4, 'Password must be a minimum of 4 characters')
            .when("newPassword", {
                is: (val: any) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref("newPassword")], "Confirm password need to be the same with new password")
            })
    })

    const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
        initialValues: {
            userId,
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values: any) => {
            changePassword(values, navigate);
        }
    });

    return (
        <>
        <HomeHeader />
            <section className="login-content" style={{ background: '#fcfcfc' }} data-aos="fade-up">
                <Row className="m-0 align-items-center d-flex justify-content-center bg-white vh-100">
                    <Col md="6">
                        <Row className="justify-content-center">
                            <Col md="10">
                                <Card className="card auth-card d-flex justify-content-center mb-0">
                                    <Card.Body>
                                        <h2 className="mb-5 text-center">Change Password</h2>
                                        <p className='text center mb-2'>Enter your current password and a new passsword</p>




                                        <Form >
                                            <Row>
                                                <Col lg="12">
                                                    <div className="form-group">
                                                        {(touched.oldPassword && errors.oldPassword) && <div className='text-danger'>{errors.oldPassword}</div>}
                                                        <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                                        <div className='d-flex'>
                                                            <input
                                                                autoComplete='off'
                                                                type={showOldPassword ? "text" : "password"}
                                                                name={values.oldPassword}
                                                                onChange={(e: any) => {
                                                                    handleChange("oldPassword")
                                                                    setFieldValue("oldPassword", e.target.value)
                                                                }}
                                                                value={values.oldPassword}
                                                                onBlur={() => handleBlur('oldPassword')}
                                                                className="form-control hodinput"
                                                            />
                                                            {showOldPassword ? (
                                                                <svg
                                                                    onClick={() => setShowOldPassword(false)}
                                                                    className="mx-n4 mt-1 eyeIcon"
                                                                    width="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="grey"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z"
                                                                        fill="grey"
                                                                    ></path>
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    onClick={() => setShowOldPassword(true)}
                                                                    className="mx-n4 mt-1 eyeIcon"
                                                                    width="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="grey"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z"
                                                                        fill="grey"
                                                                    ></path>
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="pt-4">
                                                    <div className="form-group">
                                                        {(touched.newPassword && errors.newPassword) && <div className='text-danger'>{errors.newPassword}</div>}
                                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                                        <div className='d-flex'>
                                                            <input
                                                                autoComplete='off'
                                                                type={showPassword1 ? "text" : "password"}
                                                                name={values.newPassword}
                                                                onChange={(e: any) => {
                                                                    handleChange("newPassword")
                                                                    setFieldValue("newPassword", e.target.value)
                                                                }}
                                                                value={values.newPassword}
                                                                onBlur={() => handleBlur('newPassword')}
                                                                className="form-control hodinput"
                                                            />
                                                            {showPassword1 ? (
                                                                <svg
                                                                    onClick={() => setShowPassword1(false)}
                                                                    className="mx-n4 mt-1 eyeIcon"
                                                                    width="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="grey"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z"
                                                                        fill="grey"
                                                                    ></path>
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    onClick={() => setShowPassword1(true)}
                                                                    className="mx-n4 mt-1 eyeIcon"
                                                                    width="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="grey"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z"
                                                                        fill="grey"
                                                                    ></path>
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="12" className="pt-4">
                                                    <div className="form-group">
                                                        {(touched.confirmNewPassword && errors.confirmNewPassword) && <div className='text-danger'>{errors.confirmNewPassword}</div>}
                                                        <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                                                        <div className='d-flex'>
                                                        <input
                                                            autoComplete='off'
                                                            type={showPassword2 ? "text" : "password"}
                                                            name={values.newPassword}
                                                            onChange={(e: any) => {
                                                                handleChange("confirmNewPassword")
                                                                setFieldValue("confirmNewPassword", e.target.value)
                                                            }}
                                                            value={values.confirmNewPassword}
                                                            onBlur={() => handleBlur('confirmNewPassword')}
                                                            className="form-control hodinput"
                                                        />
                                                         {showPassword2 ? (
                                <svg
                                  onClick={() => setShowPassword2(false)}
                                  className="mx-n4 mt-1 eyeIcon"
                                  width="18"
                                  viewBox="0 0 24 24"
                                  fill="grey"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z"
                                    fill="grey"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  onClick={() => setShowPassword2(true)}
                                  className="mx-n4 mt-1 eyeIcon"
                                  width="18"
                                  viewBox="0 0 24 24"
                                  fill="grey"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z"
                                    fill="grey"
                                  ></path>
                                </svg>
                              )}
                              </div>
                                 </div>
                                    </Col>
                                        <Col lg="12" className="pt-4 d-flex justify-content-between">
                                            <div className="form-check mb-3 form-Check">
                                                 <input type="checkbox" id="customCheck1" className="form-check-input" />
                                                    <label htmlFor="customCheck1" className='check-label'>Remember Me </label>
                                                    </div>
                                                    <Link to={app_routes.authentication.sign_in}>Return back to login?</Link>
                                                </Col>
                                            </Row>
                                            <div className="d-flex justify-content-center pt-4">
                                                <button onClick={() => {
                                                    handleSubmit()
                                                }} type="button" className='btn btn-primary'>Sign In</button>
                                            </div>

                                        </Form>




                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </section>
        <HomeFooter />
        </>
    )
}
function mapStateToProps(state: any) {
    return { auth: state.auth };
}

function mapDispatchToProps(dispatch: any) {
    return { changePassword: (values: any, navigate: any) => ChangePassword(values, navigate)(dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstTimeLoginPassswordChange)
