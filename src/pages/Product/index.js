import React from 'react'

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Banner, Button, Gap, Header, ListJersey, ListLiga } from '../../components';
import { dummyJersey, dummyLigas } from '../../data';

import { colors, fonts } from '../../utils';
 
const Product = ()=>{
  
    const data = dummyLigas
    const datajersey = dummyJersey
    return (
      <>
      
       
        <Header />
            <View style={styles.liga}>
      
            <ListLiga ligas={data}/>
            </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
           
            <View style={styles.jersey}>
              <ListJersey jerseys={datajersey}/>
              
            </View>
            <Gap height={100} />
        </View>
       </ScrollView>
       </>
      );
}

export default Product
const styles = StyleSheet.create({
  
  page : {
    flex: 1,
    backgroundColor : colors.white
  },
  liga : {
    marginHorizontal : 30,
    marginTop: -20,
  },
  label : {
    fontSize: 18,
    fontFamily: fonts.primary.regular
  },
  jersey : {
    marginTop: 10,
    marginHorizontal: 30
  },
  labelJersey : {
    fontSize : 18,
    fontFamily: fonts.primary.regular
  },
  labelBold : {
    fontSize : 18,
    fontFamily: fonts.primary.bold
  }


})