import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, responsiveHeight } from '../../../utils'

const CardLiga  = ({image})=>{
    return(
        <TouchableOpacity style={styles.wrapper}>
            <Image source={image} style={styles.img}/>
        </TouchableOpacity>
    )
}

export default CardLiga
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset:  {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        borderRadius: 15
    },
    img : {
        width: responsiveHeight(70),
        height: responsiveHeight(70)
    }
})