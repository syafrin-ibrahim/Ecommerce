// In App.js in a new project

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Splash, Profile, Product, JerseyDetail, Cart, Checkout, EditProfile, ChangePassword, History, Login, Register1, Register2 } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTab } from '../components';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={props => <MainTab {...props}/>}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="Profile" component={Profile} />
     
    </Tab.Navigator>
  );
}


const Router = ()=> {
  return (
    
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={Tabs}  options={{headerShown: false}}/>
        <Stack.Screen name="JerseyDetail" component={JerseyDetail} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ title : 'Edit Profile'}} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title : 'Change Password'}} />
        <Stack.Screen name="History" component={History} options={{ title : 'History Pemesanan'}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register1" component={Register1} options={{headerShown: false}} />
        <Stack.Screen name="Register2" component={Register2} options={{headerShown: false}} />
        
      </Stack.Navigator>
    
  );
}

export default Router;