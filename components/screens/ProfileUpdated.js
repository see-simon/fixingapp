import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,ImageBackground } from 'react-native'



import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Foundation'
import  Icons from 'react-native-vector-icons/MaterialIcons'



const ProfileUpdated = ({ navigation }) => {

    return (
        <>
            <SafeAreaView >

                <View style={style.container}>
             
                    


                    <View style={style.backBox}>

                        <Text>uddate</Text>
                        
                      
                    </View>

                   

                </View>
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({

    container: {
        
        height: "100%",
        backgroundColor:"white"
    },
   
    backBox: {
        height: "75%",
        width: "95%",
        marginLeft: 10,
        padding: 10,
        marginTop: 10,
        //backgroundColor:"red",

        borderRadius: 10,
        backgroundColor: "white"

    },
    

})
export default ProfileUpdated
