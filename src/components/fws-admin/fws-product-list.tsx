import React, { useEffect} from "react";
import { Card, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { GetAllProducts, GetAllUserProducts } from "../../store/actions/products-actions";
import { dashboard_routes } from "../../router/fws-path-locations";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Products = ({getAllProducts, getAllUserProducts,products,userProducts}:any) => {
  const navigate = useNavigate();
  const locations = useLocation();
  const queryParams = new URLSearchParams(locations.search);
  const isSmsUser = queryParams.get("isSmsUser");
  const userId = queryParams.get("userId");

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllUserProducts(userId);
 }, [userId]);

  function truncateString(str: any) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    } else return str;
  }

  
  return (
    <>
      <Card className="pb-5">
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
          <Row className="p-3">
            {products?.map((product:any, idx:any) => (
              <div className="col-xl-3 col-lg-6 mt-2 mb-5 mb-md-3" key={idx}>
                <div className=" card-transparent border  h-100 w-100  rounded">
                  {" "}
                  <div className="card-body ">
                    {" "}
                    <div className="">
                      <img
                        src={product.productUrl}
                        style={{ maxWidth: "25%" }}
                        alt="product"
                      />

                      <div>
                        <h6 className="counter fw-bold  my-2 mt-3">
                          <span>{product.productName}</span>
                        </h6>
                      </div>
                    </div>{" "}
                    <p className=" mt-2">
                      {truncateString(product.productDescription)}
                    </p>
                    <div className="mt-3">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
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
                <div className="d-flex justify-content-around border text-center mt-0 mt-md-n3 mb-3 p-2 ">
                <div  
                 className=" border text-center  p-2 px-3" 
                  style={{
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    product.productType === 0 &&
                    navigate(
                      `${dashboard_routes.smsLocations.sms}?productId=${product.productId}`
                    )
                  }
                >
                  View
                </div>
                <div
                  className=" border text-center p-2 px-3"
                  style={{
                    backgroundColor: isSmsUser === 'true' && product.productType === 0   ? "#f9cd39" : "white",
                    color: isSmsUser === 'true' && product.productType === 0  ? "white" : "",
                    cursor: "pointer",
                  }}
                  onClick={() =>{
                   if(product.productType === 0 ) {
                   const userProduct = userProducts.find((u:any)=>u.productId === product.productId)
                   isSmsUser === 'true' ?
                    navigate(
                      `${dashboard_routes.smsLocations.updateSms}?userProductId=${userProduct.userProductId}?userId=${userId}`
                    )
                    :
                    navigate(
                      `${dashboard_routes.smsLocations.createSms}?userId=${userId}&productId=${product.productId}`
                    )}
                  }}
                >
                  {isSmsUser === 'true'&& product.productType === 0  ? "Update" : "Add"}
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
    products: state.product.products,
    userProducts: state.product.userProducts,
  };

  
}

function mapDispatchToProps(dispatch:any) {
  return {
    getAllProducts: () => GetAllProducts()(dispatch),
    getAllUserProducts: (userId:any) => GetAllUserProducts(userId)(dispatch),
  };
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
