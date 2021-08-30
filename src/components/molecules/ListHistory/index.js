import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import CardHistory from '../../atoms/CardHistory'

const ListHistory = ({datas})=>{
    return(
       <ScrollView showsVerticalScrollIndicator={false }>
            <View style={styles.container}>
                {
                    datas.map((item)=>{
                        return(
                            <CardHistory orders={item} key={item.id} />
                        )
                    })
                }
            </View>
       </ScrollView>
    )
}
export default ListHistory
const styles = StyleSheet.create({
    container : {
        marginHorizontal : 30,
        marginTop : 30
    }
})