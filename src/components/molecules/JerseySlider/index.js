import React, { useState } from 'react'
import { StyleSheet, View, Text, Modal } from 'react-native'
import {SliderBox } from 'react-native-image-slider-box'
import ImageViewer from 'react-native-image-zoom-viewer'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
const JerseySlider = ({image})=>{

    const [openImage, setOpenImage] = useState(false)
    const [previewImage, setPreviewImage] = useState(false)
    const preview = (index)=>{
        setOpenImage(true)
        setPreviewImage([{
            url : '',
            props : {
                source : image[0]
            }
        }])
    }
    
    return(
        <View>
            <SliderBox 
            images={image}
            circleLoop sliderBoxHeight={responsiveHeight(430)}
              ImageComponentStyle={styles.slider} 
              dotStyle={styles.dot}
              dotColor={colors.primary}
              imageLoadingColor={colors.primary}
              onCurrentImagePressed={
                  (e)=>preview(e)
              }
            />
            <Modal visible={openImage} transparent={true}>
                <ImageViewer imageUrls={previewImage} 
                backgroundColor={colors.primary}
                onClick={()=>{
                    setOpenImage(false)
                }
                }
                enableSwipeDown
                onSwipeDown={()=>{
                    setOpenImage(false)
                }
                }/>
            </Modal>
        </View>
    )
}

export default JerseySlider
const styles = StyleSheet.create({
    slider : {
        marginTop: 25,
        width : responsiveWidth(344)
    },
    dot : {
        marginTop : -50,
        width : 10,
        height : 5,
        borderRadius : 5
    }
})