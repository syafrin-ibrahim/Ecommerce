import React, { useState } from 'react'
import { StyleSheet, Text, View } from "react-native"
import { fonts, colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { Picker } from '@react-native-picker/picker';

const Select = ({ datas, width, height, label, fontSize, value, onValueChange }) => {

    // console.log('data select = ', datas);

    // datas.map((e) => {
    //     return console.log('value = ', e);
    // })
    return (
        <View style={styles.container}>
            <Text style={styles.title(fontSize)}>{label} :</Text>
            <View style={styles.wrapperPicker}>
                <Picker
                    selectedValue={value}
                    style={styles.picker(width, height, fontSize)}
                    onValueChange={onValueChange}>
                    <Picker.Item label="pilih" value="" style={{ fontSize: 12, }} />
                    {
                        datas.map((e, index) => {
                            if (label === 'provinsi') {
                                return <Picker.Item style={{ fontSize: 12, }} label={e.province} value={e.province_id} key={e.province_id} />
                            } else if (label === 'kota/kab') {
                                return <Picker.Item style={{ fontSize: 12 }} label={e.type + " " + e.city_name} value={e.city_id} key={e.city_id} />
                            } else {
                                return <Picker.Item style={{ fontSize: 12 }} label={e} value={e} key={index} />
                            }

                        })
                    }

                </Picker>
                {/* <Picker
                    selectedValue={value}
                    onValueChange={onValueChange
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
            </View>
        </View>
    )
}
export default Select
const styles = StyleSheet.create({
    container: {
        marginTop: 10,

    },
    title: (fontSize) => ({
        fontSize: fontSize ? fontSize : 13,
        fontFamily: fonts.primary.regular,

    }),
    wrapperPicker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
    },
    picker: (width, height, fontSize) => ({
        fontSize: fontSize ? fontSize : 13,
        fontFamily: fonts.primary.regular,
        width: width,
        height: height ? height : responsiveHeight(76),
    }),


})