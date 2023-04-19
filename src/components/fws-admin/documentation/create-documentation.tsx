import { useFormik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { connect, } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CreateDoc } from "../../../store/actions/documentation-actions";
import { Alert } from "../../../utils/Alert";
import { TextEditorToolBar } from "../../../utils/tools";
import ReactQuill from "react-quill";

const CreateDocumentation = ({ documentation,createDoc }: any) => {
    const locations = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(locations.search);
    const productId = queryParams.get("productId");
    const [content, setContent] = useState("");

    //VALIDATIONS SCHEMA
    const validation = Yup.object().shape({
        subject: Yup.string().required("Subject is required"),
    });
    //VALIDATIONS SCHEMA
    const textEditorModules = useMemo(() => ({ toolbar: TextEditorToolBar }), []);

    const { handleSubmit, values, setFieldValue, errors, touched } = useFormik({
        initialValues: {
            subject: "",
            body: "",
            product: productId
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
                                                <label  className="form-label">
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
                          {/* <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            modules={textEditorModules}
                            className="mb-5"
                            id="assessment-editor"
                            style={{ height: "300px",maxHeight:'300px', background: "white" }}
                          /> */}
                          <textarea name="body"
                          className="mt-3"
                          value={content}
                            onChange={(e)=>setContent(e.target.value)}
                             cols={100}
                             rows={10}>

                             </textarea>
                            </Form.Group>
                                            
                                            



                                       
                                        <div className="d-flex justify-content-end">
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
        createDoc: (values: any, navigate: any) => CreateDoc(values, navigate)(dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateDocumentation);
