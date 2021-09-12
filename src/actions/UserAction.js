export const GET_USER = "GET_USER"

// export const getUser = () => {
//     return (dispacth) => {
//         dispacth({
//             type: GET_USER,
//             payload: {
//                 nama: 'Andika',
//                 email: 'Andika@gmail.com'
//             }
//         })
//     }
// }

export const getUser = () => (dispatch) => {
    dispatch({
        type: GET_USER,
        payload: {
            nama: 'Andika',
            email: 'Anddika@gmail.com'
        }
    })
}