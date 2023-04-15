import { IProductState } from "../Models/ProductState";
import { actions } from "../action-types/products-action-types";
import { _state } from "../states/products.state";


export const productReducer = (state : IProductState = _state, { type, payload }: any) => {
    switch (type) {
      
          case actions.FETCH_PRODUCTS:{
            return {
              ...state,
              products: payload,
            };
              }
            case actions.FETCH_SINGLE_PRODUCT:{
              return {
                ...state,
                singleProduct: payload,
              };
            }

           
          case actions.FETCH_USER_PRODUCTS:{
            return {
              ...state,
              userProducts: payload,
            };
          }

          
            case actions.FETCH_SINGLE_USER_PRODUCT:{
              return {
                ...state,
                singleUserProduct: payload,
              };
           }
            

            default:
                return state
    }}