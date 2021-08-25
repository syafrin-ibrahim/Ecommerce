import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CardMenu } from '../../atoms'

const ListMenu = ({menus})=>{
    return (
        <View>
            {
                menus.map((menu)=>{
                   return  <CardMenu menu={menu} key={menu.id}/>
                })
            }
        </View>
    )
}

export default ListMenu
const styles = StyleSheet.create({})