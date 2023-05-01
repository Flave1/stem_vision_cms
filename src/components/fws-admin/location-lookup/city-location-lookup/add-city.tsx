import { Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../../../utils/Card";
import { dashboard_routes } from "../../../../router/fws-path-locations";
import { CreateCity, GetStateLookupList } from "../../../../store/actions/location-lookup-actions";


const AddCity = ({ stateList, getStateLookupList, createCity }: any) => {
  //VARIABLE DECLARATIONS
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  let locations = useLocation();
  //VARIABLE DECLARATIONS

  //VALIDATIONS SCHEMA
  const validation = Yup.object().shape({
    cityName: Yup.string()
      .required("City is required"),
  });
  //VALIDATIONS SCHEMA
  const queryParams = new URLSearchParams(locations.search);
  const stateIdQueryParam = queryParams.get("stateId") || "";
  const countryIdQueryParam = queryParams.get("countryId") || "";

  useEffect(() => {
    getStateLookupList(countryIdQueryParam)
  }, [countryIdQueryParam])


  const {  handleSubmit, values, setFieldValue, errors,touched}:any = useFormik({
    initialValues: {
      stateId: stateIdQueryParam,
      cityName: "",
      isActive: true,
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: (values: any) => {
      values.countryId = countryIdQueryParam;
      values.isActive = isChecked;
      createCity(values, navigate)
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
                  <h5>Add City</h5>
                </div>
              </Card.Header>
              <Card.Body>
          
                    <Form>
                      <Col lg="12">
                        <div className="mt-lg-0 dropdown">
                          <label htmlFor="cityName" className="form-label">
                            {" "}
                            <b>State Name</b>
                          </label>
                          <select
                            name="stateId"
                            className="form-select text-uppercase"
                            id="stateId"
                            value={stateIdQueryParam}
                            onChange={(e: any) => {
                              setFieldValue("stateId", e.target.value);
                              navigate(`${dashboard_routes.locationLocations.addCity}?countryId=${countryIdQueryParam}&stateId=${e.target.value}`
                              );
                            }}
                          >
                            <option value="">Select State</option>
                            {stateList?.map((item: any, idx: any) => (
                              <option
                                key={idx}
                                value={item?.stateId}
                              >
                                {item.stateName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Col>
                      <Col lg="12">
                        <div className="form-group">
                          {touched.cityName && errors.cityName && (
                            <div className="text-danger">{errors.cityName}</div>
                          )}
                          <label htmlFor="cityName" className="form-label">
                            {" "}
                            <b>City Name</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="cityName"
                            id="cityName"
                            aria-describedby="cityName"
                            value={values.cityId}
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
    stateList: state.locationLookup.stateList,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getStateLookupList: (country: any) => GetStateLookupList(country)(dispatch),
    createCity: (values: any, navigate: any) => CreateCity(values, navigate)(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);

