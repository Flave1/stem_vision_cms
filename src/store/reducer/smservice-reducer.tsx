import { ISmserviceState } from "../Models/SmserviceState";
import { actions } from "../action-types/smservice-action-types";
import { _state } from "../states/smservice.state";

export const smserviceReducer = (state : ISmserviceState = _state, { type, payload }: any) => {
        switch (type) {
             case actions.FETCH_SMS:
                return {
                  ...state,
                  smservice: payload,
                };
          
                    case actions.EXPORT_PINS:
                      return {
                        ...state,
                        exportPinsCode: payload,
                      };
                   

                    case actions.VALIDATE_BASE_URL_SUFFIX:
                      return {
                        ...state,
                        baseUrlSuffixValidation: payload,
                      };

                      
              
                default:
                    return state
        }}