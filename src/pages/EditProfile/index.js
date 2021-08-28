import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button, ButtonIcon, Input, Select } from '../../components/atoms'
import { dummyProfile } from '../../data'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

const EditProfile = ()=>{
    const city = []
    const provence = []
    const profile = dummyProfile
    return(
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input label="nama"  value={profile.nama}/>
                <Input label="email"  value={profile.email}/>
                <Input label="nomor handphone"  value={profile.hp} />
                <Input label="alamat"   value={profile.alamat} textarea/>
                <Select label="Kota" datas={city}/>
                <Select label="Provinsi" datas={provence}/>
                <View style={styles.InputImage}>
                    <Text style={styles.label}></Text>
                    <View style={styles.wrapper}>
                            <Image source={profile.avatar} style={styles.image}/>
                            <View styles={styles.btnUpload}>
                                <Button title="Change Image" padding={7}/>
                            </View>
                    </View>
                </View>
                <View style={styles.btnUpdate}>
                <ButtonIcon title="update" type="text-icon" color={colors.primary} 
                padding={responsiveHeight(7)} icon="submit"
                fontSize={18}/>
                </View> 
            </ScrollView>
            
        </View>
    )
}

export default EditProfile
const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 30,
        paddingTop : 10
    },
    inputImage : {
        marginTop : 20
    },
    label : {
        fontSize : 18,
        fontFamily : fonts.primary.regular
    },
    wrapper : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 10
    },
    image : {
        width : responsiveWidth(150),
        height : responsiveHeight(175),
        borderRadius : 40,
        marginRight : 40
    },
    btnUpload : {
        marginLeft : 20,
        flex : 1,
        backgroundColor : 'yellow',
        justifyContent : 'center'
    },
    btnUpdate : {
        marginVertical : 30,
    }
})