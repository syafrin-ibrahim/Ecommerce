import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Router from './router'
import { Text, View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({

})

export default App