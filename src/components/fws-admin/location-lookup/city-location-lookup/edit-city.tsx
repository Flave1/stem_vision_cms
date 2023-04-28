import React,{useEffect} from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { connect} from "react-redux";
import {useFormik } from "formik";
import * as Yup from "yup"
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../../../utils/Card';
import { GetCityLookupList, UpdateCity } from '../../../../store/actions/location-lookup-actions';
const EditCity = ({cityList,updateCity}:any) => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  let locations = useLocation();
  const validation = Yup.object().shape({
    cityName: Yup.string()
      .required("City is required"),
  });
  //VALIDATIONS SCHEMA
  const queryParams = new URLSearchParams(locations.search);
  const stateIdQueryParam = queryParams.get("stateId") || "";
  const cityIdQueryParam = queryParams.get("cityId") || "";
  const countryIdQueryParam = queryParams.get("countryId") || "";

useEffect(() => {
 GetCityLookupList(stateIdQueryParam)
}, [stateIdQueryParam])


  let selectedCityValue = cityList?.find((item: any) => (item.cityId === cityIdQueryParam)).cityName
  
  const {  handleSubmit, values, setFieldValue, errors,touched}:any = useFormik({
    initialValues: {
      stateId: stateIdQueryParam,
      cityId: cityIdQueryParam,
      cityName: selectedCityValue,
      isActive: true,
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values: any) => {
      values.countryId = countryIdQueryParam;
      values.isActive = isChecked;
      updateCity(values,navigate);
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
                  <h5>Edit City</h5>
                </div>
              </Card.Header>
              <Card.Body>
                
                    <Form>
                      <Col lg="12">
                        <div className="form-group">
                          {touched.cityName && errors.cityName && (
                            <div className="text-danger">
                              {errors.cityName}
                            </div>
                          )}
                          <label htmlFor="cityName" className="form-label">
                            {" "}
                            <b>City Name</b>
                          </label>
                          <input
                            type="text"
                            className="form-control text-uppercase"
                            name="cityName"
                            id="cityName"
                            aria-describedby="cityName"
                            value={values.cityName}
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
    stateList:state.locationLookup.stateList,
    cityList:state.locationLookup.cityList,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getCityLookupList: (stateId: any) => GetCityLookupList(stateId)(dispatch),
    updateCity:(values: any,navigate:any) => UpdateCity(values,navigate)(dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCity);
