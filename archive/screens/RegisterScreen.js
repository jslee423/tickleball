import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';
import TextInputField from "../components/TextInputField";
import { nameValidator, emailValidator, passwordValidator } from "../utils/InputValidators";

const RegisterScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState({value: '', error: ''});
    const [lastName, setLastName] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const [email, setEmail] = useState({value: '', error: ''});

    const handleRegister = () => {
        const userInfo = {
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value,
            email: email.value
        };
        console.log(JSON.stringify(userInfo));

        const firstNameError = nameValidator(firstName.value);
        const lastNameError = nameValidator(lastName.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (firstNameError || lastNameError || emailError || passwordError) {
            setFirstName({...firstName, error: firstNameError});
            setLastName({...lastName, error: lastNameError});
            setEmail({...email, error: emailError});
            setPassword({...password, error: passwordError})
            return;
        }
        navigation.navigate('registerSuccess')
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Account</Text>
            </View>
            <TextInputField
                placeholder='first name'
                onChangeText={(name) => setFirstName({value: name, error: ''})}
                value={firstName.value}
                error={!!firstName.error}
                errorText={firstName.error}
            />
            <TextInputField
                placeholder='last name'
                onChangeText={(name) =>setLastName({value: name, error: ''})}
                value={lastName.value}
                error={!!lastName.error}
                errorText={lastName.error}
            />
            <TextInputField
                placeholder='email'
                onChangeText={(email) =>setEmail({value: email, error: ''})}
                value={email.value}
                error={!!email.error}
                errorText={email.error}
            />
            <TextInputField
                placeholder='password'
                onChangeText={(password) =>setPassword({value: password, error: ''})}
                value={password.value}
                error={!!password.error}
                errorText={password.error}
            />
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