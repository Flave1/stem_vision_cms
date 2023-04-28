import React, { useEffect, useState } from 'react'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Card from '../../../utils/Card';
import { dashboard_routes } from '../../../router/fws-path-locations';
import { connect, useDispatch } from 'react-redux';
import { GetClientUsers } from '../../../store/actions/products-actions';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { filterList } from '../../../utils/tools';
import PaginationFilter from '../../../utils/pagination-filter';

const ClientUserList = ({ clientUsers,filterProps, getClientUsers }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [objectArray, setObjectArray] = useState([]);

  useEffect(() => {
    getClientUsers(1);
  }, []);

    useEffect(() => {
        setObjectArray(filterList(clientUsers, searchQuery, ["email"]))
    }, [searchQuery, clientUsers])
    
  return (
    <>
      <div>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between border-0">
                <div className="header-title">
                  <h4 className="card-title m-3 ">
                    <b>Client User List</b>
                  </h4>
                </div>
              </Card.Header>

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
                          <b>Email</b>
                        </th>
                        <th>
                          <b>Action</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {objectArray?.map((item, idx) => (
                        <tr key={idx}>
                          <td className="h6">{idx + 1}</td>
                          <td className="text-uppercase">
                            <b>{item.email}</b>
                          </td>
                          <td className="">
                           
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip id="button-tooltip-2">
                                  {" "}
                                  Install Product
                                </Tooltip>
                              }
                            >
                              <a
                                className="btn btn-sm btn-icon btn-warning  mx-4"
                                onClick={() => {
                                  navigate(
                                    `${dashboard_routes.productsLocations.products}?userId=${item.userId}&isSmsUser=${item.isSmsUser}`
                                  );
                                }}
                              >
                                <span className="btn-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><path d="M14 2v11h2.51l-4.51 5.01-4.51-5.01h2.51v-11h4zm2-2h-8v11h-5l9 10 9-10h-5v-11zm3 19v3h-14v-3h-2v5h18v-5h-2z"/></svg>
                                </span>
                              </a>
                            </OverlayTrigger>

                            
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
              <Card.Footer>
                <PaginationFilter
                  filterProps={filterProps}
                  action={GetClientUsers}
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
    clientUsers: state.product.clientUsers,
    filterProps: state.product.filterProps,
  };
}

function mapDispatchToProps(dispatch) {
  return { getClientUsers: (pageNumber) => GetClientUsers(pageNumber)(dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientUserList);
