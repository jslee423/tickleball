import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RatingStars from '../components/RatingStars';
import TextRatingInput from '../components/TextRatingInput';


const RatingScreen = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerThree, setPlayerThree] = useState(''); 
    const [playerFour, setPlayerFour] = useState('');


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextRatingInput 
                placeholder='Player One'
            />
            <RatingStars />
            <TextRatingInput 
                placeholder='Player Two'
            />
            <RatingStars />
            <TextRatingInput 
                placeholder='Player Three'
            />
            <RatingStars />
            <TextRatingInput 
                placeholder='Player Four'
            />
            <RatingStars />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    ratingView: {
        marginBottom: 20
    }
})

export default RatingScreen;