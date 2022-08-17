import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const EndTurnButton = ({handleOnPress, name}) => (
  <TouchableOpacity
    onPress={handleOnPress}
    title={name}
    style={styles.endTurn}
  >
    <Text>{name}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  endTurn: {
    flexDirection: 'column',
    backgroundColor: '#ffa9a3',
    borderRadius: 10,
    color: '#f34213',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 8,
    letterSpacing: 2
  }
})

export default EndTurnButton;