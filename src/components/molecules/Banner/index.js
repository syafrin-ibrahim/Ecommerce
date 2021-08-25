import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { Slider1, Slider2 } from '../../../assets'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'

const Banner = ()=>{
    const images = [Slider1, Slider2] 
    return(
        <View style={styles.container}>
           <SliderBox images={images} autoplay circleLoop sliderBoxHeight={responsiveHeight(132)}
              ImageComponentStyle={styles.slider} 
              dotStyle={styles.dot}
              dotColor={colors.primary}
              imageLoadingColor={colors.primary}/>
        </View>
    )
}
export default Banner
const styles = StyleSheet.create({
    container :{
        marginTop: -15,
        
    },
    slider : {
        borderRadius : 10,
        width : responsiveWidth(354)
    },
    dot : {
        width : 10,
        height : 5,
        borderRadius : 5
    }
})