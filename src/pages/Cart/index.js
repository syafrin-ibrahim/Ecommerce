import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { ButtonIcon } from '../../components'
import ListCart from '../../components/molecules/ListCart'
import { dummyOrder } from '../../data'
import { colors, fonts, numberWithCommas } from '../../utils'

const Cart = ({navigation})=>{
    const data = dummyOrder[0]
    console.log('order pertama', data.order)
    return(
            <View style={styles.page}>
                <ListCart carts={data.order} />
                <View style={styles.footer}>
                    <View style={styles.txtHarga}>
                    <Text style={styles.bold}>Total Harga</Text>
                    <Text style={styles.bold}>{numberWithCommas(data.totalHarga)}</Text>
                    </View>
                <ButtonIcon onPress={()=>{ navigation.navigate('Checkout') }} title="Checkout" padding={10} type="text-icon" icon="white-cart" color={colors.primary} />
                </View>
            </View>
    )
}

export default Cart
const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white
    },
    footer : {
        paddingHorizontal : 30,
        backgroundColor : colors.white,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        paddingBottom : 30,
        
    },
    txtHarga : {
        marginVertical : 20,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    bold : {
        fontFamily : fonts.primary.bold,
        fontSize : 20
    }
})