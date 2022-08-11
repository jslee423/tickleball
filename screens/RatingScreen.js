import { useState } from 'react';
import { Rating } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, } from 'react-native';
import pbTrans from '../assets/images/pbTrans.png';


const RatingScreen = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerThree, setPlayerThree] = useState(''); 
    const [playerFour, setPlayerFour] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    styles={styles.input}
                    placeholder='Player One'
                    placeholderTextColor='#04f167'
                    onChangText={(playerOne) => setPlayerOne(playerOne)}
                    textAlign='center'
                />
            </View>
                <Rating
                    showRating
                    type='custom'
                    ratingImage={pbTrans}
                    ratingColor='#008bf8'
                    fractions={1}
                    startingValue={0}
                    imageSize={40}
                    alignItems='flex-start'
                    style={{paddingVertical:5}}    
                />

            <View style={styles.inputView}>
                <TextInput
                    styles={styles.input}
                    placeholder='Player Two'
                    placeholderTextColor='#04f167'
                    onChangText={(playerTwo) => setPlayerOne(playerTwo)}
                    textAlign='center'
                    maxFontSizeMultiplier={5}

                />
            </View>
                <Rating
                    showRating
                    type='custom'
                    ratingImage={pbTrans}
                    ratingColor='#008bf8'
                    fractions={1}
                    startingValue={0}
                    imageSize={40}
                    alignItems='flex-start'
                    style={{paddingVertical:5}}
                />

            <View style={styles.inputView}>
                <TextInput
                    styles={styles.input}
                    placeholder='Player Three'
                    placeholderTextColor='#04f167'
                    onChangText={(playerThree) => setPlayerOne(playerThree)}
                    textAlign='center'
                />
            </View>
                <Rating
                    showRating
                    type='custom'
                    ratingImage={pbTrans}
                    ratingColor='#008bf8'
                    fractions={1}
                    startingValue={0}
                    imageSize={40}
                    alignItems='flex-start'
                    style={{paddingVertical:5}}
                />
            <View style={styles.inputView}>
                <TextInput
                    styles={styles.input}
                    placeholder='Player Four'
                    placeholderTextColor='#04f167'
                    onChangText={(playerFour) => setPlayerOne(playerFour)}
                    textAlign='center'
                />
            </View>
                <Rating
                    showRating
                    type='custom'
                    ratingImage={pbTrans}
                    ratingColor='#008bf8'
                    fractions={1}
                    startingValue={0}
                    imageSize={40}
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
        backgroundColor: '#008bf8',
        borderRadius: 60,
        width: '40%',
        height: 30,
        marginBottom: 10,
        alignItems: 'center'
    },
    input: { 
        flex: 1

    }
})

export default RatingScreen;