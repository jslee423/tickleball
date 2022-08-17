import { StyleSheet, TextInput } from 'react-native';

const EnterTeamName = ({onChangeText, value}) => (
  <TextInput 
    style={styles.teamEnterName}
    placeholder="Enter Team Name"
    placeholderTextColor='white'
    onChangeText={onChangeText}
    value={value}
  />
)

const styles = StyleSheet.create({
  teamEnterName: {
    height: '15%',
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 3
  }
})

export default EnterTeamName;