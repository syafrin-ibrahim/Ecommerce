import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CardJersey } from '../../atoms'

const ListJersey = ({jerseys, navigation})=>{
    return(
        <View style={styles.container}>
            {
                jerseys.map((item)=>{
                    return(
                        <CardJersey key={item.id} jersey={item} navigation={navigation}/>
                    )
                })
            }
        </View>
    )
}
export default ListJersey
const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
       
    
    }
})