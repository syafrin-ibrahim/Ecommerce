import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import Button from '../Button'

const CardJersey = ({jersey, navigation})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={jersey.gambar[0]} style={styles.image}/>
            <Text style={styles.text}>{jersey.nama}</Text>

            </TouchableOpacity>
            
                <Button title="detail" paddingButton={7} onPress={()=>navigation.navigate('JerseyDetail', {jersey})}/>
            
        </View>
    )
}
export default CardJersey
const styles = StyleSheet.create({
    container : {
        marginBottom : 25
    },
    card : {
        backgroundColor : colors.yellow,
        width : responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    image : {
        width : responsiveWidth(124),
        height: responsiveHeight(124)
    },
    text : {
        fontFamily : fonts.primary.bold,
        fontSize: 13,
        textTransform: 'capitalize',
        textAlign: 'center'
    }
})