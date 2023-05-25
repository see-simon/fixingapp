import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";
import Lottie from 'lottie-react-native';


const GetStarted = ({ navigation }) => {
  return (
    <>
      <View style={style.container}>
       
         <ImageBackground source={require("../images/picture.jpg")} style={{height:"100%"}}>
            {/* //<Image style={style.bed1} source={require("../images/bed.png")} /> */}
            <Lottie source={require('../lottie/69160-welcome-blue.json')} autoPlay loop style={{height:100, width:100, marginTop:"20%"}}/>
              <Text style={{textAlign:"center", color:"white", fontSize:50, marginTop:"15%" , fontWeight:"bold"}}>To Happy Stay </Text>

             

            <TouchableOpacity
              onPress={() => navigation.navigate("Login", { name: "Login" })}
            >
              <View style={style.GetStartedText}>
                <Text style={{color:'#fff'}}>Get Started</Text>
              </View>
            </TouchableOpacity>
            </ImageBackground>
      
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  GetStartedText: {
    backgroundColor: "#6666ff",
    width: "30%",
    height: "10%",
    color:'white',
    borderRadius: 10,
    paddingLeft: 17,
    //   paddingTop:5,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: "35%",
    marginTop: "100%",
    color:'#fff'
  },
  
  
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
export default GetStarted;
