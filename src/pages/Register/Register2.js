import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native'

import { connect, useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../actions/AuthAction'
import { getProvince, getCity } from '../../actions/RajaOngkirAction'
import { IconRegister2 } from '../../assets'
import { ButtonIcon, Gap, Input, Select } from '../../components'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

const Register2 = ({ navigation, route }) => {
    const datax = route.params
    console.log('datax = ', datax);
    const [alamat, setAlamat] = useState('')
    const [myCity, setMyCity] = useState('')
    const [myProvince, setMyProvince] = useState('')



    const dispatch = useDispatch()
    // const mycity = ['gorontalo', 'bali', 'aceh', 'bengkulu']
    const province = useSelector(state => state.rajaOngkirReducer.getProvinceSuccess)
    const city = useSelector(state => state.rajaOngkirReducer.getCitySuccess)
    const loading = useSelector(state => state.authReducer.registerLoading)
    const success = useSelector(state => state.authReducer.registerSuccess)
    const error = useSelector(state => state.authReducer.registerError)
    // const provence = []

    const changeProvince = (province_id) => {
        setMyProvince(province_id)
        dispatch(getCity(province_id))
    }

    useEffect(() => {

        dispatch(getProvince())
        // console.log('dispatch ke 5 = ', province);

    }, [])

    const submit = () => {
        if (alamat && myCity && myProvince) {
            const sendData = {
                ...datax,
                alamat,
                myCity,
                myProvince
            }
            console.log('data terbaru = ', sendData)
            dispatch(registerUser(sendData))
            console.log('register user', success);
            navigation.replace('')
        } else {
            Alert.alert('Ops...', 'alamat, kota, provinsi tidak boleh kosong')
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.page}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView >
                    <View style={styles.btnBack}>
                        <ButtonIcon icon="arrow-left" onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.logo}>
                        <View style={styles.ilustration}>
                            <IconRegister2 />
                            <Gap height={5} />
                            <Text style={styles.title}>Isi Lengkap</Text>
                            <Text style={styles.title}>Alamat Anda</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.circleSecondary}></View>
                            <Gap width={10} />
                            <View style={styles.circlePrimary}></View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Input label="alamat" value={alamat} onChangeText={(alamat) => setAlamat(alamat)} />
                        <Select label="provinsi" datas={province ? province : []} value={myProvince} onValueChange={(province_id) => changeProvince(province_id)} />
                        <Select label="kota/kab" datas={city ? city : []} value={myCity} onValueChange={(myCity) => setMyCity(myCity)} />
                        <Gap height={45} />
                        <ButtonIcon title="Continue" icon="submit" color={colors.primary}
                            type="text-icon" padding={responsiveHeight(5)}
                            fontSize={12} onPress={submit} />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


export default Register2
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    btnBack: {
        marginLeft: 30,
        marginTop: responsiveHeight(40),
        position: 'absolute'
    },
    ilustration: {
        alignItems: 'center',
        marginTop: responsiveHeight(40)
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.primary.light,
        color: colors.primary
    },
    wrapper: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },
    circlePrimary: {
        backgroundColor: colors.primary,
        height: responsiveHeight(14),
        width: responsiveWidth(12),
        borderRadius: 5
    },
    circleSecondary: {
        backgroundColor: colors.border,
        height: responsiveHeight(14),
        width: responsiveWidth(12),
        borderRadius: 5
    },
    card: {
        marginHorizontal: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 30,
        paddingBottom: 20,
        paddingTop: 10,
        borderRadius: 10,
        marginTop: 10
    },

})