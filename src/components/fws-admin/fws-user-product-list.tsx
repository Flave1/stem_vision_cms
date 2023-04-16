import React, { useState,useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllUserProducts } from "../../store/actions/products-actions";
import { dashboard_routes } from "../../router/fws-path-locations";


const UserProducts = ({userProducts,getAllUserProducts}:any) => {
  const navigate = useNavigate();
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [indexRow, setIndexRow] = useState(-1);

  useEffect(() => {
    getAllUserProducts()
  }, []);
  function truncateString(str: any) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    } else return str;
  }
  return (
    <>
      <Card>
        <Card.Body>
          <Row className="p-3">
            {userProducts?.map((product:any, idx:number) => (
              <div className="col-xl-3 col-lg-6 mt-2" key={idx}>
                <div className=" card-transparent border  h-100 w-100  rounded">
                  {" "}
                  <div onClick={() => {
                    navigate(
                      `${dashboard_routes.productsLocations.userProductDetails}?userProductId=${product.userProductId}`
                    );
                    setShowMenuDropdown(false);
                  }}
                    className="card-body "
                    style={{cursor:"pointer"}}
                  >
                    {" "}
                    <div className="">
                      <div className="d-flex">
                        <div className="d-flex justify-content-center">
                          <img
                            src={product.productUrl}
                            style={{ maxWidth: "25%" }}
                            alt="product"
                          />
                        </div>
                        
                      </div>
                      <div>
                        <h6 className="counter fw-bold text-center my-2 mt-3">
                          <span>{product.productName}</span>
                        </h6>
                      </div>
                    </div>{" "}
                    <p className=" mt-2 text-center">
                      {truncateString(product.productDescription)}
                    </p>
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
    userProducts: state.product.userProducts,
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    getAllUserProducts: () => GetAllUserProducts()(dispatch),
  };
 
}

 export default connect(mapStateToProps, mapDispatchToProps)(UserProducts);
  
