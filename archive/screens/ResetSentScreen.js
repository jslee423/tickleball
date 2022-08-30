import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import Logo from '../assets/images/doublesPaddle.png';
import { Fontisto } from '@expo/vector-icons'; 

const ResetSentScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>Reset Instructions Sent</Text>
            </View>

            <Text style={styles.linkText}>Check your email and follow the instructions to reset your password.</Text>

            <View>
                <TouchableOpacity style={styles.backToView} onPress={() => navigation.navigate('login')}>
                    <Fontisto name="arrow-return-left" size={24} color="black" />
                    <Text style={styles.backToLogin}>Back to Login</Text>
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
        marginBottom: 20
    },
    header: {
        marginBottom: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    linkText: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 50,
        marginBottom: 30
    },
    backToLogin: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 8,
        marginTop: 4
    },
    backToView: {
        flexDirection: 'row'
    }
});

export default ResetSentScreen;