import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView,Keyboard, TouchableWithoutFeedback,ScrollView } from 'react-native'
import { IconRegister2 } from '../../assets'
import { ButtonIcon, Gap, Input,Select } from '../../components'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'

const Register2 = ({navigation})=>{
    const city = []
    const provence = []
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.page}
          >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
                  <View style={styles.btnBack}>
                      <ButtonIcon icon="arrow-left" onPress={()=> navigation.goBack() }/>
                  </View>
                  <View style={styles.logo}>
                      <View style={styles.ilustration}>
                          <IconRegister2 />
                          <Gap height={5} />
                          <Text style={styles.title}>Isi Lengkap</Text>
                          <Text style={styles.title}>Alamat Anda</Text>
                      </View>
                      <View style={styles.wrapper}>
                          <View style={styles.circleSecondary}></View>
                          <Gap width={10} />
                          <View style={styles.circlePrimary}></View>
                      </View>
                  </View>
                  <View style={styles.card}>
                    <Input label="alamat" textarea/>
                    <Select label="Kota" datas={city}/>
                    <Select label="Provinsi" datas={provence}/>
                    <Gap height={15} />
                    <ButtonIcon title="Continue" icon="submit" color={colors.primary} 
                    type="text-icon" padding={responsiveHeight(5)}
                    fontSize={12} onPress={()=> navigation.navigate('Tabs')}/>
                  </View>
              </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
export default Register2
const styles = StyleSheet.create({
    page : {
        flex: 1,
        backgroundColor : colors.white
    },
    btnBack : {
        marginLeft : 30,
        marginTop : responsiveHeight(40),
        position : 'absolute'
    },
    ilustration : {
        alignItems : 'center',
        marginTop : responsiveHeight(40)
    },
    title : {
        fontSize : 24,
        fontFamily : fonts.primary.light,
        color : colors.primary
    },
    wrapper : {
        flexDirection : 'row',
        marginTop : 10,
        justifyContent : 'center'
    },
    circlePrimary : {
        backgroundColor : colors.primary,
        height : responsiveHeight(14),
        width : responsiveWidth(12),
        borderRadius : 5
    },
    circleSecondary :{
        backgroundColor : colors.border,
        height: responsiveHeight(14),
        width : responsiveWidth(12),
        borderRadius : 5
    },
    card : {
        marginHorizontal : 30,
        shadowColor: '#000',
        shadowOffset:  {
            width: 0,
            height: 2,
        },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 30,
        paddingBottom : 20,
        paddingTop : 10,
        borderRadius : 10,
        marginTop : 10
    },
    
})