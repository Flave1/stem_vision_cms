import { ProductDetail } from "../../components/Models/product/ProductDetails";

export interface IProductState {
    products: ProductDetail[],
    userProducts:ProductDetail[],
    singleProduct:ProductDetail,
    singleUserProduct: ProductDetail,
    message: string,
}