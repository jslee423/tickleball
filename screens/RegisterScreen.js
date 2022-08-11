import { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';

const RegisterScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        const userInfo = {
            firstName,
            lastName,
            password,
            email
        };
        console.log(JSON.stringify(userInfo));

        navigation.navigate('registerSuccess')
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='first name'
                    placeholderTextColor='#ddddff'
                    autoCapitalize='none'
                    onChangeText={(name) =>setFirstName(name)}
                    value={firstName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='last name'
                    placeholderTextColor='#ddddff'
                    autoCapitalize='none'
                    onChangeText={(name) =>setLastName(name)}
                    value={lastName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor='#ddddff'
                    autoCapitalize='none'
                    onChangeText={(email) =>setEmail(email)}
                    value={email}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    placeholderTextColor='#ddddff'
                    autoCapitalize='none'
                    onChangeText={(password) =>setPassword(password)}
                    value={password}
                />
            </View>
            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => handleRegister()}
            >
                <Text style={styles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.login}>Login</Text>
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
    header: {
        marginBottom: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    logo: {
        height: 200,
        width: 200,
        marginBottom: 10
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
    signUpBtn: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#008bf8'
    },
    signUpText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    login: {
        fontWeight: 'bold',
        color: '#219ebc'
    }
});

export default RegisterScreen;