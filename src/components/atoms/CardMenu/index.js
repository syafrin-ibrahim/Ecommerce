import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { IconArrowRight } from '../../../assets'
import { colors, fonts, responsiveHeight } from '../../../utils'

const CardMenu = ({menu})=>{
    const { nama, gambar } = menu
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                {gambar}
                <Text style={styles.text}>{nama}</Text>
            </View>
            <IconArrowRight />
        </View>
    )
}

export default CardMenu
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginTop : 15,
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor : colors.white,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        marginHorizontal: 40,
        padding :responsiveHeight(10),
        borderRadius : 10
    },
    text : {
        fontSize : 16,
        fontFamily : fonts.primary.bold,
        marginLeft : 15
    },
    menu : {
        flexDirection : 'row',
        alignItems : 'center'
    }
})