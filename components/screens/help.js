import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";


const Help = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={style.bigBox}>
          
            <View style={style.description}>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
              <Text style={style.spacebetween}>
                hi am helpgvhvh jnkj jbgvgvgc gytccgh gvhkmkm hjbjknkkl
                bjhbkjbnlk junknkk kkk iopojubbbjkli iujhujuh ubhhhhhhhh ubucy
                nmbjn jnjinik ihhuhun ububuhyft jnjjjhvfyguin uigvi iuyhbuy
                uyyuilj uyguuy
              </Text>
            </View>
          
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({

  bigBox: {
    height: "100%",
  },
 
 
  spacebetween: {
    paddingBottom: 10,
  },
  heading: {
    paddingLeft: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    paddingLeft: 15,
    // paddingBottom: 10,
  },
 
});
export default Help;
