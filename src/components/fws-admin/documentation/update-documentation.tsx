import { useFormik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { connect, } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CreateDoc, GetSingleDoc, getFeatures } from "../../../store/actions/documentation-actions";
import { Alert } from "../../../utils/Alert";
import MyEditor from "../../../utils/Editor";

const CreateDocumentation = ({ singleDocumentation, createDoc, getSingleDoc, features, getFeatures }: any) => {
    const locations = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(locations.search);
    const productId = queryParams.get("productId");
    const docId = queryParams.get("docId");
    const [content, setContent] = useState("");

    //VALIDATIONS SCHEMA
    const validation = Yup.object().shape({
        subject: Yup.string().required("Subject is required"),
    });
    //VALIDATIONS SCHEMA

    useEffect(() => {
        getSingleDoc(docId)
    }, [docId])

    useEffect(() => {
        getFeatures()
    }, [])

    useEffect(() => {
        setContent(singleDocumentation?.body)
    }, [singleDocumentation])


    const { handleSubmit, values, setFieldValue, errors, touched }: any = useFormik({
        initialValues: {
            id: docId,
            subject: singleDocumentation?.subject || "",
            body: singleDocumentation?.body || "",
            product: productId,
            feature: singleDocumentation?.feature || 0
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values: any) => {
            values.body = content;
            if (!content) {
                Alert.showError('Body is required');
                return;
            }
            else createDoc(values, navigate);
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
                                                <b>Feature:</b>
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
                                                {features?.map((item: any, idx: any) => (
                                                    <option key={idx} value={item.value}>
                                                        {item.text}
                                                    </option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="col-md-6 form-group">
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
                                        <Form.Group className="col-md-6 form-group">

                                            <label className="form-label mt-3 d-block">
                                                <b>Body:</b>

                                            </label>
                                        </Form.Group>


                                        <MyEditor setContent={setContent} content={content} />




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
        singleDocumentation: state.documentation.singleDocumentation,
        features: state.documentation.features
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        createDoc: (values: any, navigate: any) => CreateDoc(values, navigate)(dispatch),
        getSingleDoc: (id: any, pageNumber: number) => GetSingleDoc(id)(dispatch),
        getFeatures: () => getFeatures()(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocumentation);
