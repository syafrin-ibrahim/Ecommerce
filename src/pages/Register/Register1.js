import React, { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native'
import { IconRegister1 } from '../../assets'
import { Button, ButtonIcon, Gap, Input } from '../../components'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

const Register1 = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const data = {
        myname: name,
        myEmail: email,
        myPassword: password,
        myPhone: phone
    }
    const submit = () => {

        if (name && email && phone && password) {
            console.log('data saya = ', data)
            navigation.navigate('Register2', data)
            // Alert.alert('data ', data)
        } else {
            Alert.alert('Opsss..', 'Name , Email , Phone, Password Tidak Boleh Kosong')
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.page}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.btnBack}>
                        <ButtonIcon icon="arrow-left" onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.logo}>
                        <View style={styles.ilustration}>
                            <IconRegister1 />
                            <Gap height={5} />
                            <Text style={styles.title}>Daftar</Text>
                            <Text style={styles.title}>Isi Data Diri Anda</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.circlePrimary}></View>
                            <Gap width={10} />
                            <View style={styles.circleSecondary}></View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Input label="Nama" value={name} onChangeText={(name) => { setName(name) }} />
                        <Input label="Email" value={email} onChangeText={(email) => { setEmail(email) }} />
                        <Input label="No. Handphone" keyboardType="number-pad" value={phone} onChangeText={(phone) => { setPhone(phone) }} />
                        <Input label="Password" secureTextEntry value={password} onChangeText={(password) => { setPassword(password) }} />
                        <Gap height={15} />
                        <ButtonIcon title="Continue" icon="submit" color={colors.primary}
                            type="text-icon" padding={responsiveHeight(5)}
                            fontSize={12} onPress={submit} />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}
export default Register1
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20
    },
    btnBack: {
        marginLeft: 30,
        position: 'absolute'
    },
    ilustration: {
        alignItems: 'center',

    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary.light,
        color: colors.primary
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
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
        marginTop: 10,
        marginBottom: 10
    },

})