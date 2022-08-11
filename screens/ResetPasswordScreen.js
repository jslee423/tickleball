import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';

const ResetPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        console.log('email:',email);

        navigation.navigate('resetSent')
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Reset Password</Text>
            </View>
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
            
            <Text style={styles.linkText}>You will receive an email with password reset link.</Text>
            
            <TouchableOpacity
                style={styles.sendLink}
                onPress={() => handleReset()}
            >
                <Text style={styles.sendLinkText}>SEND RESET LINK</Text>
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
    logo: {
        height: 200,
        width: 200,
        marginBottom: 20
    },
    inputView: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#04f167',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        height: 40,
        marginBottom: 10,
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    linkText: {
        fontSize: 10
    },
    sendLink: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#008bf8'
    },
    sendLinkText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    header: {
        marginBottom: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default ResetPasswordScreen;