import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput,
    ImageBackground
} from "react-native";
import {Header} from "react-navigation";

export default class Login extends Component<Props> {

    _onPressSignIn(){
        this.props.navigation.navigate("HomeScreen");
    }

    _onPressRegister() {
        this.props.navigation.navigate("RegisterScreen");
    }

    render() {
        return (
            <View style={style.container}>
                <ImageBackground source={require("../images/back_ground_register.jpg")}
                                 style={style.backgroundImage}>
                    <View style={{height: Header.HEIGHT}}/>
                    <View style={style.logo}>
                        <Image source={require("../images/Logo.png")}/>
                    </View>
                    <View style={style.form}>
                        <TextInput
                            style={style.form_input}
                            placeholder="Username"
                            placeholderTextColor="white"
                        />
                        <View style={{flex: 0.1}}/>
                        <TextInput
                            style={style.form_input}
                            placeholder="Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                        />
                        <View style={{flex: 0.1}}/>
                        <TouchableHighlight
                            style={style.signin_button}
                            underlayColor="#049fd8"
                            onPress={this._onPressSignIn.bind(this)}
                        >
                            <Text style={style.signin_text}>Sign In</Text>
                        </TouchableHighlight>
                        <View style={{flex: 0.1}}/>
                        <TouchableHighlight
                            // underlayColor="#049fd8"
                            style={style.register_button}
                            onPress={this._onPressRegister.bind(this)}
                        >
                            <Text style={style.register_text}>Register</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={style.bottom}/></ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#00AFF0",
        alignItems: "center",
        justifyContent: "center"
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    logo: {
        alignItems: "center",
        flex: 1.5
    },
    form: {
        flex: 2,
        alignItems: "center"
    },
    bottom: {
        flex: 1
    },
    form_input: {
        width: 250
    },
    signin_button: {
        height: 35,
        width: 250,
        backgroundColor: "rgba(0, 166, 226, 0.8)",
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        borderColor: "#00A6E2"
    },
    signin_text: {
        color: "#fff",
        textAlign: "center"
    },
    register_button: {
        alignSelf: "center"
    },
    register_text: {
        color: "#fff",
        fontStyle: "italic",
        textDecorationLine: "underline"
    }
});
