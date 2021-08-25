import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CardLiga } from '../../atoms'

const ListLiga = ({ligas})=>{
    return(
        <View style={styles.choose}>{
                ligas.map((i)=>{
                    return(
                        <CardLiga image={i.gambar} key={i.id}/>
                    )
                })
            }
           
        </View>
    )
}
export default ListLiga
const styles = StyleSheet.create({
    choose : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
      }
})