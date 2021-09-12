import React, { useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Banner, Button, Gap, Header, ListJersey, ListLiga } from '../../components';
import { dummyJersey, dummyLigas } from '../../data';
import { colors, fonts } from '../../utils';
import { getUser } from '../../actions/UserAction';

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const { dataUser } = useSelector(state => state.userReducer)
  const data = dummyLigas
  const datajersey = dummyJersey


  useEffect(() => {
    dispatch(getUser()),
      console.log('data user =>', dataUser)
  }, [])
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header navigation={navigation} />
        <Banner />
        <View style={styles.liga}>
          <Text style={styles.label}>Pilih Liga {dataUser.email}</Text>
          <ListLiga ligas={data} />
        </View>
        <View style={styles.jersey}>
          <Text style={styles.labelJersey}>Silahkan Pilih
            <Text style={styles.labelBold}>Jersey</Text>Yang anda inginkan</Text>
          <ListJersey jerseys={datajersey} navigation={navigation} />
          <Button title="Lihat Semua" paddingButton={7} />
        </View>
        <Gap height={100} />
      </View>
    </ScrollView>
  );
}


export default Home
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  liga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular
  },
  jersey: {
    marginTop: 10,
    marginHorizontal: 30
  },
  labelJersey: {
    fontSize: 18,
    fontFamily: fonts.primary.regular
  },
  labelBold: {
    fontSize: 18,
    fontFamily: fonts.primary.bold
  }


})