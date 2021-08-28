import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { dummyMenu, dummyProfile } from '../../data';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { heightUi } from '../../utils/constant';
import { ListMenu } from '../../components/molecules';

const Profile = ({navigation})=>{
  const profile = dummyProfile
  const menus = dummyMenu
  console.log('menusaya', menus)
    return (
        <View style={styles.page}>
          <View style={styles.container}>
            <Image source={profile.avatar} style={styles.foto}/>
            <View style={styles.profile}>
              <Text style={styles.name}>{profile.nama}</Text>
              <Text style={styles.desc}>No, HP{profile.hp}</Text>
              <Text style={styles.desc}>{profile.alamat} {profile.kota}</Text>
            </View>
            <View style={styles.menu}>

                <ListMenu  menus={menus}  navigation={navigation}/>
            </View>
          </View>
        </View>
      );
}

export default Profile
const styles = StyleSheet.create({
  page : {
    flex : 1,
    backgroundColor : colors.primary,
  },
  container : {
    position : 'absolute',
    bottom : 0,
    height : responsiveHeight(680),
    width: '100%',
    backgroundColor : colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius:40
  },
  foto : {
    width : responsiveWidth(150),
    height : responsiveWidth(150),
    borderRadius : 75,
    alignSelf : 'center',
    backgroundColor : 'yellow',
    marginTop: -75
  },
  profile : {
    alignItems : 'center'
  },
  name : {
    fontSize : RFValue(24, heightUi),
    fontFamily : fonts.primary.bold
  },
  desc : {
    fontFamily : fonts.primary.regular,
    fontSize : RFValue(18, heightUi)
  },
  menu : {

  }

})