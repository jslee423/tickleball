import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TouchButton = ({disable, handleOnPress, name}) => (
  <TouchableOpacity 
    disabled={disable} 
    onPress={handleOnPress}
  >
    <Text style={disable ? styles.scoreBtnInactive : styles.scoreBtnActive}>
      {name}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  scoreBtnActive: {
    marginLeft: 3,
    marginRight: 3,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#150578',
    paddingTop: '26%',
    paddingBottom: '26%',
    paddingLeft: '13%',
    paddingRight: '13%',
    borderRadius: 30,
    letterSpacing: 5
  },
  scoreBtnInactive: {
    marginLeft: 3,
    marginRight: 3,
    fontSize: 20,
    color: '#dee2e6',
    backgroundColor: '#6c757d',
    paddingTop: '26%',
    paddingBottom: '26%',
    paddingLeft: '13%',
    paddingRight: '13%',
    borderRadius: 30,
    letterSpacing: 5
  },
})

export default TouchButton;