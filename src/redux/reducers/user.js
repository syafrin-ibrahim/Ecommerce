import { GET_USER } from "../../actions/UserAction"

const initialState = {
    dataUser: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                dataUser: action.payload
            }
        default: state
    }
    return state
    // console.log('masuk reducer')

    // if (action.type === GET_USER) {
    //     return {
    //         ...state,
    //         dataUser: action.payload
    //     }
    // }
    // return state
}