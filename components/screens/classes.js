
import Reacts from "react";

import { auth } from "./firebase";


class users{


handleSignOut ({navigation}){
    auth
    .signOut()
    .then(()=>{
        navigation.navigate("Login", { name: "Login" })
    })
    .catch(()=>alert(error.message));

}

    

    //  handleLogin (){
    //     auth.signInWithEmailAndPassword(email,password)
    //     .then(userCredentials =>{
    //       const user = userCredentials.user;
    //       console.log("registered with email and password")
          
    //     })
    //     .catch(error =>alert(error.message))
    //  }

}
export default new users();




