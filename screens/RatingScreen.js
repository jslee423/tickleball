import { useState } from 'react';
import { Rating } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, } from 'react-native';


const RatingScreen = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerThree, setPlayerThree] = useState(''); 
    const [playerFour, setPlayerFour] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                styles={styles.input}
                placeholder='PlayerOne'
                placeholderTextColor='#003f5c'
                onChangText={(playerOne) => setPlayerOne(playerOne)}
            />
            <Rating
                startingValue={3}
                imageSize={30}
                alignItems='flex-start'
                style={{paddingVertical:5}}
            />

        </View>
  

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    inputView: {
        backgroundColor: '#d0f4de',
        borderRadius: 30,
        width: '50%',
        height:20,
        marginBottom: 20,
        alignItems: 'center'
    },
    input: { 
        flex: 1,
    }
})

export default RatingScreen;