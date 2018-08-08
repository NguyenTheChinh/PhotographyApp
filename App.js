/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from "react-navigation";
import Login from "./src/login/Login.js";
import Register from "./src/register/Register.js";
import Home from "./src/home/Home.js"
import {YellowBox} from "react-native";

YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader"
]);

const App = createStackNavigator({
    LoginScreen: {
        screen: Login,
        navigationOptions: {
            // header: null
            headerTransparent: true
        }
    },
    RegisterScreen: {
        screen: Register,
        navigationOptions: {
            title: "Register",
            // headerStyle: {
            //     backgroundColor: "transparent"
            // },
            // headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: "#fff",
        }
    },
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            header:null
            // headerMode:"none"
        }
    }
}, {mode: "modal"});

export default App;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
