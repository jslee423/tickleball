import { StyleSheet, TextInput } from 'react-native';

const EnterTeamName = ({onChangeText, value}) => (
  <TextInput 
    style={styles.teamEnterName}
    placeholder="Enter Team Name"
    placeholderTextColor='white'
    onChangeText={onChangeText}
    value={value}
  />
 
  // <TouchableOpacity
  //   onPress={handleOnPress}
  //   title={name}
  //   style={styles.endTurn}
  // >
  //   <Text>{name}</Text>
  // </TouchableOpacity>
)

const styles = StyleSheet.create({
  teamEnterName: {
    height: '15%',
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2
  }
})

export default EnterTeamName;