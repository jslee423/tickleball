import { useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import * as SecureStore from 'expo-secure-store';
import Logo from '../assets/images/doublesPaddle.png';
import TextInputField from "../components/TextInputField";
import { emailValidator, passwordValidator } from "../utils/InputValidators";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        const userInfo = {
            email: email.value,
            password: password.value,
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

        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setEmail({...email, error: emailError});
            setPassword({...password, error: passwordError})
            return;
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

            <TextInputField
                placeholder='email'
                onChangeText={(email) => setEmail({value: email, error: ''})}
                value={email.value}
                error={!!email.error}
                errorText={email.error}
            />
            <TextInputField
                placeholder='password'
                onChangeText={(password) => setPassword({value: password, error: ''})}
                secureTextEntry={true}
                value={password.value}
                error={!!password.error}
                errorText={password.error}
            />

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