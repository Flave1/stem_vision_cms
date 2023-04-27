import React, { useState } from "react";
import { Row, Col, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../../utils/Card";
import { dashboard_routes } from "../../../../router/fws-path-locations";
import { DeleteCountryItem, GetCountryLookupList } from "../../../../store/actions/location-lookup-actions";


const ListCountry = () => {
    //VARIABLE DECLARATIONS
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState<any>("");
    //VARIABLE DECLARATIONS

    // ACCESSING STATE FROM REDUX STORE
    const state = useSelector((state: any) => state);
    const { countryList, selectedIds,message } = state.locationLookup;
    const { deleteDialogResponse } = state.alert;
    // ACCESSING STATE FROM REDUX STORE

    React.useEffect(() => {
        GetCountryLookupList()(dispatch)
    }, [dispatch]);

    React.useEffect(() => {
        if (deleteDialogResponse === "continue") {
        if (selectedIds.length === 0) {
            return
        } else {
            DeleteCountryItem(selectedIds)(dispatch)
        }
    }
    return () => {
       // respondToDeleteDialog("")(dispatch);
      };
    }, [selectedIds, deleteDialogResponse,dispatch]);

    const filteredCountryList = countryList.filter((country:any) => {
        if (searchQuery === "") {
            //if query is empty
            return country;
        } else if (
            country.countryName.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            //returns filtered array
            return country;
        }
    });
    
    return (
        <>
            <div>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title mb-3">
                                        <b>Country List</b>
                                    </h4>
                                </div>
                            </Card.Header>
                            <div className="d-md-flex justify-content-between">
                                <div>
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
                                                onChange={(event) => setSearchQuery(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-end">
                                        <Link
                                            to={dashboard_routes.locationLocations.addCountry}
                                            className="d-flex justify-content-end"
                                        >
                                            <button
                                                type="button"
                                                className="text-center btn-primary btn-icon me-2 mt-lg-0 mt-md-0 mt-3 btn btn-primary"
                                            >
                                                <i className="btn-inner">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
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
                                                <span>Add Country</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className="px-0">
                                <div className="table-responsive">
                                    <table
                                        id="role-list-table"
                                        className="table table-striped"
                                        role="grid"
                                        data-toggle="data-table"
                                    >
                                        <thead>
                                            <tr className="ligth">
                                                <th>
                                                    <b>S/No.</b>
                                                </th>
                                                <th>
                                                    <b>Country</b>
                                                </th>
                                                <th>
                                                    <b>Status</b>
                                                </th>
                                                <th min-width="100px">
                                                    <b>Action</b>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredCountryList.map((item:any, idx:any) => (
                                                <tr key={idx}>
                                                    <td className="text-dark">
                                                        {
                                                            idx + 1
                                                        }
                                                    </td>
                                                    <td className="text-uppercase">
                                                        <b>{item.countryName}</b>
                                                    </td>
                                                    <td className="text-uppercase">
                                                        {item.isActive ? <Badge bg="success">Active</Badge>
                                                            : <Badge bg="primary">Inactive</Badge>
                                                        }
                                                    </td>
                                                    <td>
                                                        <div className="flex align-items-center list-user-action">
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip id="button-tooltip-2">
                                                                        Edit Country
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Link
                                                                    className="btn btn-sm btn-icon btn-success"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title=""
                                                                    data-original-title="Details"
                                                                    to={`${dashboard_routes.locationLocations.editCountry}?countryId=${item.countryId}`}
                                                                >
                                                                    <span className="btn-inner">
                                                                        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                                d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                                                strokeLinejoin="round" />
                                                                        </svg>
                                                                    </span>
                                                                </Link>
                                                            </OverlayTrigger>{" "}
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip id="button-tooltip-2">
                                                                        Delete Country
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Link
                                                                    className="btn btn-sm btn-icon btn-danger"
                                                                    data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    title=""
                                                                    data-original-title="Delete"
                                                                    to="#"
                                                                    data-id={item.countryId}
                                                                    onClick={() => {
                                                                  
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
                                                                </Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ListCountry;
