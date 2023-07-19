import React, { useEffect, useState } from "react";
import { Card, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { GetSingleProduct } from "../../../store/actions/products-actions";
import { connect } from "react-redux";
import { dashboard_routes } from "../../../router/fws-path-locations";
const SmsDescription = ({singleProduct,getSingleProduct}:any) => {
  const navigate = useNavigate();
  const locations = useLocation();
  const queryParams = new URLSearchParams(locations.search);
  const productId = queryParams.get("productId");
  const [navigation, setNavigation] = useState("overview");
  useEffect(() => {
    getSingleProduct(productId || "");
  }, []);
  return (
    <>
      <Row className="p-3">
        <Card>
          <div className="px-3 pt-3">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip-2"> back</Tooltip>}
            >
              <svg
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
                className=" text-primary"
                width="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                  fill="currentColor"
                ></path>
              </svg>
            </OverlayTrigger>
          </div>
          <Card.Body>
            <div className="d-md-flex  justify-content-between align-items-center ">
              <div className="d-flex ">
                <img
                  src={singleProduct?.productUrl}
                  style={{ maxWidth: "12%" }}
                  alt="product"
                />
                <div className="mx-2">
                  <h6 className="counter fw-bold  my-2 mt-3 ">
                    <span>{singleProduct?.productName}</span>
                  </h6>
                  <div>by flaveconsole</div>
                  <div className="">
                    <svg
                      width="20"
                      viewBox="0 0 24 24"
                      color=""
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z"
                        fill="#fccc0f"
                      ></path>
                    </svg>
                    <svg
                      width="20"
                      viewBox="0 0 24 24"
                      color=""
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z"
                        fill="#fccc0f"
                      ></path>
                    </svg>
                    <svg
                      width="20"
                      viewBox="0 0 24 24"
                      color=""
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z"
                        fill="#fccc0f"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-sm mx-2"
                  style={{ backgroundColor: "#ffc400", color: "black" }}
                  onClick={() =>
                    !singleProduct?.installed &&
                    navigate(
                      `${dashboard_routes.smsLocations.createSms}?productId=${productId}`
                    )
                  }
                >
                  {!singleProduct?.installed ? "Add" : "Installed"}
                </button>
                <div>
                  <small className="mt-1">Estimated USD 0 / month</small>
                  <svg
                    width="15"
                    className="mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.67 1.99927H16.34C19.73 1.99927 22 4.37927 22 7.91927V16.0903C22 19.6203 19.73 21.9993 16.34 21.9993H7.67C4.28 21.9993 2 19.6203 2 16.0903V7.91927C2 4.37927 4.28 1.99927 7.67 1.99927ZM11.99 9.06027C11.52 9.06027 11.13 8.66927 11.13 8.19027C11.13 7.70027 11.52 7.31027 12.01 7.31027C12.49 7.31027 12.88 7.70027 12.88 8.19027C12.88 8.66927 12.49 9.06027 11.99 9.06027ZM12.87 15.7803C12.87 16.2603 12.48 16.6503 11.99 16.6503C11.51 16.6503 11.12 16.2603 11.12 15.7803V11.3603C11.12 10.8793 11.51 10.4803 11.99 10.4803C12.48 10.4803 12.87 10.8793 12.87 11.3603V15.7803Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <div>
                <h6
                  className={`${navigation === "overview" && "text-primary"}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setNavigation("overview")}
                >
                  Overview
                </h6>
                <div
                  className={`${
                    navigation === "overview" &&
                    "px-2 border border-primary rounded"
                  }`}
                ></div>
              </div>
              <div>
                <h6
                  className={`${
                    navigation === "support" && "text-primary"
                  } mx-2`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setNavigation("support")}
                >
                  Support
                </h6>
                <div
                  className={`${
                    navigation === "support" &&
                    "px-2 border border-primary rounded"
                  }`}
                ></div>
              </div>
            </div>
            <hr className="mt-0" />
            <div>
              <section className="d-md-flex py-5">
                <h2 className=" w-50">{singleProduct?.productDescription}</h2>
              </section>
              <section className="d-md-flex py-5">
                <div className="m-2" style={{width:"60%"}}>
                  <p>
                    Our school management system includes a website and a portal
                    that you may customize in terms of color, design, and
                    pattern to fit your institution
                  </p>
                  <img style={{maxWidth:"100%"}}src="http://flavetech-001-site1.etempurl.com/ProfileImage/449c0014-4e21-4049-8e6f-7e0b39e695fe.PNG" alt="score entry" />
                </div>
                <div className=" m-2 "style={{width:"40%"}}>
                  <h5>EXAMS AND ASSESSEMENT SCORE ENTRY</h5>
                  <div className="mt-2">
                    By double tapping on the score columns, you can quickly add
                    student exam and assessment results, and it will be saved
                    automatically.
                  </div>
                </div>
              </section>

              <section className="d-md-flex py-5">
                <div className="m-2"style={{width:"40%"}}>
                  <h5>ONLINE STAFF AND STUDENT ATTENDANCE SYSTEM</h5>
                  <div className="mt-2">
                    Daily student and staff attendance made easy with our
                    software and you can generate attendance report.
                  </div>
                </div>
                <div className="m-2 " style={{width:"60%"}}>
                  <img src="http://flavetech-001-site1.etempurl.com/ProfileImage/97c1c4fc-2763-4f21-ae9a-e78902796134.png" alt="attendance board"style={{maxWidth:"100%"}} />
                </div>
              </section>
              <section className="d-md-flex py-5">
                <div className="m-2 "style={{width:"60%"}}>
                  <img style={{maxWidth:"100%"}} src="http://flavetech-001-site1.etempurl.com/ProfileImage/125d612a-1639-4f97-a17b-35d1046a835f.png" alt="time table" />
                </div>
                <div className="m-2 "style={{width:"40%"}}>
                  <h5>Customizable Timetable</h5>
                  <div className="mt-2">
                    Create a unique timetable for your institution with ease,
                    and it will be distributed instantly to the dashboards of
                    the students and staff for easy access.
                  </div>
                  <br />
                  <div className="mt-2 ">
                    <h6>Full detail:</h6>
                    <br />
                    Awesome aspects of this educational software include:
                    <div>&#x2022; students can be admitted online</div>
                    <div>
                      &#x2022; administration of registration for students and
                      staff via the portal
                    </div>
                    <div>&#x2022; computerized attendance system</div>
                    <div>&#x2022; computerized Result entering</div>
                    <div>&#x2022; online result printing with e-pins</div>
                    <div>&#x2022; taking and recording assessments online</div>
                    <div>
                      &#x2022; drafting, reviewing, and distributing lesson
                      notes
                    </div>
                    <div>
                      &#x2022; announcements and other information are provided
                      through the portal and emails.
                    </div>
                    <div>
                      &#x2022; The interface also allows for the design,
                      printing, and sharing of schedules.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};
function mapStateToProps(state: any) {
  return { 
      singleProduct:state.product.singleProduct
  };
}
function mapDispatchToProps(dispatch: any) {
  return { 
    getSingleProduct:(values: any) => GetSingleProduct(values)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmsDescription);
