import { IDocumentationState } from "../Models/DocumentationState";
import { actions } from "../action-types/documentation-action-types";
import { _state } from "../states/documentation-state";



export const documentationReducer = (state: IDocumentationState = _state, { type, payload }: any) => {
  switch (type) {

    case actions.FETCH_DOCUMENTATION_PRODUCTS: {
      return {
        ...state,
        docProducts: payload,
      };
    }
    case actions.FETCH_DOCUMENTATION_LIST: {
      return {
        ...state,
        filterProps: payload,
        docList: payload.data,
      };
    }

    case actions.GET_FEATURES: {
      return {
        ...state,
        features: payload,
      };
    }


    case actions.FETCH_SINGLE_DOCUMENTATION: {
      return {
        ...state,
        singleDocumentation: payload,
      };
    }




    default:
      return state
  }
}