import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Foundation";
import Pictures from "./array";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU",
};

const Book = ({ navigation }) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Successfully booked",
      " Check Booking Details for payment",

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={style.image}
          >
            <View style={style.crownContainer}>
              <Icon
                name="crown"
                style={style.crown}
                size={80}
                color="#CA730D"
              />
            </View>
            <View style={style.backBox}>
              <View style={style.bedContainer}>
                {/* <Image
              style={style.interiorPics}
              size={10}
              source={require("../images/bed.png")}
            /> */}
              </View>

              <View style={style.HistoryBox}>
                <Text>Price for 1 Night, 2 Adult</Text>
                <Text>Double Room</Text>
                <View style={style.room}>
                  <Text>1 Bed </Text>
                  <Text> Room 2 </Text>
                  <Text> R500 </Text>
                </View>
              </View>
              <View style={style.backAndBookNow}>
                <TouchableOpacity
                  onPress={createTwoButtonAlert}
                  style={style.bookNow}
                >
                  <Text>Book now</Text>
                </TouchableOpacity>

                <Text
                  style={style.back}
                  onPress={() =>
                    navigation.navigate("home", {
                      name: "home",
                    })
                  }
                >
                  Back
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};
const style = StyleSheet.create({
  backBox: {
    height: "75%",
    width: "95%",
    marginLeft: 10,
    //backgroundColor:"red",
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  backAndBookNow: {
    flexDirection: "row",
    // backgroundColor: "red",
    marginTop: "20%",
  },
  back: {
    backgroundColor: "#CA730D",
    width: "30%",
    height: "24%",
    borderRadius: 100,
    paddingLeft: 35,
    paddingTop: 11,

    marginTop: "15%",
  },
  room: {
    flexDirection: "row",
  },
  bookNow: {
    backgroundColor: "#CA730D",
    width: "45%",
    height: "24%",
    borderRadius: 100,
    paddingLeft: 16,
    paddingTop: 11,
    marginLeft: "35%",
    marginTop: "26%",
  },
  interiorPics: {
    width: 100,
    height: 100,
  },
  HistoryBox: {
    backgroundColor: "#ebeced",
    shadowColor: 100,
    borderRadius: 50,
    width: "90%",
    height: "40%",
    marginLeft: 15,
    marginTop: 10,
    paddingLeft: 60,
    paddingTop: 60,
  },
  crown: {
    width: 100,
    height: 100,
    backgroundColor: "white",

    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,

    paddingLeft: 20,
  },
  crownContainer: {
    flexDirection: "row",
    padding: 10,
    marginTop: 25,
  },
  heading: {
    width: "40%",
    marginLeft: "25%",
    marginTop: 40,
    marginBottom: 25,
    //backgroundColor:"red",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    height: "100%",
  },
});

export default Book;
