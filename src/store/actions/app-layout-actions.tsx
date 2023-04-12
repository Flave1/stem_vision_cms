import { actions } from "../action-types/app-layout-aciton-types"

const startSpining = () => (dispatch: any) => {
    dispatch({ type: actions.START_SPINNING })
}

const stopSpining = () => (dispatch: any) => {
    dispatch({ type: actions.STOP_SPINNING })
}