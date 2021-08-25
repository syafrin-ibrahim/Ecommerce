import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const CardAddress = ({ profile })=>{
    return(
        <View style={styles.container}>
                <Text style={styles.title}>Alamat  : </Text>
                <Text style={styles.alamat}>{profile.alamat } </Text>
                <Text style={styles.alamat}>{profile.kota } </Text>
                <Text style={styles.alamat}>{profile.provinsi } </Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Ubah Alamat</Text>
                </TouchableOpacity>
        </View>
    )
}
export default CardAddress
const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.white,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        padding : 15,
        borderRadius : 10,
        marginTop : 10  
    },
    title : {
        fontFamily : fonts.primary.bold,
        fontSize : 14,
        marginTop : 5
    },
    alamat : {
        fontFamily : fonts.primary.regu,
        fontSize : 14,
    },
    link : {
        fontFamily : fonts.primary.regu,
        fontSize : 14,
        color : colors.primary,
        textAlign : 'right'
    }
})