//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import queryString from "query-string";
import { loadStripe } from "@stripe/stripe-js";

//screens
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPasswordSuccessFul from './components/screens/ForgetPasswordSuccessFul';
import DashBoard from './components/screens/DashBoard';


// 




// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import GetStarted from './components/screens/GetStarted';
import Login from './components/screens/Login';
import ProfileUpdated from './components/screens/ProfileUpdated';
import Registration from './components/screens/registration';





import Profile from './components/screens/Profile';

import History from './components/screens/History';




import Map from './components/screens/Map';
import BookingDetails from './components/screens/BookingDetails';
import Book from './components/screens/book';
import { View ,StyleSheet} from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import AvailableRooms from './components/screens/AvailableRooms';
// import BookingSuccess from './components/screens/bookingSuccess';
import Icon from 'react-native-vector-icons/FontAwesome'
import Helps from 'react-native-vector-icons/Feather'


import Bookmark from 'react-native-vector-icons/Entypo'


import users from './components/screens/classes'
import Payment from './components/screens/Payment';
import { auth } from './components/screens/firebase';
// import Help from './components/screens/Help';
import Home from './components/screens/Home';
import Searchroom from './components/screens/searchroom';
// import PaymentStyle from './components/screens/PaymentStyle';
import Booking from 'react-native-vector-icons/Entypo'
import paymentSuccess from './components/screens/paymentSuccess';
import Help from './components/screens/help'
import {ToastAndroid} from 'react-native'


export default function App() {


  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const signOut =() =>{
    auth.signOut();
    navigation.navigate('Login')
ToastAndroid.show("Succussfully loged out ", ToastAndroid.SHORT)
}


  function DrawerRoutes({navigation}) {
    return (
     
        <Drawer.Navigator DrawerContent={props => <drawerContent{...props} />}>
        

          <Drawer.Screen  name="Home" component={Home} options={{drawerIcon:({color,size})=>(
            <Icons name='home' color='blue' size={20} />
            )}}/>

<Drawer.Screen  name="Bookings" component={BookingDetails} options={{drawerIcon:({color,size})=>(
            <Bookmark name='bookmark' color='blue' size={20} />
          )}}/>
         
          <Drawer.Screen  name="Profile" component={Profile} options={{drawerIcon:({color,size})=>(
            <Icons name='profile' color="#6666ff" size={20} />
          )}}/>
        

<Drawer.Screen  name="History" component={History} options={{drawerIcon:({color,size})=>(
            <Icon name='history' color="#6666ff" size={20} />
          )}}/>

<Drawer.Screen  name="help" component={Help} options={{ drawerIcon:({color,size})=>(
            <Helps name='help-circle' color='blue' size={20} />
            )}}/>

{/* <Drawer.Screen  name="logout" getComponent={signOut}  options={{ headerShown:false ,drawerIcon:({color,size})=>(
            <Icons name='logout' color="#6666ff" size={20} />
          )}}/> */}
           
        </Drawer.Navigator>
    
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Get Started" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetPasswordSuccessFul" component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="Dashboard" component={DashBoard} />


        <Stack.Screen name="paymentSuccess" component={paymentSuccess} />
        {/* <Stack.Screen name="help" component={help} /> */}
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProfileUpdated" component={ProfileUpdated} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name='AvailableRooms' component={AvailableRooms}/>
        <Stack.Screen name='Payment' component={Payment}/>
        {/* <Stack.Screen name='PaymentStyle' component={PaymentStyle}/> */}
       


        
        
        {/* <Stack.Screen name="Home" component ={Home}/> */}

         <Stack.Screen name ="home" component ={DrawerRoutes}/> 

        <Stack.Screen name ="searchroom" component ={Searchroom}/>
        <Stack.Screen name = "Map" component={Map}/>
        <Stack.Screen name ="BookingDetails" component={BookingDetails}/>
        <Stack.Screen name='Book' component={Book}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({

  container: {
      
      height: "100%",
  },
  textColours:{
      color:"black",
  },
  image: {
      flex: 1,
      justifyContent: "center",
    },
  OK:{
      marginTop:25,
      backgroundColor:"#c2c4c3",
      borderRadius:40,
      height:"20%",
      width:"50%",
      paddingLeft:70,
      color:"white",
  
      paddingTop:8,
      marginBottom: 80,
      marginLeft: 85,
  },
  descripion:{
      marginLeft:"35%",
      paddingTop:30,
      paddingBottom:30


  },
  crownContainer: {
      flexDirection: "row"
  },
  done:{
      backgroundColor:"#c2c4c3",
      borderRadius: 100,
      padding:"20%",
     
      marginLeft:"20%",
      marginTop:80,
      width:201,
      height:200,
      marginBottom:20


  },

  crown: {
      width: 100,
      height: 100,
      backgroundColor: "white",

      borderRadius: 100,
      alignContent: "center",
      justifyContent: "center",
      marginLeft: 11,
      marginTop: 50,
      padding: 20

  },
  heading: {

      width: "40%",
      marginLeft: "25%",
      marginTop: 90,
      marginBottom: 25,
      //backgroundColor:"red",

     
      fontSize: 18,
      fontWeight: "bold",
      color: "white"

  },
  backBox: {
      height: "75%",
      width: "95%",
      marginLeft: 10,
      padding: 10,
      marginTop: 10,
      //backgroundColor:"red",

      borderRadius: 10,
      backgroundColor: "white"

  },
  bed1: {
      height: "70%",
      width: "90%",
      // backgroundColor:"white",
      borderRadius: 100,
      marginLeft: 18,


  },
  getStarted: {
      backgroundColor: "#CA730D",
      padding: 15,
      alignContent:"center",
      paddingLeft:"12%",
  
      marginTop: 35,
      marginLeft: "35%",
      borderRadius: 60,
      width: "30%"

  }

})