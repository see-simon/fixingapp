import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import { FlatList, Text } from "react-native";
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

import firebase from "./firebase";


const AvailableRooms = ({ navigation, route }) => {

  const { roomPictures, totalPrice, roomNum, n, h, rn, date1, date2,u } = route.params;

  console.log(" simon ", roomPictures)
  console.log("total price : ", totalPrice)
  console.log(roomNum)

  console.log(n, " see ", h, " see ", rn, "  date ", date1, " and " , date2)

  const [room, setUsers] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    let userInfo = [];

    db.collection("createRoom")
      .get()
      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setUsers(userInfo);
      });
  }, []);


  return (
    <>
      <SafeAreaView>
        <View style={style.cover}>

          <View style={style.header}>
            <Text style={style.text}>Available Rooms</Text>
          </View>


          <View style={{
            marginTop: 15, marginTop: "10%",
            marginLeft: 10,
            width: "95%",
            borderWidth: 1,
            padding: 5
          }}>
            <ScrollView horizontal={true}

            >
              {
                roomPictures.map((element) =>



                  <View style={{ padding: 5 }}>

                    <Avatar size={250} source={{ uri: element }} ></Avatar>


                  </View>

                )
              }

            </ScrollView>
          </View>


          <View style={style.price}>
            <View style={{justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"#6666ff"}}>Price : R {totalPrice}</Text>
            <Text style={{fontSize:18, color:"#6666ff"}}>Poom number : {roomNum}</Text>
            </View>
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#6666ff", marginTop: "5%" }}>More feartures</Text>
              <View style={{backgroundColor:"#eeeee4", padding:20, borderRadius:10, marginRight: 20,marginTop: "5%"}}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flexDirection: "column" }}>
                <Icon name="wifi" style={{ color: "#6666ff", marginRight: 20 }}></Icon>
                <Text>wifi</Text>
              </View>

              

              <View style={{marginLeft:"50%", flexDirection:"column"}}>
                <Icons name="car" style={{color:"#6666ff",  marginRight: 20}}></Icons>
                <Text>packing</Text>
              </View>

            </View>
            <View style={{ marginTop: 20, flexDirection:"column" }}>
                <Icon2 name="swimmer" style={{marginRight: 20,color:'#6666ff'}}></Icon2>
              <Text>swimming pool</Text>

            </View>

            </View>
          </View>

          <View style={{
            backgroundColor: "#6666ff",

            // alignContent: "center",
            // justifyContent: "center",
            marginLeft: "38%",
            marginTop: "5%",
            borderRadius: 10,
            padding: 10,
            width: "25%",
            height: "5%",
          }}>

            <TouchableOpacity onPress={() => navigation.navigate("Payment", { roomPictures, roomNum, totalPrice, n, h, rn, date1,date2,u })}>

              <Text style={{ alignSelf: "center", color: "#fff", textAlign: 'center', fontWeight: "bold" }}>Continue</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  cover: {
    height: "100%",
    backgroundColor: "white"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  details: {
    // flexDirection:"row",
    marginTop: "10%",
    marginLeft: 10,
    width: "95%",
    borderWidth: 1,
    padding: 5,
  },
  price: {
    marginLeft: 20,
    marginTop: 20,

  },
  text: {
    fontWeight: "bold",
    color: "#6666ff",
    fontSize: 18
  },
  RoomDetails: {
    flexDirection: "row",
  },
  pic: {
    marginTop: "10%",
    width: 200,
    height: 110,
    borderRadius: 20,
  },
  header: {
    marginTop: "20%",
    marginLeft: "35%",
  },
  picContainer: {
    width: "10%",
    marginTop: "0%",
  },
  container: {
    flexDirection: "column",
  },

});

export default AvailableRooms;