import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Router from './router'
import { Text, View , StyleSheet} from 'react-native'

const App = ()=>{
    return (

      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  
})

export default App