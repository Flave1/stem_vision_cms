import { Field, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";
import {
  GetCountries,
  GetStates,
  UpdateSmservice,
  ValidateBaseUrlSuffix,
} from "../../../store/actions/smservice-actions";

import * as Yup from "yup";
import { GetSingleUserProduct } from "../../../store/actions/products-actions";

const UpdateSms = (props:any) => {
  const navigate = useNavigate();
  const locations = useLocation();
  const [images, setImages] = useState("");
  const ImageDisplay = (event: any) => {
    if (event.target.files[0]) {
      setImages(URL.createObjectURL(event.target.files[0]));
    }
  };
  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    schoolName: Yup.string().required("School Name is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    prefix: Yup.string()
      .matches(
        /((https?):\/\/)/,
        "Enter correct Protocol!"
      ).required("select a Protocol"),
    url: Yup.string()
      .matches(
        /[a-z0-9]+/,
        "Enter correct Url!"
      )
      .required("School Url is required"),
    suffix: Yup.string()
      .matches(
        /(\.[a-zA-Z0-9].[a-zA-Z0-9-%])/,
        "Enter correct Url!"
      )
  });
  //VALIDATIONS SCHEMA
  useEffect(() => {
    const queryParams = new URLSearchParams(locations.search);
    const userProductId = queryParams.get("userProductId");
    if (!userProductId) return;
    props.getSingleUserProduct(userProductId);
    props.getCountries();
  }, [locations.search]);


  useEffect(() => {
    setImages(props.singleUserProduct?.smsLogo)
    props.getStates(props.singleUserProduct?.country);
  }, [props.singleUserProduct]);

 

  const { handleSubmit, values, setFieldValue,  errors, touched }: any= useFormik({
    initialValues: {
      schoolName: props.singleUserProduct?.schoolName || "",
      address: props.singleUserProduct?.address || "",
      ipAddress: props.singleUserProduct?.ipAddress || "",
      country: props.singleUserProduct?.country || "",
      state: props.singleUserProduct?.state || "",
      schoolUrl: props.singleUserProduct?.schoolUrl || "",
      prefix: props.singleUserProduct?.schoolUrl.charAt(4) === "s" ? props.singleUserProduct?.schoolUrl.slice(0, 8) : props.singleUserProduct?.schoolUrl.slice(0, 7) || "",
      url: props.singleUserProduct?.schoolUrl.charAt(4) === "s" ? props.singleUserProduct?.schoolUrl.slice(8, -15) : props.singleUserProduct?.schoolUrl.slice(7, -15) || "",
      suffix: props.singleUserProduct?.schoolUrl.slice(-15) || "",
      schoolLogo: props.singleUserProduct?.smsLogo || "",
      productId: props.singleUserProduct?.productId || "",
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values: any) => {
      values.schoolLogo = images;
      values.schoolLogo = images;
      values.schoolUrl = values.prefix + values.url + values.suffix
      const params = new FormData();
      params.append("schoolName", values.schoolName);
      params.append("clientId", props.singleUserProduct?.clientId);
      params.append("apiKey", props.singleUserProduct?.smsapI_KEY);
      params.append("address", values.address);
      params.append("ipAddress", values.ipAddress);
      params.append("country", values.country);
      params.append("state", values.state);
      params.append("schoolUrl", values.schoolUrl);
      params.append("schoolLogo", values.schoolLogo);
      params.append("file", values.file);
      params.append("productId", values.productId);
      props.updateSmservice(params,navigate);
    }
  })
  return (
    <>
      <div>
       
            <Row className="d-flex justify-content-center">
            <Col xl="10" lg="8">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">
                      <b>Add Student Management Service</b>
                    </h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="new-user-info">
                    <div>
                      <Row>
                        <div className="col-md-6">
                          {touched.schoolName && errors.schoolName && (
                            <div className="text-danger">
                              {errors.schoolName}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          {touched.address && errors.address && (
                            <div className="text-danger">
                              {errors.address}
                            </div>
                          )}
                        </div>
                      </Row>
                      <div className="row">
                        <Form.Group className="col-md-6 form-group">
                          <label htmlFor="schoolName" className="form-label">
                            <b>School Name:</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="schoolName"
                            id="schoolName"
                            aria-describedby="name"
                            placeholder="School Name"
                            value={values.schoolName}
                            onChange={(e: any) => {
                              setFieldValue("schoolName", e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6 form-group">
                          <label htmlFor="lastName" className="form-label">
                            <b>Address:</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            aria-describedby="name"
                            value={values.address}
                            onChange={(e: any) => {
                              setFieldValue("address", e.target.value);
                            }}
                            placeholder="Address"
                          />
                        </Form.Group>
                        <Row>
                          <div className="col-md-6"></div>
                          <div className="col-md-6">
                            {touched.country && errors.country && (
                              <div className="text-danger">
                                {errors.country}
                              </div>
                            )}
                          </div>
                        </Row>
                        <Form.Group className="col-md-6 form-group">
                          <label htmlFor="ipAddress" className="form-label">
                            <b>IP Address:</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="ipAddress"
                            id="ipAddress"
                            aria-describedby="name"
                            placeholder="IP Address"
                            value={values.ipAddress}
                            onChange={(e: any) => {
                              setFieldValue("ipAddress", e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6 form-group">
                          <label htmlFor="address" className="form-label">
                            <b>Country:</b>
                          </label>
                          <select
                            name="country"
                            className="form-select"
                            id="country"
                            value={values.country}
                            onChange={(e: any) => {
                              setFieldValue("country", e.target.value);
                              props.getStates(e.target.value);
                            }}
                          >
                            <option value="Select Country">
                              Select Country
                            </option>
                            {props.countries?.map((item:any, idx:any) => (
                              <option key={idx} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </Form.Group>
                        <Row>
                          <div className="col-md-6">
                            {touched.state && errors.state && (
                              <div className="text-danger">
                                {errors.state}
                              </div>
                            )}
                          </div>

                        </Row>
                        <Form.Group className="col-md-6 form-group">
                          <label htmlFor="state" className="form-label">
                            <b>State:</b>
                          </label>
                          <select
                            name="state"
                            className="form-select"
                            id="state"
                            value={values.state}
                            onChange={(e: any) => {
                              setFieldValue("state", e.target.value);
                            }}
                          >
                            <option value="Select State">Select State</option>
                            {props.states?.map((item:any, idx:number) => (
                              <option key={idx} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </Form.Group>
                        <Row>
                          <div className="col-md-6">
                            {touched.prefix && errors.prefix && (
                              <div className="text-danger">
                                {errors.prefix}
                              </div>
                            )}
                            {touched.url && errors.url && (
                              <div className="text-danger">
                                {errors.url}
                              </div>
                            )}
                            
                            {/* {touched.suffix && errors.suffix && (
                              <div className="text-danger">
                                {errors.suffix}
                              </div>
                            )} */}
                            <div className="text-danger">
                              {!props.baseUrlSuffixValidation
                                ? "Base suffix already taken"
                                : ""}
                            </div>

                          </div>
                        </Row>
                        <label className="form-label">
                          <b>School URL:</b>
                        </label>
                        <Form.Group className="col-md-12 input-group" >
                          <Row md={8} sm={12} >
                            <Col md={3} style={{ margin: 'auto' }} className="my-2">
                              <label  className="me-2">Protocol</label>
                              <div className="btn-group" data-toggle="buttons">
                                <label className={`btn btn-outline-primary btn-sm pt-2 ${values.prefix === 'http://' && 'active'}`} onClick={() => {
                                  setFieldValue('prefix', 'http://')
                                }
                                }> http://</label>
                                <label className={`btn btn-outline-primary btn-sm pt-2 ${values.prefix === 'https://' && 'active'}`} onClick={() => setFieldValue('prefix', 'https://')}>https://</label>
                              </div>

                            </Col>
                            <Col md={5} sm={5}  className="my-2">
                              <label>Url e.g flaveconsole</label>
                              <input
                                type="text"
                                className="form-control text-lowercase "
                                name="url"
                                id="url"
                                aria-describedby="url"
                                value={values.url}
                                onChange={(e: any) => {
                                  setFieldValue("url", e.target.value);
                                }}
                                onKeyUp={(e: any) => {
                                  const suffix = e.target.value.slice(0, 4) === "www." ? e.target.value.slice(4) : e.target.value
                                  props.validateBaseUrlSuffix(suffix);
                                }}
                              />
                            </Col>
                            <Col md={4} sm={4}  className="my-2">
                              <label>'flavetechs.com'</label>
                              <input
                                type="text"
                                className="form-control text-lowercase"
                                name="suffix"
                                id="suffix"
                                aria-describedby="name"
                                value={values.suffix}
                                onChange={(e: any) => {
                                  setFieldValue("suffix", e.target.value);
                                }}
                              />
                            </Col>

                          </Row>
                        </Form.Group>

                        <Form.Group className="col-md-12 input-group" style={{ textAlign: 'center'}}>
                          <Row md={12} sm={12} className="mt-3">

                            <Col className="badge bg-primary mx-3 mx-md-3">
                              <span className="fw-bold lead text-wrap">{values.prefix + values.url + values.suffix}</span>
                            </Col>
                          </Row>
                        </Form.Group>


                        <div className="row form-group">
                          <div className="col-md-6">
                            <div className="header-title mt-3">
                              <p className="card-title fw-bold">
                                School Logo
                              </p>
                            </div>
                            <div className="profile-img-edit position-relative">
                            <div>
                           <img src="http://fwsapi.flavetechs.com/ApplicationFiles/3361a39c-7f7f-433e-b82b-e0ba77e7b90c.png" alt="profile img"    className=" "  height="120px" width="120px"/>
                               </div>
                            <div className="upload-icone bg-primary">
                                <label htmlFor="files">
                                  <svg
                                    className="upload-button"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <path
                                      fill="#ffffff"
                                      d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                                    ></path>
                                  </svg>
                                  <input
                                    type="file"
                                    id="files"
                                    style={{ display: "none" }}
                                    name="files"
                                    accept="image/jpeg,image/jpg,image/png"
                                    className="file-upload form-control"
                                    data-original-title="upload photos"
                                    onChange={(event: any) => {
                                      setFieldValue(
                                        "files",
                                        event.target.files[0]
                                      );
                                      ImageDisplay(event);
                                    }}
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="img-extension mt-3">
                              <div className="d-inline-block align-items-center">
                                <span>Only</span> <span>.jpg</span>{" "}
                                <span>.png</span> <span>.jpeg</span>
                                <span> allowed</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            {images ? (
                              <img
                                className=" img-fluid mt-4"
                                id="displayImg"
                                src={images}
                                alt="School Logo"
                                height="180px"
                                width="180px"
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="button"
                          variant="btn btn-danger mx-2"
                          onClick={() => {
                            navigate(-1);
                          }}
                        >
                          Cancel
                        </Button>{" "}
                        <Button
                          type="button"
                          variant="btn btn-primary"
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
      </div>
    </>
  );
};
function mapStateToProps(state: any) {
  return { 
    countries:state.smservice.countries,
     states:state.smservice.states,
      baseUrlSuffixValidation:state.smservice.baseUrlSuffixValidation, 
      singleUserProduct:state.product.singleUserProduct
  };
}
function mapDispatchToProps(dispatch: any) {
  return { getCountries: () => GetCountries()(dispatch),
    getStates: (values: any) => GetStates(values)(dispatch),
    validateBaseUrlSuffix: (values: any) => ValidateBaseUrlSuffix(values)(dispatch),
    updateSmservice: (values: any, navigate: any) => UpdateSmservice(values, navigate)(dispatch),
    getSingleUserProduct:(values: any) => GetSingleUserProduct(values)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSms);
