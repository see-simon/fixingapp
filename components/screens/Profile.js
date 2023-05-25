import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ImagePickerIOS,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";

import React, { useState, useEffect } from "react";
import { Button, Image, Platform, ToastAndroid } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";

import { Value } from "react-native-reanimated";
import Icons from "react-native-vector-icons/Entypo";
import Iconss from "react-native-vector-icons/FontAwesome";
import firebase from "./firebase";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";

import { auth } from "./firebase";

const Profile = ({ navigation }) => {
  const [isPasswordShow, setPasswordShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const validate = yup.object({
    email: yup.string().required().min(8),
    password: yup.string().required().min(8),
  });

  // picture

  const [image, setImage] = useState("../images/bed.png");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    _db.ref("profilePicture" + userId)
    .push({
      result
    })

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //

  // const [name , setName]= useState();
  // const [surname, setSurname] = useState();

 

  //create profile

  // const db = firebase.firestore()

  // const createProfile = (e) => {
  //   // e.preventDefault();
  //   // let uid = e.target.id
  //   db.collection("/createProfile/")
  //     .add({
  //       // Url: url,
  //       // HotelName: hotelName,
  //       // Location: location,

  //       Name : name,
  //       Surname : surname,
  //     })
  //     .then((res) => {
  //       console.log("prfile created");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //     ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT)
  // };

  const auth = firebase.auth();
  const _db = firebase.database();
  //to get user details
  const userId = auth.currentUser.uid;
  //variable
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  //use effect to grab data from the database

  useEffect(() => {


    _db.ref("/users/" + userId).on("value", (value) => {
      setName(value.val().name);
      setSurname(value.val().surname);
      setEmail(value.val().email);
    });
  }, []);

  const update = () => {
    _db.ref("/users/"+ userId).update({
      name: name,
      surname: surname,
    });
  };
 
  console.log("user id ", userId, name);

  const signOut =() =>{
    auth.signOut();
    navigation.navigate('Login')
ToastAndroid.show("Succussfully loged out ", ToastAndroid.SHORT)
}

// grap the profilr picture

const [picture, setPicture]=useState('')

useEffect(()=>{

  _db.ref("profilePicture" + userId)
  .on("value", (value)=>{
    setPicture(value.val().type)

  })

})

console.log(picture,"profile pic")
  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.backBox}>
          
     
          <TouchableOpacity  onPress={signOut}>
                <Text style={{ color: "white",width:"20%", backgroundColor:"#6666ff", borderBottomLeftRadius:10,
                 textAlign: "center", alignContent:"flex-start", marginLeft:"80%" , padding:2 }}>
                  logout
                </Text>
              </TouchableOpacity>
             
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 90,
                // flexDirection:"row"
                
              }}
            >
              

              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    backgroundColor: "#eeeee4",
                    borderWidth:1,
                    borderRadius: 100,
                    margin:2
                  }}
                />
              )}
              <Iconss
                name="camera"
                size={20}
                color={"#6666ff"}
                onPress={pickImage}
                marginTop={5}
              />
               
            </View>

            <ScrollView style={style.inputContainer}>
              <View style={{ backgroundColor: "#eeeee4", padding: 10 }}>
                <Text
                  style={{ fontSize: 20, color: "#6666ff", paddingRight: -10 }}
                >
                  User Details
                </Text>

                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Name: </Text>
                  <Text>{name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Surname: </Text>
                  <Text>{surname}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Email: </Text>
                  <Text>{email}</Text>
                </View>
              </View>

              <View style={{marginTop:20}}>
                <View style={style.inputView}>
                  <Icons
                    style={style.icon}
                    name="user"
                    size={20}
                    color={"#6666ff"}
                  />

                  <TextInput
                    style={style.TextInput}
                    placeholder="First name"
                    placeholderTextColor="black"
                   onChangeText={(name) => setName(name)}
                  />
                </View>

                <View style={style.inputView}>
                  <Icons
                    style={style.icon}
                    name="user"
                    size={20}
                    color={"#6666ff"}
                  />
                  <TextInput
                    style={style.TextInput}
                    placeholder="Surname"
                    placeholderTextColor="black"
                    
                    onChangeText={(surname) => setSurname(surname)}
                  />
                </View>
              </View>
            </ScrollView>
           

            <View style={style.createAcc}>
            
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate("ProfileUpdated", {
                //     name: "ProfileUpdated",
                //   })
                // }
                 onPress={update}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Update Profile
                </Text>
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
    backgroundColor: "white",
    height: "100%",
  },

  logout: {
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 100,
    padding: 20,

    height: "40%",
  },

  createAcc: {
    backgroundColor: "#6666ff",

    // marginTop: 25,

    borderRadius: 10,
    width: "37%",
    height: "10%",
    marginBottom: 40,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: "35%",
  },

  icon: {
    paddingLeft: 20,
  },
  inputView: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    
    height: 45,
    marginBottom: 20,
    paddingTop: 7,
    // marginLeft: 50,
    flexDirection: "row",

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  backBox: {
    height: "85%",
    width: "95%",
    marginLeft: 10,

    marginTop: 10,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
    // alignContent:"center",
    // justifyContent:"center"
  },
});
export default Profile;
