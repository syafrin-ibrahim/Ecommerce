import { GET_CITY, GET_PROVINCE } from "../../actions/RajaOngkirAction"

const initialState = {
    getProvinceLoading: false,
    getProvinceSuccess: [],
    getProvinceError: false,
    getCityLoading: false,
    getCitySuccess: [],
    getCityError: false
}

export const rajaOngkirReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROVINCE:
            console.log('ongkir reducer = ', action.type);
            return {
                ...state,
                getProvinceLoading: action.payload.loading,
                getProvinceSuccess: action.payload.data,
                getProvinceError: action.payload.errorMessage

            }
        case GET_CITY:
            console.log('city reducer : ', action.type)
            return {
                ...state,
                getCityLoading: action.payload.loading,
                getCitySuccess: action.payload.data,
                getCityError: action.payload.errorMessage
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