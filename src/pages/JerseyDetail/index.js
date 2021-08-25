import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button, ButtonIcon, CardLiga, Gap, Input, JerseySlider, Select } from '../../components';
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import { heightUi } from '../../utils';

const JerseyDetail = ({navigation, route})=>{
 console.log('params : ', route.params)
 
 const { nama, harga, gambar, berat, jenis, liga, ukuran} = route.params.jersey

 return (
        <View style={styles.page}>
            <View style={styles.button}> 
            <ButtonIcon icon="arrow-left" onPress={()=>navigation.goBack()}/>
            </View>
           <JerseySlider image={gambar}/>
          <View style={styles.container}>
              <View style={styles.logo}>
              <CardLiga image={liga.gambar} />

              </View>
              <View style={styles.desc}>
                     <Text style={styles.nama}>{nama}</Text>
                     <Text style={styles.harga}>Harga : Rp. {numberWithCommas(harga)}</Text>
                     <View style={styles.line} />
                     <View style={styles.wrapperone}>
                        <Text style={styles.jenis}>jenis : {jenis}</Text>
                        <Text style={styles.jenis}>berat : {berat}</Text>
                     </View>
                     <View style={styles.wrapperInput}>
                        <Input label="jumlah" fontSize={13} width={responsiveWidth(166)} height={responsiveHeight(33)} />
                        <Select label="pilih ukuran" fontSize={13}  width={responsiveWidth(166)} height={responsiveHeight(33)} datas={ukuran}/>
                     </View>
                     <Input textarea label="keterangan" fontSize={13} placeholder="isi jika ada keterangan name tag dan nomor punggung"/>  
                    <Gap height={10}/>
                   <Button title="checkout" icon="white-cart" title="checkout" padding={responsiveHeight(17)}/>
              </View>
            
          
          </View>
        </View>
      );
}

export default JerseyDetail
const styles = StyleSheet.create({
  page : {
    flex : 1,
    backgroundColor : colors.primary,
  },
  container : {
    position : 'absolute',
    bottom : 0,
    height : responsiveHeight(465),
    width: '100%',
    backgroundColor : colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius:40
  },
  button : {
      position : 'absolute',
      marginTop : 20,
      marginLeft : 20,
      zIndex : 1
  },
  desc : {
      marginHorizontal: 30
  },
  nama : {
    fontSize : RFValue(24, heightUi),
    fontFamily : fonts.primary.bold,
    textTransform : 'capitalize'
  },
  harga : {
    fontSize : RFValue(24, heightUi),
    fontFamily : fonts.primary.light,
  },
  logo : {
      alignItems : 'flex-end',
      marginRight : 30,
      marginTop : -30
  },
  line : {
      marginVertical : 7,
      borderWidth : 0.2
  },
  wrapperone : {
      flexDirection : 'row',
      justifyContent : 'space-between'
  },
  jenis : {
    fontSize : 13,
    fontFamily : fonts.primary.regular,
    marginRight : 30
  },
  wrapperInput : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  }
  

})