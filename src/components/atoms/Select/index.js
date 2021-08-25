import React, { useState}  from 'react'
import { StyleSheet, Text, View } from "react-native"
import { fonts, colors } from '../../../utils'
import {Picker} from '@react-native-picker/picker';

const Select  = ({ datas, width, height, label, fontSize })=>{
    const [value, setValue] = useState('')
    return(
        <View style={styles.container}>
        <Text style={styles.title(fontSize)}>{label} :</Text>
        <View style={styles.wrapperSelect}>
            <Picker
                selectedValue={value}
                style={styles.picker(width, height, fontSize)}
                onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                }>
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
    wrapperSelect : {
        borderWidth : 1,
        borderRadius : 5,
        borderColor: colors.border, 
        
    },
    picker : (width, height, fontSize)=>({
        fontSize : fontSize ? fontSize : 13,
        fontFamily : fonts.primary.regular,
        width : width,
        height : height, 
    }),
  
   
})