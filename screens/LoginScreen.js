import { useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import * as SecureStore from 'expo-secure-store';
import Logo from '../assets/images/doublesPaddle.png';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        const userInfo = {
            email,
            password,
            remember
        };
        console.log(JSON.stringify(userInfo));

        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    email,
                    password
                })
            ).catch((error) => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) => console.log('Could not delete user info', error));
        }

        navigation.reset({
            index: 0,
            routes: [{name: 'tab'}]
        });
    };

    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);

            if (userinfo) {
                setEmail(userinfo.email);
                setPassword(userinfo.password);
                setRemember(true);
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor='#ddddff'
                    autoCapitalize='none'
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    placeholderTextColor='#ddddff'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('reset')}>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.checkBoxView}>
                <Checkbox
                    style={styles.checkbox}
                    value={remember}
                    onValueChange={setRemember}
                    color={remember ? '#04f167' : undefined}
                />
                <Text>Remember Me</Text>
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => handleLogin()}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        height: 200,
        width: 200,
        marginBottom: 30
    },
    inputView: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#04f167',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        height: 40,
        marginBottom: 20,
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    forgotPass: {
        height: 30,
        marginBottom: 30
    },
    loginBtn: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#008bf8'
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    signUp: {
        fontWeight: 'bold',
        color: '#219ebc'
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        marginHorizontal: 8
    }
});

export default LoginScreen;