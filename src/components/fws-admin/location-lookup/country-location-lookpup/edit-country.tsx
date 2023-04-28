import React, {useEffect} from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useLocation, useNavigate } from "react-router-dom";
import { dashboard_routes } from '../../../../router/fws-path-locations';
import Card from '../../../../utils/Card';
import { UpdateCountry } from '../../../../store/actions/location-lookup-actions';


const EditCountry = ({updateCountry}:any) => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    countryName: Yup.string()
      .required("Country is required"),
  });
  //VALIDATIONS SCHEMA

  // ACCESSING STATE FROM REDUX STORE
  let locations = useLocation();
  const state = useSelector((state: any) => state);
  const { isSuccessful, countryList } = state.locationLookup;
  // ACCESSING STATE FROM REDUX STORE

  const queryParams = new URLSearchParams(locations.search);
  const countryIdQueryParam = queryParams.get("countryId") || "";

  let selectedCountryValue = countryList.find((item: any) => (item.countryId === countryIdQueryParam)).countryName

  const { handleSubmit, values, setFieldValue, errors, touched }: any = useFormik({
    initialValues: {
      countryName: selectedCountryValue||"",
      isActive: true,
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values: any) => {  
      values.countryId = countryIdQueryParam;
      values.isActive = isChecked;
      updateCountry(values,navigate);
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
                  <h5>Edit Country</h5>
                </div>
              </Card.Header>
              <Card.Body>
                
                    <Form>
                      <Col lg="12">
                        <div className="form-group">
                          {touched.countryName && errors.countryName && (
                            <div className="text-danger">
                              {errors.countryName}
                            </div>
                          )}
                          <label htmlFor="countryName" className="form-label">
                            {" "}
                            <b>Country Name</b>
                          </label>
                          <input
                            type="text"
                            className="form-control text-uppercase"
                            name="countryName"
                            id="countryName"
                            value={values.countryName}
                            aria-describedby="countryName"
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
    updateCountry: (values: any, navigate: any) => UpdateCountry(values, navigate)(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCountry);
