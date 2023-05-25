import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,ImageBackground,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

import Pictures from "./array";
import firebase from "./firebase";
import moment from "moment";



const BookingDetails = ({ navigation }) => {

  

  const createTwoButtonAlert = () =>
  Alert.alert(
    "cancel booking",
    " are you sure you want to Cancel?",
    
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );


  //cancel booking 

  const db = firebase.firestore();
  const _db =firebase.database();
  const auth = firebase.auth();
  
  const uid = auth.currentUser.uid;
  const [history, setHistory] = useState([])


  useEffect(() => {
    
    _db.ref('booking' + uid).on('value' ,snap =>{
      let historyInfo = [];
      const a_ = snap.val();

      for (let x in a_){
        historyInfo.push({
          key:x,
          totalPrice:a_[x].totalPrice,
          date2:a_[x].date2,
          n:a_[x].n,
          rn:a_[x].rn,
          h:a_[x].h,
         

        })}

      setHistory(historyInfo)
    
      // console.log(historyInfo,"vghjvhbvh")
    })
  }, []);

  //

  const markTodoComplete = (uid) => {
    const newTodosItem = todos.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: true };
      }
      return item;
    });

    setTodos(newTodosItem);
  };
   

  return (
    <View style={style.container}>

        


        <ScrollView>
          {history.map((element) =>
        



            <View style={{
                flexDirection:"row", 
                backgroundColor:"#6666ff", 
                marginHorizontal: 20, 
                marginVertical: 5, 
                elevation: 2,
                borderRadius: 5,
                padding: 8,
                justifyContent: 'space-between'
              }}>

              <View>
                <Text style={{color: '#fff'}}>Location:  {element.n}</Text>
                <Text style={{color: '#fff'}}>Hotel Name: {element.h}</Text>
                {/* <Text style={{color: '#fff'}}>Status: {element.Status}</Text> */}


                <Text style={{color: '#fff'}}>Check in date: {moment(element.chechin).format('DD MMM YYYY')} </Text>
                <Text style={{color: '#fff'}}>Check out date: {moment(element.chechout).format('DD MMM YYYY')} </Text>
                <Text style={{color: '#fff'}}>Room: {element.rn} </Text>
                <Text style={{color: '#fff'}}>Total Price: R{element.totalPrice} </Text>
              </View>
              <View style={{}}>
                <TouchableOpacity 
                   
                  style={{backgroundColor: 'red', padding: 5, borderRadius: 5}}>
                  <Text style={{color: '#fff'}}>Cancel booking</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>





      </View>
  );
};
const style = StyleSheet.create({
  cover: {
    backgroundColor:"white",
    height: "100%",
  },
  
  BookingDetailsText: {
    marginLeft: "30%",
    
    
  },
  
  arrow:{
    paddingTop: 15,
  },
  HistoryBox: {
    backgroundColor: "#ebeced",
    shadowColor: 100,
    borderRadius: 50,
    width: "90%",
    height: "40%",
    marginLeft: 15,
    marginTop: -135,
    paddingLeft: 60,
    paddingTop: 60,
  },
  cancel: {
    backgroundColor: "#c2c4c3",
    marginLeft: 14,
    borderRadius: 90,
    padding: 10,
    paddingLeft: 30,
    width: "40%",
    height: "100%",
  },
  room:{
    flexDirection:"row"
  },
  back: {
    backgroundColor: "#c2c4c3",
    marginLeft: 45,
    borderRadius: 90,
    padding: 10,
    paddingLeft: 39,
    width: "40%",
    height: "100%",
  },
  cancelbookAndBack: {
    flexDirection: "row",
    marginTop: "14%",
  },
  direction: {
    flexDirection: "row",
    margin:5,
    marginTop:-5
  },
  directionText: {
    marginLeft: 25,
    paddingTop: 20,
  },
  directionIcon: {
    //   backgroundColor: "red"
    marginLeft: 70,
  },
  search: {
    backgroundColor: "#d4d3cf",
    marginLeft: 50,
    borderRadius: 50,
    paddingLeft: 50,
    marginTop: 15,

    width: "70%",
    height: "5%",
  },
  picContainer: {
    //  backgroundColor:"red",
  },
  heading: {
    // color:"white",

    marginLeft: "30%",
    fontWeight: "bold",
  },
  picView: {
    //  backgroundColor:"red",
    height: "40%",
    paddingTop: 0,
    marginTop: 20,
    backgroundColor: "white",
  },

  HotelPic: {
    height: "30%",
    marginLeft: "8%",
    // backgroundColor: "blue",
    width: "85%",
    borderRadius: 30,
  },
  line: {
    marginBottom: 0,
    // backgroundColor:"red",
    marginLeft: "13%",
    marginBottom: 30,
    marginTop: 10,
    color: "#d1d0cd",
  },
  backBox: {
    paddingTop: 7,
    height: "92%",
    width: "95%",
    marginLeft: 10,

    marginTop: 35,
    //backgroundColor:"red",

    borderRadius: 10,
    backgroundColor: "white",
  },

  container: {
    backgroundColor: "white",
    height: "100%",
  },
  crownContainer: {
    flexDirection: "row",
  },

  crown: {
    width: "25%",
    height: "70%",
    backgroundColor: "white",

    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,
    marginTop: 20,
    padding: 5,
  },
  heading: {
    width: "40%",
    marginLeft: "25%",
    marginTop: 90,
    marginBottom: 25,
    //backgroundColor:"red",

    fontWeight: "bold",
    color: "white",
  },
  textColours: {
    color: "white",
  },
  backBox: {
    height: "70%",
    width: "95%",
    marginLeft: 10,
    padding: 10,
    marginTop: 10,
    //backgroundColor:"red",

    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default BookingDetails;
