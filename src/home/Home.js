import React, {Component} from "react";
import {
    StyleSheet,
    Platform,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput, ImageBackground
} from "react-native";
import NewFeedScreen from "./NewFeed.js";
import SearchScreen from "./Search.js";
import ProfileScreen from "./Profile.js";
import NotificationsScreen from "./Notifications.js";
import MessageScreen from "./Message.js";
import {createMaterialTopTabNavigator, Header} from "react-navigation"

const styles = StyleSheet.create({
    tabIcon: {
        height: '120%',
        width: '120%',
        alignItems: "center"
    },
    tabBar: {
        backgroundColor: 'black'
    }
});

const HomeNavigation = createMaterialTopTabNavigator({
    NewFeedScreen: {
        screen: NewFeedScreen,
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => {
                let src;
                if (focused) {
                    src = require("../images/icn_app_bar_feed_active.png");
                } else {
                    src = require("../images/icn_app_bar_feed.png");
                }
                return <Image source={src} style={styles.tabIcon}/>
            }
        }
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => {
                let src;
                if (focused) {
                    src = require("../images/icn_app_bar_search_active.png");
                } else {
                    src = require("../images/icn_app_bar_search.png");
                }
                return <Image source={src} style={styles.tabIcon}/>
            }
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => {
                let src;
                if (focused) {
                    src = require("../images/icn_app_bar_profile_active.png");
                } else {
                    src = require("../images/icn_app_bar_profile.png");
                }
                return <Image source={src} style={styles.tabIcon}/>
            }
        }
    },
    NotificationsScreen: {
        screen: NotificationsScreen,
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => {
                let src;
                if (focused) {
                    src = require("../images/icn_app_bar_notifications_active.png");
                } else {
                    src = require("../images/icn_app_bar_notifications.png")
                }
                return <Image source={src} style={styles.tabIcon}/>
            }
        }
    },
    MessageScreen: {
        screen: MessageScreen,
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => {
                let src;
                if(focused){
                    src = require("../images/icn_app_bar_camera_active.png");
                } else {
                    src = require("../images/icn_app_bar_camera.png");
                }
                return <Image source={src} style={styles.tabIcon}/>
            }
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,   // khong hien thi title tab tren top navigation
        showIcon: true,     // hien thi icon top navigation
        style: {
            backgroundColor: 'black',
            height: Header.HEIGHT
        },
        indicatorStyle:{
            backgroundColor: 'transparent'
        }
    }
});

export default HomeNavigation;

// export default class Home extends Component<Props> {
//     render() {
//         return (<View/>)
//     }
// }