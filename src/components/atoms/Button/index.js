import React from 'react'
import { TouchableOpacity, View , Text, StyleSheet} from 'react-native'
import { colors, fonts } from '../../../utils';

const Button  = ({title,padding, paddingButton, onPress, fontSize })=>{
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container(padding)} >
                
                    <Text style={styles.text(paddingButton, fontSize)} >{title} </Text>
                
            </View>
            </TouchableOpacity>
    );
}

export default Button
const styles= StyleSheet.create({
    container : (padding)=> ({
        borderRadius: 5,
        backgroundColor : colors.primary,
        padding :padding
    }),
    text : (paddingButton, fontSize)=>({
        textAlign : 'center',
        color : colors.white,
        fontSize: fontSize ? fontSize : 13,
        fontFamily : fonts.primary.bold,
        padding : paddingButton
    })
})
