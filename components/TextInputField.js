import { View, TextInput, StyleSheet, Text } from "react-native";
import { Rating } from "react-native-ratings";

const TextInputField = ({placeholder, onChangeText, value, secureTextEntry, errorText}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor='#ddddff'
                autoCapitalize='none'
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry ? secureTextEntry : false}
            />
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#04f167',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        height: 40,
        marginBottom: 20,
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    error: {
        color: 'red'
    }
})

export default TextInputField;