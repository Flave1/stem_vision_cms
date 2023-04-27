import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { dashboard_routes } from '../../../../router/fws-path-locations';
import Card from '../../../../utils/Card';
import { CreateCountry } from '../../../../store/actions/location-lookup-actions';
import { useNavigate } from 'react-router-dom';


const AddCountry = () => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    countryName: Yup.string()
      .min(2, "Country Name Too Short!")
      .required("Country is required"),
  });
  //VALIDATIONS SCHEMA

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state: any) => state);
  const { isSuccessful }= state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE


  React.useEffect(() => {
    if (!isSuccessful) {
      navigate(dashboard_routes.locationLocations.country);
    }
  }, [isSuccessful, navigate]);

  

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Header>
                <div>
                  <h5>Add Country</h5>
                </div>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={{
                    countryName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.countryName = values.countryName.toUpperCase();
                    values.isActive = isChecked;
                    CreateCountry(values,navigate)(dispatch);
                  }}
                >
                  {({
                    handleSubmit,
                    setFieldValue,
                    touched,
                    errors,
                  }) => (
                    <Form>
                      <Col lg="12">
                        <div className="form-group">
                          {touched.countryName && errors.countryName && (
                            <div className="text-danger">{errors.countryName}</div>
                          )}
                          <label htmlFor="countryName" className="form-label">
                            {" "}
                            <b>Country Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            name="countryName"
                            id="countryName"
                            aria-describedby="countryName"
                            required
                            placeholder="Enter Country name e.g Ghana... etc"
                            onChange={(e: any) => setFieldValue("countryName", e.target.value)}
                          />
                        </div>
                      </Col>
                      <Col lg="12" className="d-flex justify-content-between">
                        <div className="form-check mb-3 form-Check">
                          <input
                            type="checkbox"
                            id="customCheck1"
                            className="form-check-input"
                            name="isActive"
                            checked={isChecked}
                            onChange={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <label htmlFor="isActive" className="check-label">
                            isActive{" "}
                          </label>
                        </div>
                      </Col>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="button"
                          variant="btn btn-danger mx-2"
                          onClick={() => {
                            navigate(-1);
                          }}
                        >
                          Back
                        </Button>{" "}
                        <Button
                          type="button"
                          variant="btn btn-primary mx-2"
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddCountry;
