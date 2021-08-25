import React from 'react'
import {View , StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Cart, IconArrowLeft, IconShopingCartWhite } from '../../../assets'
import { colors } from '../../../utils';
import Gap from '../Gap';

const ButtonIcon  = ({icon, count, padding, onPress, type, title,color})=>{
    const Icon = ()=>{
        if(icon === 'cart' ){
            return <Cart />
        }
        if(icon === 'arrow-left'){
            return <IconArrowLeft />
        }
        if (icon === 'white-cart'){
            return <IconShopingCartWhite />
        }
        return <Cart />
    }

    if (type == 'text-icon'){
        return (
            <TouchableOpacity onPress={onPress}>
                     <View style={styles.container(padding,color)}>
                     <Icon/>   
                     <Gap width={10} />
                     <Text style={styles.textIcon}>{title}</Text>                
                </View>
            </TouchableOpacity>
               
        )
    }
    return (
        <TouchableOpacity onPress={onPress}>
                 <View style={styles.container(padding,color)}>
               <Icon />
               {
                   count && (
                       <View style={styles.notif}>
                            <Text style={styles.text}>{count}</Text>
                       </View>    
                   )
               }
            </View>
        </TouchableOpacity>
           
    )
}

export default ButtonIcon
const styles = StyleSheet.create({
    container : (padding,color)=> ({
        flexDirection : 'row',
        backgroundColor: color ? color : colors.white,
        justifyContent: 'center',
        borderRadius: 5,
        padding : padding,
    
    }),
    notif : {
        right : 5,
        top: 5,
        position : 'absolute',
        backgroundColor : 'red',
        padding: 3,
        borderRadius: 3,
    },
    text : {
        fontSize : 8,
        color: colors.white
    },
    textIcon : {
        fontSize : 18,
        color: colors.white
    },
   
})