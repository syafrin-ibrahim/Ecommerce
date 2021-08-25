import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardAddress from '../../components/atoms/CardAddress'
import { dummyOrder, dummyProfile } from '../../data'
import { colors, fonts, numberWithCommas } from '../../utils'

const Checkout = ()=>{
    const profile = dummyProfile
    const data = dummyOrder[0]
    return(
        <View style={styles.page}>
            <View style={styles.isi}>
                <Text style={styles.bold}> Apakah Benar Alamat ini</Text>
                <CardAddress profile={profile} />
                <View style={styles.txtHarga}>
                    <Text style={styles.bold}>Total Harga</Text>
                    <Text style={styles.bold}>{numberWithCommas(data.totalHarga)}</Text>
                </View>
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
})