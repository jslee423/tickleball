import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Logo from '../assets/images/doublesPaddle.png';

const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate('login')}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
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
    logo: {
        height: 200,
        width: 200,
        marginBottom: 30
    },
    loginBtn: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#d0f4de'
    },
    signUpBtn: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#d0f4de',
        borderWidth: 2
    }
});

export default StartScreen;