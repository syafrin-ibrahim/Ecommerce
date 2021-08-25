import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { CartItem } from '../../atoms'

const ListCart = ({carts})=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                {
                    carts.map((cart)=>{
                        return(
                            <CartItem item={cart} key={cart.id}/>
                        )
                    })
                }
              </View>
        </ScrollView>
    )
}

export default ListCart
const styles = StyleSheet.create({
    container : {
        marginVertical : 10
    }
})