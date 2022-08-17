import { View, StyleSheet, TextInput } from 'react-native';
 

const TextRatingInput = ({placeholder}) => (
    <View style={styles.inputView}>
        <TextInput
            styles={styles.input}
            placeholder={placeholder}            
            placeholderTextColor='#04f167'
            onChangText={(playerOne) => setPlayerOne(playerOne)}
            textAlign='center'
        />
    </View>
)

const styles = StyleSheet.create({
    inputView: { 
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#04f167',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        height: 40,
        marginBottom: 20,
    },
    input: { 
        paddingBottom: 100,
        marginBottom: 100,
        marginTop: 500
    }
})

export default TextRatingInput;