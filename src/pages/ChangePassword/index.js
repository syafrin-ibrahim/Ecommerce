import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button, ButtonIcon, Input, Select } from '../../components/atoms'
import { dummyProfile } from '../../data'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

const ChangePassword = ()=>{
    return(
        <View style={styles.page}>
                <View>
                <Input label="Password Lama"  secureTextEntry/>
                <Input label="Password Baru"  secureTextEntry/>
                <Input label="Konfirmasi Password Baru"  secureTextEntry/>
                </View>
                <View style={styles.btnUpdate}>
                <ButtonIcon title="update" type="text-icon" color={colors.primary} 
                padding={responsiveHeight(7)} icon="submit"
                fontSize={18}/>
                </View> 

        </View>
    )
}

export default ChangePassword
const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 30,
        paddingTop : 10,
        justifyContent : 'space-between'
    },
    btnUpdate : {
        marginVertical : 30,
    }
})