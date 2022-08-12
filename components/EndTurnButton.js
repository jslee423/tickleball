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
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 2,
  }
})

export default EndTurnButton;