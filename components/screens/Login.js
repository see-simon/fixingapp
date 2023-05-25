import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import * as yup from "yup";
// import { Formik } from 'formik'

import { Image, ImageBackground } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";
import { Value } from "react-native-reanimated";
import Home from "./Home";
import users from "./classes";
import { auth } from "./firebase";
import { useEffect } from "react";
import {ToastAndroid} from 'react-native'

// const image = {
//   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
// };

const Login = ({ navigation }) => {
  // const [isSelected, setIsSelected] = useState(false)
  // const validate = yup.object({
  //     email: yup.string().required().min(8),
  //     password: yup.string().required().min(8),
  // })

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    


  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("home")
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
      ToastAndroid.show("Succussfully loged in ", ToastAndroid.SHORT)
  };

  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
         
        <Image   style={{alignSelf:"center", width:"120%", height:"40%", borderBottomRightRadius:300, marginBottom:0  }} source={require("../images/sheets.jpg")} />

            <View style={style.backBox}>
              {/* put form here NB */}
              <Text style={style.heading}>Login</Text>

              
                <View style={style.inputContainer}>

                  <ScrollView>
                  <View style={style.inputView}>
                    <Icon
                      style={style.icon}
                      name="mail"
                      color="#6666ff"
                      size={20}
                    />

                    <TextInput
                      style={style.TextInput}
                      autoCapitalize="none"
                      placeholder="Email"
                      placeholderTextColor="#000000"
                      onChangeText={(text) => setEmail(text)}
                    />
                  </View>

                  <View style={style.inputView}>
                    <Icon
                      style={style.icon}
                      name="lock"
                      color="#6666ff"
                      size={20}
                    />
                    <TextInput
                      style={style.TextInput}
                      placeholder="Password"
                      placeholderTextColor="#000000"
                      secureTextEntry={true}
                      onChangeText={(text) => setPassword(text)}
                    />
                  </View>
                   </ScrollView>
                </View>

                <View style={style.logAndFogot}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ForgetPassword", {
                        name: "ForgetPassword",
                      })
                    }
                  >
                    <Text style={style.forgot_button}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={handleLogin}
                    // onPress={() =>
                    //   navigation.navigate("home", { name: "home" })
                    // }
                    style={style.login}
                  >
                    <Text style={{ color: "#fff",textAlign:'center', fontWeight: "bold" }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text style={style.line}></Text>

                <View style={style.createAcc}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Registration", {
                        name: "Registration",
                      })
                    }
                  >
                    <Text>Do you have an
                     account?</Text>
                  </TouchableOpacity>
                </View>
             
            </View>
          
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"white",
      flex:-2
  },
 

  createAcc: {
    
    marginLeft: 30,
  },

  crownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    paddingLeft: 20,
  },
  inputView: {
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
    width: "90%",
    height: 45,
    marginBottom: 20,
    paddingTop: 0,
    marginLeft: 20,
    marginTop: 30,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  crown: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,

    padding: 20,
  },
  heading: {
    width: "40%",
    marginLeft: "25%",
    marginTop: 30,
    
    //backgroundColor:"red",
    fontSize: 22,
    fontWeight: "bold",
    color: "#6666ff",
  },
  backBox: {
    height: "50%",
    width: "95%",
    marginLeft: 10,

    marginTop: 10,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
  },
  forgot_button: {
    marginRight: 40,
    marginTop: 10,
  },
  login: {
    backgroundColor: "#6666ff",
    marginLeft: 45,

    borderRadius: 10,
    padding: 10,
    width: "100%",
    height: "100%",
  },
  logAndFogot: {
    flexDirection: "row",
    //  backgroundColor:"blue",
    height: "10%",
    // flex:0,
    // justifyContent:'center',
    // alignItems:"center",
    marginLeft: 30,
    marginTop: 20,
  },
  
  forgot: {
    padding: 1,

    marginTop: 10,
    paddingLeft: 60,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Login;
