import React, { useState}  from 'react'
import { StyleSheet, Text, View } from "react-native"
import { fonts, colors, responsiveHeight } from '../../../utils'
import {Picker} from '@react-native-picker/picker';

const Select  = ({ datas, width, height, label, fontSize })=>{
    const [value, setValue] = useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.title(fontSize)}>{label} :</Text>
            <View style={styles.wrapperPicker}>
                <Picker
                    selectedValue={value}
                    style={styles.picker(width, height, fontSize)}
                    onValueChange={(itemValue, itemIndex) =>
                        setValue(itemValue)
                    }>
                        <Picker.Item label="-- pilih --" value="" />
                    {
                        datas.map((e, index)=>{
                            return <Picker.Item   style={{ fontSize : 13 }} label={e} value={e} key={index} />
                        })
                    }
                    
                </Picker>
            </View>
        </View>
    )
}
export default Select
const styles = StyleSheet.create({
    container : {
        marginTop : 10,
        
    },
    title : (fontSize)=>({
        fontSize : fontSize ? fontSize : 18,
        fontFamily : fonts.primary.regular,
    
    }),
    wrapperPicker : {
        borderWidth : 1,
        borderRadius : 5,
        borderColor: colors.border, 
        
    },
    picker : (width, height, fontSize)=>({
        fontSize : fontSize ? fontSize : 13,
        fontFamily : fonts.primary.regular,
        width : width,
        height : height ? height : responsiveHeight(46), 
    }),
  
   
})