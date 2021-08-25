import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Home, HomeActive, Shirt, ShirtActive, User, UserActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({isFocused, options, onLongPress, onPress, label })=>{
    const Icon = ()=>{
        if(label === 'Home'){
            return isFocused ? <HomeActive /> : <Home />
        } 
        if(label === 'Product'){
          return isFocused ? <ShirtActive /> : <Shirt />
        } 
        if(label === 'Profile'){
            return isFocused ? <UserActive /> : <User />
        } 

        return <Home />
    }
    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
            >
        <Icon />        
        <Text style={styles.text(isFocused)}>
            {label}
        </Text>
        </TouchableOpacity>

    )
}   

export default TabItem

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center'
    },
    text : (isFocused) => ({
        color : isFocused ? colors.white : colors.secondary,
        fontSize : 11,
        marginTop : 4,
        fontFamily : fonts.primary.bold
        
    })
})
