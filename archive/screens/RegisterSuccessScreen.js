import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';

const RegisterSuccessScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Account Created!</Text>
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => 
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'login'}]
                    })
                }
            >
                <Text style={styles.loginText}>LOGIN</Text>
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
    }
});

export default RegisterSuccessScreen;