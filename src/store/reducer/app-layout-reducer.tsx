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
            return {
                ...state,
                loading: false
            }
        }
        case actions.RESPOND_DECISION_DIALOG:
            return {
                ...state,
                dialogResponse: payload
            }

        default:
            return state
    }
}