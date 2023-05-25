import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import PaymentStyle from "./PaymentStyle";

const paymentScreen =()=> {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51KX8PlFCgzobWk2QMKzkudYNtmdjFf5IpdEup5Rnrk2eoCMsXblcMXot3gvBcqkdo94UHFUE4EQ0l8RmlKZbesT900gUyPvyi6">
        <PaymentStyle/>
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default paymentScreen