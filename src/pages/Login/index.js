import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LogoUtama } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts, responsiveHeight } from '../../utils'

const Login = ({navigation})=>{
    return(
        <View style={styles.page}>
            <View style={styles.logo}>
                <LogoUtama />
            </View>
            <View style={styles.cardLogin}>
                <Input label="Email" />
                <Input label="Password" secureTextEntry/>
                <Gap height={10} />
                <Button title="Login" padding={12} fontSize={18} onPress={()=> navigation.replace('Tabs') }/>
            </View>
            <View style={styles.register}>
                <Text style={styles.blue}>Belum Punya Akun ?</Text>
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Register1') 
                }}>
                    <Text style={styles.blue}>Klik Untuk Daftar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login
const styles = StyleSheet.create({
    page : {
        flex: 1,
        backgroundColor : colors.white
    },
    logo : {
        alignItems : 'center',
        marginTop : responsiveHeight(70)
    },
    cardLogin : {
        marginHorizontal : 30,
        shadowColor: '#000',
        shadowOffset:  {
            width: 0,
            height: 2,
        },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
        elevation: 5,
        padding: 30,
        borderRadius : 10,
        marginTop : 10
    },
    register : {
        alignItems : 'center',
        marginTop: 10
    }, 
    textBlue : {
        fontSize : 18,
        fontFamily : fonts.primary.bold,
        color : colors.primary
    }
})