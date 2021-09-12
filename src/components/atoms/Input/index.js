import React from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native"
import { colors, fonts } from '../../../utils'

const Input = ({ textarea, label, width, height, fontSize, value, secureTextEntry, keyboardType, onChangeText }) => {
    if (textarea) {
        return (
            <View style={styles.container}>
                <Text style={styles.title(fontSize)}>{label} : </Text>
                <TextInput style={styles.inputTextarea(fontSize)} multiline={true} numberOfLines={3} value={value} onChangeText={onChangeText} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title(fontSize)}>{label} :</Text>
            <TextInput style={styles.grx(fontSize, width, height)} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType} onChangeText={onChangeText} />
        </View>
    )
}
export default Input
const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    title: (fontSize) => ({
        fontSize: fontSize ? fontSize : 14,
        fontFamily: fonts.primary.regular
    }),
    grx: (fontSize, width, height) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.regular,
        width: width,
        height: height,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        paddingHorizontal: 10,
        paddingVertical: 2,

    }),
    inputTextarea: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.regular,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlignVertical: 'top'
    }),



})