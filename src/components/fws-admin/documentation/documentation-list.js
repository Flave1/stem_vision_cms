import React, { useEffect, useState } from 'react'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Card from '../../../utils/Card';
import { dashboard_routes } from '../../../router/fws-path-locations';
import { connect, useDispatch } from 'react-redux';
import { DeleteDoc, GetDocList } from '../../../store/actions/documentation-actions';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { filterList } from '../../../utils/tools';
import { PaginationFilter1 } from '../../../utils/pagination-filter';
import { Alert } from '../../../utils/Alert';

const DocumentationList = ({ docList, filterProps, getDocList }) => {
  const locations = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(locations.search);
  const productId = queryParams.get("productId");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [objectArray, setObjectArray] = useState([]);

  useEffect(() => {
    getDocList(productId, 1);
  }, [productId]);

    useEffect(() => {
        setObjectArray(filterList(docList, searchQuery, ["subject"]))
    }, [searchQuery, docList])

  return (
    <>
      <div>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between border-0">
                <div className="header-title">
                  <h4 className="card-title m-3 ">
                    <b>Documentation List</b>
                  </h4>
                </div>
              </Card.Header>
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
              <Row>
                <div className="d-md-flex justify-content-between mt-3 col-md-12">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span
                        className="input-group-text border-0"
                        id="search-input"
                      >
                        <svg
                          width="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="11.7669"
                            cy="11.7666"
                            r="8.98856"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></circle>
                          <path
                            d="M18.0186 18.4851L21.5426 22"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <input
                          type="search"
                          className="form-control text-lowercase"
                          placeholder="Search..."
                          onChange={(event) =>
                            setSearchQuery(event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`${dashboard_routes.documentation.createDocumentation}?productId=${productId}`}
                    className="d-flex justify-content-end col-md-6"
                  >
                    <button
                      type="button"
                      className="text-center btn-primary btn-icon me-2 mt-lg-0 mt-md-0 mt-3 btn btn-primary"
                    >
                      <i className="btn-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </i>
                      <span>Add Documentation</span>
                    </button>
                  </Link>
                </div>
              </Row>

              <Card.Body className="">
                <div className="table-responsive">
                  <table
                    id="role-list-table"
                    className="table table-striped"
                    role="grid"
                    data-toggle="data-table"
                  >
                    <thead>
                      <tr className="ligth">
                        <th>S/No</th>

                        <th>
                          <b>Subject</b>
                        </th>
                        <th>Code</th>
                        <th>
                          <b>Action</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {objectArray.map((item, idx) => (
                        <tr key={idx}>
                          <td className="h6">{idx + 1}</td>
                          <td className="text-uppercase">
                            <b>{item.subject}</b>
                          </td>
                          <td className="h6">{item.feature}</td>
                          <td className="">
                            <OverlayTrigger
                              placement="left"
                              overlay={
                                <Tooltip id="button-tooltip-1">
                                  Preview Documentation
                                </Tooltip>
                              }
                            >
                              <a
                                className="btn btn-sm btn-icon btn-success"
                                onClick={() => {
                                  navigate(
                                    `${dashboard_routes.documentation.previewDocumentation}?docId=${item.id}`
                                  );
                                }}
                              >
                                <span className="btn-inner">
                                  <svg
                                    width="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M11.9946 16V12"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M11.9896 8.2041H11.9996"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </OverlayTrigger>
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="button-tooltip-2">
                                  {" "}
                                  Edit Documentation
                                </Tooltip>
                              }
                            >
                              <a
                                className="btn btn-sm btn-icon btn-warning  mx-4"
                                onClick={() => {
                                  navigate(
                                    `${dashboard_routes.documentation.updateDocumentation}?docId=${item.id}&productId=${productId}`
                                  );
                                }}
                              >
                                <span className="btn-inner">
                                  <svg
                                    width="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M15.1655 4.60254L19.7315 9.16854"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </OverlayTrigger>

                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip id="button-tooltip-3">
                                  Delete Document
                                </Tooltip>
                              }
                            >
                              <span
                                className="btn btn-sm btn-icon btn-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                onClick={() => {
                                  const params = {
                                    selectedId: item.id,
                                    navigate,
                                  };
                                  Alert.showDialog(
                                    "Delete Documentation",
                                    "Are you sure you want to delete item",
                                    setSelectedId,
                                    DeleteDoc,
                                    params,
                                    dispatch
                                  );
                                  setSelectedId(item.id);
                                }}
                              >
                                <span className="btn-inner">
                                  <svg
                                    width="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="currentColor"
                                  >
                                    <path
                                      d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M20.708 6.23975H3.75"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
              <Card.Footer>
                <PaginationFilter1
                  param1={productId}
                  filterProps={filterProps}
                  action={GetDocList}
                />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    docList: state.documentation.docList,
    filterProps: state.documentation.filterProps,
  };
}

function mapDispatchToProps(dispatch) {
  return { getDocList: (id, pageNumber) => GetDocList(id, 1)(dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentationList);
