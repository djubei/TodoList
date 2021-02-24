import {setApiStatusAC, setErrorAC} from "./Reducers/appReducer";
import {ResponseType} from "./todoLists-api";
import {Dispatch} from "redux";


export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch) => {


    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('unknown error'))
    }
    dispatch(setApiStatusAC('failed'))


}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(setErrorAC(error.message ? error.message : 'unknown error'))
    dispatch(setApiStatusAC('failed'))
}