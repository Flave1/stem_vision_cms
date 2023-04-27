import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom";
import { GetCountryLookupList, UpdateState } from '../../../../store/actions/location-lookup-actions';
import Card from '../../../../utils/Card';
import { dashboard_routes } from '../../../../router/fws-path-locations';


const EditState = () => {

  // ACCESSING STATE FROM REDUX STORE
  const state = useSelector((state: any) => state);
  const { stateList, submittedSuccessfully } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    stateName: Yup.string()
      .required("state is required"),
  });
  //VALIDATIONS SCHEMA

  //VARIABLE DECLARATIONS
  let locations = useLocation();
  const [isChecked, setIsChecked] = useState<any>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";
  const stateIdQueryParam = queryParams.get("stateId") || "";
  //VARIABLE DECLARATIONS

  let selectedStateValue = stateList?.filter((item:any) => {
    if (item.stateId === stateIdQueryParam) {
      return item.stateName
    }
  })

  React.useEffect(() => {
    GetCountryLookupList()(dispatch)
  }, [dispatch])

  React.useEffect(() => {
    submittedSuccessfully && navigate(`${dashboard_routes.locationLocations.state}?countryId=${countryIdQueryParam}`);
  }, [submittedSuccessfully, navigate, countryIdQueryParam]);

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Row>
          <Col sm="12">
            <Card >
              <Card.Header>
                <div>
                  <h5>Edit State</h5>
                </div>
              </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={{
                    countryId: countryIdQueryParam,
                    stateId: stateIdQueryParam,
                    stateName: selectedStateValue[0]['stateName'] || [],
                    isActive: true,
                  }}
                  validationSchema={validation}
                  onSubmit={(values) => {
                    values.countryId = countryIdQueryParam;
                    values.stateId = stateIdQueryParam;
                    values.stateName = values.stateName;
                    values.isActive = isChecked;
                    UpdateState(values,navigate)(dispatch);
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
                          {touched.stateName && errors.stateName && (
                            <div className="text-danger">
                              {/* {errors.stateName} */}
                              </div>
                          )}
                          <label htmlFor="stateName" className="form-label">
                            {" "}
                            <b>State Name</b>
                          </label>
                          <Field
                            type="text"
                            className="form-control text-uppercase"
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

export default EditState;
