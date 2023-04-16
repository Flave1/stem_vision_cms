import { actions } from "../action-types/app-layout-aciton-types";
import { _state } from "../states/app-layout-state";

export const appLayoutReducer = (state = _state, { type, payload }: any) => {
    switch (type) {
        case actions.START_SPINNING: {
         
            return {
                ...state,
                loading: true
            }
        }

        case actions.STOP_SPINNING: {
            console.log('stopped');
            return {
                ...state,
                loading: false
            }
        }


        default:
            return state
    }
}