import { actions } from "../action-types/location-lookup-action-types";
import { ILocationLookupState } from "../Models/LocationLookupState";
import { _state } from "../states/location-lookup-state";

export const locationLookupReducer = (state : ILocationLookupState  = _state, { type, payload }: any) => {
  switch (type) {

    case actions.FETCH_COUNTRY_LOOKUP:
      return {
        ...state,
        countryList: payload,
      };
    
    case actions.FETCH_STATE_LOOKUP:
      return {
        ...state,
        stateList: payload,
      };
   
    case actions.FETCH_CITY_LOOKUP:
      return {
        ...state,
        cityList: payload,
      };
   
    default:
      return state;
  }
}


