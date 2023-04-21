import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { connect, } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CreateDoc, getFeatures } from "../../../store/actions/documentation-actions";
import { Alert } from "../../../utils/Alert";
import MyEditor from "../../../utils/Editor";
import '../fwsAdmin.css'

const CreateDocumentation = ({ documentation, createDoc, getFeatures }: any) => {
    const locations = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(locations.search);
    const productId = queryParams.get("productId");
    const [content, setContent] = useState("");

    useEffect(() => {
        getFeatures()
    }, [])

    //VALIDATIONS SCHEMA
    const validation = Yup.object().shape({
        subject: Yup.string().required("Subject is required"),
    });
    //VALIDATIONS SCHEMA

    const { handleSubmit, values, setFieldValue, errors, touched } = useFormik({
        initialValues: {
            subject: "",
            body: "",
            product: productId,
            feature: 0
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values: any) => {
            values.body = content;
            if (!content) {
                Alert.showError('Body is required');
                return;
            }
            createDoc(values, navigate);
        }
    });

    return (
        <>
            <div>

                <Row className="d-flex justify-content-center py-3">
                    <Col xl="10" lg="8">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title my-2">
                                        <b>Add Documentation</b>
                                    </h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="new-user-info">
                                    <div>
                                        <Row>
                                            <div className="col-md-6">
                                                {touched.subject && errors.subject && (
                                                    <div className="text-danger">
                                                        {errors.subject}
                                                    </div>
                                                )}
                                            </div>
                                        </Row>
                                        <Form.Group className=" form-group">
                                            <label className="form-label">
                                                <b>Subject:</b>
                                            </label>
                                            <select
                                                name="feature"
                                                className="form-select"
                                                id="feature"
                                                value={values.feature}
                                                onChange={(e: any) => {
                                                    setFieldValue("feature", e.target.value);
                                                }}
                                            >
                                                <option value="Select Featuer">
                                                    Select Feature
                                                </option>
                                                {documentation.features?.map((item: any, idx: any) => (
                                                    <option key={idx} value={item.value}>
                                                        {item.text}
                                                    </option>
                                                ))}
                                            </select>
                                        </Form.Group>

                                        <Form.Group className=" form-group">
                                            <label className="form-label">
                                                <b>Subject:</b>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                aria-describedby="name"
                                                placeholder="Subject"
                                                value={values.subject}
                                                onChange={(e: any) => {
                                                    setFieldValue("subject", e.target.value);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className=" form-group">

                                            <label className="form-label mt-3 d-block">
                                                <b>Body:</b>
                                            </label>

                                            <MyEditor setContent={setContent} content={content} />

                                        </Form.Group>






                                        <div className="d-flex justify-content-end mt-5">
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
        documentation: state.documentation,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        createDoc: (values: any, navigate: any) => CreateDoc(values, navigate)(dispatch),
        getFeatures: () => getFeatures()(dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateDocumentation);
