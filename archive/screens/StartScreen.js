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
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => navigation.navigate('register')}
            >
                <Text style={styles.signUpText}>SIGN UP</Text>
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
        backgroundColor: '#008bf8'
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    signUpBtn: {
        width: '60%',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#04f167',
    },
    signUpText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default StartScreen;