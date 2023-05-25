import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, TextInput } from "react-native";
// import firebase from "firebase";
import firebase from './firebase'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

//moment(date).format('YYYY-MM-DD')

const History = () => {
  const db = firebase.firestore();
const _db =firebase.database();
  const [history, setHistory] = useState([]);
  const [name,setN] =useState();
  const [code, setCode] = useState('');
  const auth = firebase.auth();
  
  const uid = auth.currentUser.uid;

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
          // userId:a_[x].userId
        })}

      setHistory(historyInfo)
  
    })
   
  }, []);

  
  console.log(code," codeeee")

  const deleteBooking = (id) => {
     _db.ref('booking'+ uid).child(id).remove();

    // bookingRef.remove();
    
  };

  

  return (
    <SafeAreaView>
      <View style={style.container}>
        <TextInput
          style={style.textInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />

        <ScrollView>
          {history.map((element) => (
            // <Text>{moment(element.date).format('YYYY-MM-DD')}</Text>
            
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#6666ff",
                marginHorizontal: 20,
                marginVertical: 5,
                elevation: 2,
                borderRadius: 5,
                padding: 8,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ color: "#fff" }}>
                  Location: {element.n}
                </Text>
                <Text style={{ color: "#fff" }}>
                  Hotel Name: {element.h}
                </Text>
                

                {/* <Text style={{color: '#fff'}}>Date: {moment(element.date).format('DD MMM YYYY')} </Text> */}
                <Text style={{ color: "#fff" }}>Check out date : {moment(element.date2).format("DD MMM YYYY")}</Text>
                <Text style={{ color: "#fff" }}>Check out date : {moment(element.date1).format("DD MMM YYYY")}</Text>

                <Text style={{ color: "#fff" }}>Room: {element.rn} </Text>
                <Text style={{ color: "#fff" }}>
                  Total Price: R{element.totalPrice}
                </Text>
              </View>
              <View style={{}}>
                <TouchableOpacity
                onPress={()=>deleteBooking(element.key)}
                  
                  style={{
                    backgroundColor: "red",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },

  itemStyle: {
    padding: 10,
  },
  historyBox: {
    width: "90%",
    backgroundColor: "#6666ff",
    height: "25%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,

    paddingLeft: "10%",
    margin: 10,
  },
  back: {
    flexDirection: "row",
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 30,
    margin: 10,
    borderColor: "#0000",
    backgroundColor: "#FFFFFF",
  },
});

export default History;
