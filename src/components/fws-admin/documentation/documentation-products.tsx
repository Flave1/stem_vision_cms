import React, { useState,useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dashboard_routes } from "../../../router/fws-path-locations";
import { GetDocProducts } from "../../../store/actions/documentation-actions";


const DocumentationProducts = ({docProducts,getDocProducts}:any) => {
  const navigate = useNavigate();

  useEffect(() => {
    getDocProducts()
  }, []);

  return (
    <>
      <Card className="pb-5">
        <h4 className="m-3">Products</h4>
        <Card.Body>
          <Row className="p-3">
            {docProducts?.map((product:any, idx:number) => (
              <div className="col-xl-3 col-lg-6 mt-2" key={idx}>
                <div className=" card-transparent border shadow h-100 w-100  rounded">
                  {" "}
                  <div onClick={() => {
                    navigate(
                      `${dashboard_routes.documentation.documentationList}?productId=${product.id}`
                    );

                  }}
                    className="card-body "
                    style={{cursor:"pointer"}}
                  >
                   
                      <div>
                        <h6 className="counter fw-bold text-center my-2 mt-3">
                          <span>{product.name}</span>
                        </h6>
                      </div>
                   
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
function mapStateToProps(state:any) {
  return { 
    docProducts: state.documentation.docProducts,
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    getDocProducts: () => GetDocProducts()(dispatch),
  };
 
}

 export default connect(mapStateToProps, mapDispatchToProps)(DocumentationProducts);
  
