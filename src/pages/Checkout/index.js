import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {CardAddress, Select, Gap, ButtonIcon} from '../../components'
import { dummyOrder, dummyProfile } from '../../data'
import { colors, fonts, numberWithCommas, responsiveHeight } from '../../utils'

const Checkout = ({ navigation })=>{
    const profile = dummyProfile
    const data = dummyOrder[0]
    const ekspedisi = []
    return(
        <View style={styles.page}>
            <View style={styles.isi}>
                <Text sc> Apakah Benar Alamat ini</Text>
                <CardAddress profile={profile} />
                <View style={styles.txtHarga}>
                    <Text style={styles.bold}>Total Harga</Text>
                    <Text style={styles.bold}>{numberWithCommas(data.totalHarga)}</Text>
                </View>
                <Select label="ekspedisi" datas={ekspedisi}/>
                <Gap height={10}/>
                <Text style={styles.bold}> Biaya Ongkir </Text>
                <View style={styles.ongkir}>
                    <Text style={styles.text}> Untuk Berat : {data.berat} kg </Text>
                    <Text style={styles.bold}> 2-3 hari </Text>
                </View>
                <View style={styles.ongkir}>
                    <Text style={styles.text}> Estimasi Waktu : </Text>
                    <Text style={styles.bold}> Rp. {numberWithCommas(15000)} </Text>
                </View>
            </View>
                <View style={styles.footer}>
                    <View style={styles.txtHarga}>
                    <Text style={styles.bold}>Total Harga</Text>
                    <Text style={styles.bold}>{numberWithCommas(data.totalHarga+15000)}</Text>
                    </View>
                <ButtonIcon onPress={()=>{ navigation.navigate('Checkout') }} title="Bayar" padding={responsiveHeight(10)} type="text-icon" icon="white-cart" color={colors.primary} />
                </View>
        </View>
    )
}
export default Checkout
const styles = StyleSheet.create({
    page :{
        backgroundColor : colors.white,
        flex : 1,
        paddingTop : 30,
    },
    isi : {
        paddingHorizontal : 30
    },
    bold : {
        fontSize : 18,
        fontFamily : fonts.primary.bold

    },
    txtHarga : {
        marginVertical : 20,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    text : {
        fontSize : 18,
        fontFamily : fonts.primary.regular
    },
    ongkir : {
        flexDirection : 'row',
        justifyContent : 'space-between'
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
})