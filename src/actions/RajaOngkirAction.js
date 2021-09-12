import axios from "axios"
import { api_key_ongkir, headers_api_ongkir, timeout, url_ongkir } from "../utils"
export const GET_PROVINCE = 'GET_PROVINCE'
export const GET_CITY = 'GET_CITY'

export const getProvince = () => (dispatch) => {

    //loading
    dispatch({
        type: GET_PROVINCE,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'get',
        url: url_ongkir + 'province',
        timeout: timeout,
        headers: headers_api_ongkir
    }).then((res) => {

        if (res.data.rajaongkir.status.code !== 200) {
            dispatch({
                type: GET_PROVINCE,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: res
                }
            })
        } else {
            //console.log('data province = ', res.data.rajaongkir.results);
            dispatch({
                type: GET_PROVINCE,
                payload: {
                    loading: false,
                    data: res.data ? res.data.rajaongkir.results : [],
                    errorMessage: false
                }
            })

        }
    }).catch((err) => {
        //error
        dispatch({
            type: GET_PROVINCE,
            payload: {
                loading: false,
                data: false,
                errorMessage: err
            }
        })
        alert(err)
        // console.log('error => ', err);
    })

}

export const getCity = (province_id) => (dispatch) => {

    //loading
    dispatch({
        type: GET_CITY,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'get',
        url: url_ongkir + 'city?province=' + province_id,
        timeout: timeout,
        headers: headers_api_ongkir
    }).then((res) => {

        if (res.data.rajaongkir.status.code !== 200) {
            dispatch({
                type: GET_CITY,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: res
                }
            })
        } else {
            //console.log('data province = ', res.data.rajaongkir.results);
            dispatch({
                type: GET_CITY,
                payload: {
                    loading: false,
                    data: res.data ? res.data.rajaongkir.results : [],
                    errorMessage: false
                }
            })

        }
    }).catch((err) => {
        //error
        dispatch({
            type: GET_CITY,
            payload: {
                loading: false,
                data: false,
                errorMessage: err
            }
        })
        alert(err)
        // console.log('error => ', err);
    })

}
