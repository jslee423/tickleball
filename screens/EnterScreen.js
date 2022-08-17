import { View, Image, StyleSheet, TouchableOpacity, Text, PanResponder, Alert } from 'react-native';
import { useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import Logo from '../assets/images/doublesPaddle.png';

const EnterScreen = ({navigation}) => {
    const view = useRef();

    const playScreen = () => {
        navigation.navigate('SinglesDoubles')
    }

    const isLeftSwipe = ({ dx }) => dx < - 200;
    const isRightSwipe = ({ dx }) => dx > + 200;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
        view.current
            .rubberBand(1000)
            .then((endState) => 
            console.log(endState.finished ? 'finished' : 'canceled')
            );
        },

        onPanResponderEnd: (e, gestureState) => {
        console.log('pan responder end', gestureState);
        if (isLeftSwipe(gestureState)) {
            Alert.alert(
            'Would you like us to help you keep score?',
            );
        } else if (isRightSwipe(gestureState)) {
            Alert.alert('Press the Play button below!')
        }
        }
    })
    return (
        <Animatable.View
            animation='fadeInDownBig'
            duration={2000}
            delay={1000}
            ref={view}
            {...panResponder.panHandlers}
        >
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('singlesDoubles')}
                >
                    <Text style={styles.loginText}>START PLAYING</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: '100%'
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
    }
});

export default EnterScreen;