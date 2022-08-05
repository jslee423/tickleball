import { Text, View, StyleSheet, TextInput } from "react-native";

const TeamName = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Team 1</Text>
        <TextInput style={styles.textarea}
          placeholder="Enter Team Name"
        ></TextInput>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>Team 2</Text>
        <TextInput style={styles.textarea}
          placeholder="Enter Team Name"
        ></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    textAlign: 'center',
    flex: 1,
    letterSpacing: 2,
    fontSize: 20,
    color: 'white',
    paddingTop: 130
  },
  text2: {
    textAlign: 'center',
    flex: 1,
    letterSpacing: 2,
    fontSize: 20,
    color: 'white',
    paddingTop: 130
  },
  view1: {
    height: 100,
    flex: 2,
    backgroundColor: '#008bf8',
    alignItems: 'center'
  },
  view2: {
    height: 100,
    backgroundColor: '#150578',
    flex: 2,
    alignItems: 'center'
  },
  textarea: {
    marginBottom: 130,
    color: "white"
  }
})

export default TeamName;