import { actions } from "../action-types/app-layout-aciton-types"

export const startSpining = () => (dispatch: any) => {
    dispatch({ type: actions.START_SPINNING })
}

export const stopSpining = () => (dispatch: any) => {
    dispatch({ type: actions.STOP_SPINNING })
}