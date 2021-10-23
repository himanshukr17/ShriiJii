import {View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';

import {AsyncStorage, StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Cart from './screens/Claims/Cart';
import {NavigationContainer} from '@react-navigation/native';
import CustomerDetail from './screens/Customer/CustomerDetail';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import LoginScreen from './screens/Onboarding/login';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/Onboarding/Signup';
import OTP from './screens/Onboarding/Otp';
import Password from './screens/Onboarding/password';
import Home from './screens/dashboard/Home';
import showCustomer from './screens/Customer/showCustomer';
import ShowOrderDetails from './screens/Claims/OrderDetail';
import Checkout from './screens/CreateOrder/Main';
import ProductView from './screens/Product/ProductView';
import Addcustomer from './screens/Customer/Addcustomer';
import ShowClaims from './screens/Claims/MyOrders';
import Changepassword from './screens/Profile/Changepassword';
import Profile from './screens/Profile/Profile';
import AddClaim from './screens/Claims/AddClaim';
import Stocks from './screens/Stocks/stock';
import Wishlist from './screens/Claims/Wishlist';
import SideDrawer from "./components/Drawer"
import Typography from "./components/Typography/Typography";
import Order from './screens/Claims/Order';
const Drawer = createDrawerNavigator();

function Routes(props) {
  // props.initCustomers();

  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        hidden={false}
        translucent
      />
      {/* <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        hidden={false}
        translucent
      /> */}
      <NavigationContainer>
        <Drawer.Navigator 
        drawerContent={(props)=>(<SideDrawer {...props}/>)}
        headerMode={false}>
                    <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                    <Drawer.Screen name="Wishlist" component={Wishlist} />
            <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Checkout" component={Checkout} />
          <Drawer.Screen name="Order" component={Order} />

          <Drawer.Screen name="Cart" component={Cart} />
          <Drawer.Screen name="ProductDetail" component={ProductDetail} />
          {/* <Drawer.Screen name="Password" component={Password} />
                <Drawer.Screen name="Otp" component={OTP}/>
              <Drawer.Screen name="Signup" component={SignUp} /> */}
          <Drawer.Screen name="showCustomer" component={showCustomer} />
          <Drawer.Screen name="Add customer" component={Addcustomer} />
          <Drawer.Screen
            name="Show Order Detail"
            component={ShowOrderDetails}
          />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Add Claims" component={AddClaim} />
          <Drawer.Screen name="My Orders" component={ShowClaims} />
          <Drawer.Screen name="Change Password" component={Changepassword} />
          <Drawer.Screen name="Customer Details" component={CustomerDetail} />
          <Drawer.Screen name="SignUp" component={SignUp} />    
          <Drawer.Screen name="Stocks" component={Stocks} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
