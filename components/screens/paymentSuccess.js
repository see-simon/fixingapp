import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Lottie from 'lottie-react-native';


const paymentSuccess = ({ navigation }) => {

//  const {totalPrice} = route.params;

//  console.log(totalPrice,"the")

  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.backBox}>
            <View
              style={{
                alignItems: "center",
                justifyContent:"center",
                alignContent:"center",
                borderRadius: 150,
                backgroundColor: "#6666ff",
                marginTop:200,
                width:"35%",
                height:"20%",
              }}
            >
              {/* <Icon name="done" size={80} color="white">
                {" "}
              </Icon> */}

              <Lottie source={require('../lottie/50465-done.json')} autoPlay loop style={{height:500, width:350}}/>


            </View>
            <Text style={style.description}>
              {" "}
              Successfully paid check your bookings for
              confirmation
            </Text>

            <TouchableOpacity style={{backgroundColor:"#6666ff", width:"20%", height:"8%", alignItems:"center", marginTop:10, borderRadius:10 }}
              onPress={() => navigation.navigate("Home", { name: "Home" })}
            >
              <Text style={{ color: "white", fontSize:18,fontWeight:"900" ,marginTop:10}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: "center",
    // flex: 1,
    // backgroundColor:"#CA730D",
    height: "100%",
  },

  description: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  backBox: {
    height: "95%",
    width: "95%",
    
    margin:10,
    marginTop: 30,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
  },

  ok: {
    backgroundColor: "#6666ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,

    marginTop: 20,
    padding: 20,
  },
  roundButton1: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "lightgreen",
    marginLeft: 120,
    marginTop: 20,
  },
});

export default paymentSuccess;
