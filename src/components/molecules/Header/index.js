import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import { Search } from '../../../assets'
import { colors, fonts, responsiveHeight } from '../../../utils'
import { Gap } from '../../atoms'
import ButtonIcon from '../../atoms/ButtonIcon'




const Header = ({navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.search}>
                    <Search />
                    <TextInput style={styles.input} placeholder="cari product" />
                </View>
                <Gap width={10} />
                 <ButtonIcon count={2} padding={10} onPress={()=>{ navigation.navigate('Cart')}}/>
                
                
                
            </View>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(125)
    },
    wrapper: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 30,

    },
    search: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingLeft: 10,
        borderRadius: 5,
        alignItems: 'center',
        
    },
    input : {
        fontSize : 16,
        fontFamily : fonts.primary.regular
    }

})