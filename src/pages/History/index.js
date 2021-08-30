import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListHistory from '../../components/molecules/ListHistory'
import { dummyOrder } from '../../data'
import { colors } from '../../utils'

const History = ({datas})=>{
    const dataOrders = dummyOrder
    return(
        <View style={styles.page}>
          
            <ListHistory datas={dataOrders}/>
        </View>
    )
}

export default History
const styles = StyleSheet.create({
    page : {
        flex: 1,
        backgroundColor : colors.white
    }
})