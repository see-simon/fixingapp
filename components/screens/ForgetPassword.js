import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, ToastAndroid } from 'react-native'
import * as yup from 'yup'


import { Image ,ImageBackground} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import { Value } from 'react-native-reanimated'
import Home from './Home'
import { auth } from './firebase'




const ForgetPassword = ({ navigation }) => {

    const [isPasswordShow, setPasswordShow] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const validate = yup.object({
        email: yup.string().required().min(8),
        password: yup.string().required().min(8),
    })


    const [email, setEmail] = useState();
    // console.log(email," email") 
      
  

    const sendPasswordReset =  () => {
        auth.sendPasswordResetEmail(email)
        .then(function() {
        // Email sent.
        console.log("email sent")
        navigation.navigate('Login')
       
        // ToastAndroid.show("link sent to email", ToastAndroid.SHORT)
        })
        .catch(function(error) {
        // An error happened.
        console.log(error)
        });
        alert("link sent to email")
        
      };

   
  

    return (
        <>
            


                <View style={style.container}>

              
                <Image   style={{alignSelf:"center", width:"120%", height:"40%", borderBottomRightRadius:300, marginBottom:0  }} source={require("../images/images.jpg")} />

                    <View style={style.backBox}>

                        {/* put form here NB */}
                        <View style={style.description}>
                            <Text>
                                Enter your email for password recorvery
                            </Text>
                        </View>


                        <ScrollView >
                            <View style={style.inputContainer}>
                                <View style={style.inputView}>
                                    <Icon style={style.icon} name="mail" color="#6666ff" size={20} />

                                    <TextInput

                                        style={style.TextInput}

                                        placeholder="Email."
                                        placeholderTextColor="#003f5c"
                                        onChangeText={(email) => setEmail(email)}
                                    />
                                </View>



                            </View>
                      

                        


                            <TouchableOpacity style={{alignItems:"center"}} onPress={sendPasswordReset}>  
                                <Text style={style.verify}>
                                    Varify
                                </Text>
                            </TouchableOpacity>

                            </ScrollView>
                        


                    </View>
                   


                    </View>
               
           

        </>
    )
}

const style = StyleSheet.create({

    container: {
         backgroundColor: "white",
        height: "100%",
    },
    inputContainer:{

  alignItems:"center",
        justifyContent:"center",
        marginTop:45
    },
    description:{

        //backgroundColor:"red",
        // padding:"12%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:45

    },
  
    


   
    icon: {
        paddingLeft: 20
    },
    inputView: {
        backgroundColor: "#EFEFEF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        // marginBottom: 10,
        // paddingTop: 7,
        // marginLeft: 50,
        flexDirection: "row",
        alignItems:"center",
     

        
        
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },


   
    backBox: {
        height: "55%",
        width: "95%",
        marginLeft: 10,
        elevation: 4,
        marginTop: 10,
        //backgroundColor:"red",

        borderRadius: 10,
        backgroundColor: "white"

    },

   
    verify: {
        
        backgroundColor:"#6666ff",
        color:"white",
        height: "20%",
        marginBottom:"40%",
        borderRadius:50,
        width:"40%",
       
      
       textAlign:"center",
        paddingTop:15,
        marginTop:50
       
    },
  
  

})
export default ForgetPassword
