import React from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../../../utils/Card';
import { dashboard_routes } from '../../../../router/fws-path-locations';
import { UpdateCity } from '../../../../store/actions/location-lookup-actions';
const EditCity = () => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  let locations = useLocation();
  const validation = Yup.object().shape({
    cityName: Yup.string()
      .required("City is required"),
  });
  //VALIDATIONS SCHEMA

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state: any) => state);
  const { cityList, submittedSuccessfully } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  const queryParams = new URLSearchParams(locations.search);
  const stateIdQueryParam = queryParams.get("stateId") || "";
  const cityIdQueryParam = queryParams.get("cityId") || "";

  let selectedCityValue = cityList?.filter((item: any) => {
    if (item.cityId === cityIdQueryParam) {
      return item.cityName
    }

  })

  React.useEffect(() => {
    submittedSuccessfully && navigate(`${dashboard_routes.locationLocations.city}?stateId=${stateIdQueryParam}`);
  }, [ stateIdQueryParam]);
  

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Header>
                <div>
                  <h5>Edit City</h5>
                </div>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={{
                    stateId: stateIdQueryParam,
                    cityId: cityIdQueryParam,
                    cityName: selectedCityValue[0]['cityName'] || [],
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.stateId = stateIdQueryParam;
                    values.cityId = cityIdQueryParam;
                    values.cityName = values.cityName;
                    values.isActive = isChecked;
                    UpdateCity(values,navigate)(dispatch);
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
                          {touched.cityName && errors.cityName && (
                            <div className="text-danger">
                              {/* {errors.cityName} */}
                            </div>
                          )}
                          <label htmlFor="cityName" className="form-label">
                            {" "}
                            <b>City Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control text-uppercase"
                            name="cityName"
                            id="cityName"
                            aria-describedby="cityName"
                            required
                            placeholder="Enter City name"
                            onChange={(e: any) => setFieldValue("cityName", e.target.value)}
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

export default EditCity;
