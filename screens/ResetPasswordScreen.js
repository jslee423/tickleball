import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';
import TextInputField from "../components/TextInputField";
import { emailValidator } from "../utils/InputValidators";

const ResetPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState({value: '', error: ''});

    const handleReset = () => {
        console.log('email:',email.value);

        const emailError = emailValidator(email.value);
        if (emailError) {
            setEmail({...email, error: emailError});
            return;
        }
        navigation.navigate('resetSent')
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Reset Password</Text>
            </View>
            
            <TextInputField
                placeholder='email'
                onChangeText={(email) => setEmail({value: email, error: ''})}
                value={email.value}
                error={!!email.error}
                errorText={email.error}
            />
            
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