import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Avatar } from "react-native-elements";
import firebase from "./firebase";
import Icon from "react-native-vector-icons/FontAwesome5";

const Home = ({ navigation }) => {
  /////

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    let userInfo = [];
    db.collection("createHotel")

      .get()

      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setFilteredDataSource(userInfo);
        setMasterDataSource(userInfo);
        // console.log(id)
      });
  }, []);

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View>
        <View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              borderWidth: 1,
              padding: 2,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("searchroom", {
                  ItemId: item.id,
                  name: item.Location,
                  hotel: item.HotelName,
                  url: item.Url,
                  roomPic: item.roomUrl,
                  roomNum: item.RoomNumber,
                  roomMoney: item.RoomPrice,
                })
              }
            >
              <Avatar size={150} source={{ uri: item.Url }}></Avatar>
            </TouchableOpacity>
            <View style={style.price}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 12,
                }}
              ></Text>
              <Text>Name: {item.HotelName}</Text>
              <Text style={{ marginBottom: 20 }}>
                Location: {item.Location}
              </Text>
              <View style={{ flexDirection: "row", width:"45%", justifyContent: "space-between" }}>
                <Text>Direction:</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Map')}>
                  <Icon style={{color:"#6666ff", height:50}} name="directions"></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  //

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Location
          ? item.Location.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  ////
  const [hotels, setHotels] = useState([]);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const _db = firebase.database();
  //to get user details
  const userId = auth.currentUser.uid;
  //variable
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  //use effect to grab data from the database
  useEffect(() => {
    _db.ref("/users/" + userId).on("value", (value) => {
      setName(value.val().name);
      setSurname(value.val().surname);
    });
  }, []);

  console.log("user id ", userId, name);

  useEffect(() => {
    let userInfo = [];
    db.collection("createHotel")

      .get()

      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });

        setHotels(userInfo);
        // console.log(id)
      });
  }, []);

  // search

  // useEffect(() => {
  //   _db.ref("/users/" + userId).on("value", (value) => {
  //     setName(value.val().name);

  //   });
  // }, []);

  // console.log(name,"uddated")

  const [queries, setQuery] = useState([]);

  const loc = db.collection("createHotel");

  // console.log(hotels," SIMOM")

  const Search = () => {
    console.log("RUUNING", queries);
    if (queries) {
      loc
        .where("Location", "==", queries)
        .get()
        .then(async (querySnapshot) => {
          let results = [];

          await querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "============= => ", doc.data());
            results.push(doc.data());
          });

          setHotels(results);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } else {
      loc
        .where("location", "==", "limpopo")
        .get()
        .then(async (querySnapshot) => {
          await querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data.id, "============= => ", doc.data);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  };

  return (
    <>
      <SafeAreaView style={style.cover}>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text style={{ color: "#6666ff", fontWeight: "bold", fontSize: 20 }}>
            Welcome {surname} {name}
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Search"
            style={{ borderWidth: 1 }}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          ></TextInput>
        </View>
        <View>
          <Text style={{ fontSize: 20, margin: 10, color: "gray" }}>
            Popular hotels
          </Text>
        </View>

        <ScrollView>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  cover: {
    height: "100%",
    backgroundColor: "#fff",
  },
  icon: {},
  details: {
    flexDirection: "row",
    marginTop: "1%",
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#c2c2c2",
    padding: 10,
    borderStyle: "solid",
  },
  price: {
    marginLeft: 20,
    // marginTop:-20
  },
});
export default Home;
