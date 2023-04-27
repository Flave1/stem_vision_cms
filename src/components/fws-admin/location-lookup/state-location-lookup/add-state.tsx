import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom";
import { CreateState, GetCountryLookupList } from '../../../../store/actions/location-lookup-actions';
import Card from '../../../../utils/Card';
import { dashboard_routes } from '../../../../router/fws-path-locations';


const AddState = () => {

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state: any) => state);
  const { countryList} = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    stateName: Yup.string()
      .required("State is required"),
  });
  //VALIDATIONS SCHEMA

  //VARIABLE DECLARATIONS
  let locations = useLocation();
  const [isChecked, setIsChecked] = useState<any>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";
  //VARIABLE DECLARATIONS

  React.useEffect(() => {
    GetCountryLookupList()(dispatch)
  }, [dispatch])

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Header>
                <div>
                  <h5>Add State</h5>
                </div>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={{
                    countryId: countryIdQueryParam,
                    stateName: "",
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.countryId = values.countryId;
                    values.stateName = values.stateName.toUpperCase();
                    values.isActive = isChecked;
                    CreateState(values,navigate)(dispatch);
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
                        <div className="mt-lg-0 dropdown">
                          <label htmlFor="countryId" className="form-label">
                            {" "}
                            <b>Choose Country</b>
                          </label>
                          <Field
                            as="select"
                            name="countryId"
                            className="form-select text-uppercase"
                            id="countryId"
                            onChange={(e: any) => {
                              setFieldValue("countryId", e.target.value);
                              navigate(`${dashboard_routes.locationLocations.addState}?countryId=${e.target.value}`
                              );
                            }}
                          >
                            <option value="">Select Country</option>
                            {countryList?.map((country:any, idx:any) => (
                              <option
                                key={idx}
                                value={country?.countryId}
                              >
                                {country.countryName}
                              </option>
                            ))}
                          </Field>
                        </div>
                      </Col>
                      <Col lg="12">
                        <div className="form-group">
                          {touched.stateName && errors.stateName && (
                            <div className="text-danger">{errors.stateName}</div>
                          )}
                          <label htmlFor="stateName" className="form-label">
                            {" "}
                            <b>State Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            name="stateName"
                            id="stateName"
                            aria-describedby="stateName"
                            required
                            placeholder="Enter State name"
                            onChange={(e: any) => setFieldValue("stateName", e.target.value)}
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
                          onClick={() => {handleSubmit();
                            setFieldValue("stateName", "")}
                          }
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

export default AddState;
