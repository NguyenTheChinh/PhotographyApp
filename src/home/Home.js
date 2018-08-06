import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput, ImageBackground
} from "react-native";
import NewFeed from "NewFeed";
import Search from "Search";
import Profile from "Profile";
import Notifications from "Notifications";
import Message from "Message";
import {createMaterialTopTabNavigator} from "react-navigation"

export const HomeNavigation = createMaterialTopTabNavigator({

});

export default class Home extends Component<Props>{
    render(){
        return(<View/>)
    }
}

const style = StyleSheet.create({

});