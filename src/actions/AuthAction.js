import Fire from '../config/Fire'
import { userData } from '../utils';

export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = (data) => (dispatch) => {
    //loading
    dispatch({
        type: REGISTER_USER,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    Fire.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            // Signed in 
            const newUser = {
                ...data,
                uid: res.user.uid
            }
            //var user = userCredential.user;

            //simpan di realtime database
            Fire.database().ref('users/' + res.user.uid).set(newUser);

            //success
            dispatch({
                type: REGISTER_USER,
                payload: {
                    loading: false,
                    data: newUser,
                    errorMessage: false
                }
            })

            //simpan ke local storage
            userData(user, newUser)

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            //error
            dispatch({
                type: REGISTER_USER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
            alert(error.message)
        });



}