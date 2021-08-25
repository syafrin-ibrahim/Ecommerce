import React  from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native"
import { colors, fonts } from '../../../utils'

const Input  = ({ textarea, label, width, height, fontSize, placeholder })=>{
    if(textarea){
        return(
            <View style={styles.container}>
            <Text style={styles.title(fontSize)}>{label} : </Text>    
            <TextInput style={styles.inputTextarea(fontSize)} multiline={true} numberOfLines={3}/>
        </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title(fontSize)}>{label} :</Text>
            <TextInput style={styles.grx(fontSize, width,height)}/>
        </View>
    )
}
export default Input
const styles = StyleSheet.create({
    container : {
        marginTop : 10
    },
    title : (fontSize)=>({
        fontSize : fontSize ? fontSize : 18,
        fontFamily : fonts.primary.regular
    }),
    grx : (fontSize, width, height)=>({
        fontSize : fontSize ? fontSize : 18,
        fontFamily : fonts.primary.regular,
        width : width,
        height : height,
        borderWidth : 1,
        borderRadius : 5,
        borderColor: colors.border,
        paddingHorizontal : 10,
        paddingVertical : 5,

    }),
    inputTextarea : (fontSize)=>({
        fontSize : fontSize ? fontSize : 18,
        fontFamily : fonts.primary.regular,
        borderWidth : 1,
        borderRadius : 5,
        borderColor: colors.border,
        paddingHorizontal : 10,
        paddingVertical : 5,
        textAlignVertical : 'top'
    }),



})