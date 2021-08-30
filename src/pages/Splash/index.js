import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Logo, LogoUtama } from '../../assets'
import { colors } from '../../utils'
const Splash = ({navigation})=>{
    useEffect(() => {
        
            setTimeout(() => {
                navigation.replace('Tabs')
            }, 3000);
    
    }, [])
    return(
        <View style={styles.page}>
            <LogoUtama />
        </View>
    )
}

export default Splash
const styles = StyleSheet.create({
    page : {
        flex: 1,
        alignItems :  'center',
        justifyContent : 'center',
        backgroundColor : colors.white
    }
})
