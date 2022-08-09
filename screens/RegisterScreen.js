import { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='name'
                    placeholderTextColor='#003f5c'
                    onChangeText={(name) =>setName(name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    placeholderTextColor='#003f5c'
                    onChangeText={(email) =>setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    placeholderTextColor='#003f5c'
                    onChangeText={(password) =>setPassword(password)}
                />
            </View>
            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => navigation.navigate('register')}
            >
                <Text>SIGN UP</Text>
            </TouchableOpacity>
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
        borderColor: '#d0f4de',
        borderWidth: 2,
        borderRadius: 30,
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
        backgroundColor: '#d0f4de'
    }
});

export default RegisterScreen;