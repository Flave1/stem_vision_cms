import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {  useFormik } from "formik";
import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom";
import { CreateState, GetCountryLookupList } from '../../../../store/actions/location-lookup-actions';
import Card from '../../../../utils/Card';
import { dashboard_routes } from '../../../../router/fws-path-locations';


const AddState = (props: any) => {
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
  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";
  //VARIABLE DECLARATIONS

  React.useEffect(() => {
    props.getCountryLookupList()
  }, [])

  const { handleSubmit, values, setFieldValue, errors, touched }: any = useFormik({
    initialValues: {
      countryId: countryIdQueryParam,
      stateName: "",
      isActive: true,
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values: any) => {
      values.isActive = isChecked;
      props.createState(values, navigate);
    }
  });

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
               
                    <Form>
                      <Col lg="12">
                        <div className="mt-lg-0 dropdown">
                          <label htmlFor="countryId" className="form-label">
                            {" "}
                            <b>Choose Country</b>
                          </label>
                          <select
                            name="countryId"
                            className="form-select text-uppercase"
                            id="countryId"
                            value={countryIdQueryParam}
                            onChange={(e: any) => {
                              setFieldValue("countryId", e.target.value);
                              navigate(`${dashboard_routes.locationLocations.addState}?countryId=${e.target.value}`
                              );
                            }}
                          >
                            <option value="">Select Country</option>
                            {props.countryList?.map((country: any, idx: any) => (
                              <option
                                key={idx}
                                value={country?.countryId}
                              >
                                {country.countryName}
                              </option>
                            ))}
                          </select>
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
                          <input
                            type="text"
                            className="form-control"
                            name="stateName"
                            id="stateName"
                            aria-describedby="stateName"
                            value={values.stateName}
                            placeholder="Enter State name"
                            onChange={(e: any) => {
                             setFieldValue("stateName", e.target.value)}}
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
                          onClick={() => {
                            handleSubmit();
                          }
                          }
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
             
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
    countryList: state.locationLookup.countryList,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getCountryLookupList: (country: any) => GetCountryLookupList()(dispatch),
    createState: (values: any, navigate: any) => CreateState(values, navigate)(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddState);
