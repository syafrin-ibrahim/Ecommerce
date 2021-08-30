import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Gap } from '../../../components'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils'
const CardHistory = ({ orders })=>{
    console.log('data order : ',orders)
    return(
        <View style={styles.container}>
            <Text style={styles.date}>{orders.tanggalPemesanan}</Text>
               {
                   orders.order.map((item, index)=>{
                            { console.log('my=item', item.product.nama)}
                            return(
                                <View key={index} style={styles.history}>
                                    <Text style={styles.textBold}>{index+1}.</Text>
                                    <Image source={item.product.gambar[0]} style={styles.image} />
                                    <View style={styles.desc}>
                                        <Text style={styles.name}>{item.product.nama}</Text>
                                        <Text style={styles.price}>Rp. { numberWithCommas(item.product.harga)}</Text>
                                        <Gap height={10} />
                    
                                        <Text style={styles.textBold}>{item.jumlahPesan}</Text>
                                        <Text style={styles.textBold}>Total Harga Rp. {numberWithCommas(item.totalHarga)}</Text>
                                    </View>      
                                </View>    

                            )
                    
                   })
                   
               }
            <Gap height={10} />
            <View style={styles.describe}>
                <View style={styles.label}>
                    <Text style={styles.textBlue}>Status :</Text>
                    <Text style={styles.textBlue}>Ongkir (2-3) : </Text>
                    <Text style={styles.textBlue}>Total Harga : </Text>
                </View >
                <View style={styles.label}>
                <Text style={styles.textBlue}>{orders.status}</Text>
                <Text style={styles.textBlue}>Rp. 15.000</Text>
                <Text style={styles.textBlue}>Rp. {numberWithCommas(orders.totalHarga + 150000)} </Text>

                </View>
            </View>
        </View>
    )
}
export default CardHistory
const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.white,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
        padding : 15,
        borderRadius : 10,
        marginBottom : 20  
    },
    date : {
        fontFamily : fonts.primary.bold,
        fontSize : 14,
        marginTop : 5
    },
    history : {
        flexDirection : 'row',
        marginTop : 10
    },
    image : {
        width : responsiveWidth(66),
        height : responsiveHeight(66)
    },
    textBold : {
        fontFamily : fonts.primary.bold,
        fontSize : 11,
    },
    desc : {
        marginLeft : responsiveWidth(7)
    },
    name : {
        fontFamily : fonts.primary.bold,
        fontSize : 13,
        textTransform : 'capitalize'
    },
    price : {
        fontFamily : fonts.primary.regular,
        fontSize : 12,
    },
    describe :{
        flex : 1,
        flexDirection : 'row'
    },
    label : {
        flex: 1
    },
    textBlue : {
        fontSize : 14,
        fontFamily : fonts.primary.bold,
        textTransform : 'uppercase',
        textAlign : 'right',
        color : colors.primary
    }
    // alamat : {
    //     fontFamily : fonts.primary.regu,
    //     fontSize : 14,
    // },
    // link : {
    //     fontFamily : fonts.primary.regu,
    //     fontSize : 14,
    //     color : colors.primary,
    //     textAlign : 'right'
    // }
})