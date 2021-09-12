import { REGISTER_USER } from "../../actions/AuthAction";

const initialState = {
    registerLoading: false,
    registerSuccess: false,
    registerError: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER: {
            console.log('register reducer = ', action.type);
            return {
                ...state,
                registerLoading: action.payload.loading,
                registerSuccess: action.payload.data,
                registerError: action.payload.errorMessage

            }
        }
        default: state
    }
    return state
}