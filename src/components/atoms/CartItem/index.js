 import React from 'react'
 import { StyleSheet, View, Text, Image } from 'react-native'
import { IconDelete } from '../../../assets'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils'
import Gap from '../Gap'

 const CartItem = ({item})=>{
     return(
         <View style={styles.container}>
             <Image source={item.product.gambar[0]} style={styles.image}/>
             <View style={styles.desc}>
                <Text style={styles.name}>{item.product.nama}</Text>
                <Text style={styles.text}>Price : { item.product.harga }</Text>
                <Gap height={responsiveHeight(14)}/>
                <Text style={styles.bold}>Order : { item.jumlahPesan } </Text>
                <Text style={styles.bold}>Size : {item.ukuran}</Text>
                <Text style={styles.bold}>total : { numberWithCommas(item.totalHarga)}</Text>
                <Text style={styles.bold}>Keterangan</Text>
                <Text style={styles.bold}>{item.keterangan}</Text>
             </View>
             <View style={styles.icon}>
                 
                <IconDelete />
             </View>
            
         </View>
     )
 }

 export default CartItem
 const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginTop : 15,
        alignItems : 'center',
        justifyContent : 'space-around',
        backgroundColor : colors.white,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        marginHorizontal: 40,
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderRadius : 15
    },
    image : {
        height : responsiveHeight(88),
        width : responsiveWidth(77),
        resizeMode : 'contain'
    },
    desc : {
        marginHorizontal : 10
    },
    icon : {
        position : 'absolute',
        top : 45,
        right : 5,
        paddingHorizontal : 5,
        alignItems : 'flex-end',
        
    },
    name : {
        flexWrap : 'wrap-reverse',
        fontSize : 13,
        fontFamily : fonts.primary.bold,
        textTransform : 'capitalize'
    },
    text : {
        fontSize : 11,
        fontFamily : fonts.primary.regular,
      
    },
    bold : {
        fontSize : 11,
        fontFamily : fonts.primary.regular,
        
    }
 })