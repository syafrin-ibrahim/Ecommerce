import { Dimensions } from "react-native"
import { heightUi, widthUi } from "../constant"

export const responsiveWidth = (width)=>{
    return Dimensions.get('window').width * width / widthUi
}

export const responsiveHeight = (height)=>{
    return Dimensions.get('window').height * height / heightUi 
}   