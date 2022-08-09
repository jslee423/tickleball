import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from 'react';

const DoublesScoreKeeper = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [serve, setServe] = useState(1);
  const [teamName, setTeamName] = useState('');
  const [secondTeamName, setSecondTeamName] = useState('');

  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPressSecond = () => setSecondCount(prevCount => prevCount + 1);
  const onServe = () => setServe(prevCount => prevCount + 1);
  

  const resetServe = () => {
    setServe(1);
  }

  const resetScoring = () => {
    setCount(0);
    setSecondCount(0);
    setServe(1);
    setTeamName('');
    setSecondTeamName('');
  }

  if (count < 11) {
    count + 1
  } else if (count > 11) {
    Alert.alert('Congrats, ' + teamName + ' you are victorious!')
    resetScoring();
  }

  if (secondCount < 11) {
    secondCount + 1
  } else if (secondCount > 11) {
    Alert.alert('Congrats, '+ secondTeamName + ' you are victorious!')
    resetScoring();
  }

  if (serve === 1) {
    serve + 1
  } else if (serve > 2) {
    resetServe();
  }
  

  return(
    <View style={styles.container}>
      <View style={styles.view1}>
      <TextInput 
        style={styles.textarea}
        placeholder="Enter Team Name"
        placeholderTextColor='#003f5c'
        onChangeText={(teamName) =>setTeamName(teamName)}
        value={teamName}
        >
        </TextInput>
        <View style={styles.line}></View>
        <View style={styles.subheader}>
          <Text style={styles.score}>
            Score: 
            <Text style={styles.exactScore}>
               {count} - {secondCount}
            </Text>
          </Text>
          <Text style={styles.serve}>
            Serve: 
              <Text style={styles.exactServe}>
                {serve}/2
              </Text>
          </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.scoreBtnActive}>SCORE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onServe}>
            <Text style={styles.serveBtnActive}>SERVE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View  style={styles.view2}>
      <TextInput 
        style={styles.textarea}
        placeholder="Enter Team Name"
        placeholderTextColor='#003f5c'
        onChangeText={(secondTeamName) =>setSecondTeamName(secondTeamName)}
        value={secondTeamName}
        >
        </TextInput>
        <View style={styles.line}></View>
        <View style={styles.subheader}>
          <Text style={styles.score}>
            Score: 
              <Text style={styles.exactScore}>
                {secondCount} - {count}
              </Text>
            </Text>
          <Text style={styles.serve}>
            Serve:  
              <Text style={styles.exactServe}>
                {serve}/2
              </Text>
          </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={onPressSecond}>
            <Text style={styles.scoreBtnInactive}>SCORE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onServe}>
            <Text style={styles.serveBtnInactive}>SERVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    letterSpacing: 2,
    fontSize: 25,
    color: 'white',
  },
  view1: {
    height: 100,
    flex: 2,
    backgroundColor: '#008bf8',
    alignItems: 'center'
  },
  view2: {
    height: 100,
    backgroundColor: '#04f167',
    flex: 2,
    alignItems: 'center'
  },
  subheader: {
    flexDirection: 'row',
    marginBottom: 15
  },
  line: {
    backgroundColor: 'white',
    height: 1,
    width: '100%',
    marginBottom: 10
  },
  score: {
    textAlign: 'left',
    marginRight: 10,
    fontSize: 20
  },
  serve: {
    textAlign: 'right',
    marginLeft: 80,
    fontSize: 20
  },
  exactScore: {
    fontSize: 25,
    color: 'white'
  },
  exactServe: {
    fontSize: 25,
    color: 'white'
  },
  textarea: {
    height: '15%',
    width: '80%',
    fontSize: 16,
    textAlign: 'center'
  },
  btn: {
    flexDirection: 'row',
    marginTop: "1%"
  },
  scoreBtnActive: {
    marginLeft: 0,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#150578',
    paddingTop: '22%',
    paddingBottom: '22%',
    paddingLeft: '15%',
    paddingRight: '15%',
    borderRadius: 30,
    letterSpacing: 2
  },
  serveBtnActive: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#150578',
    paddingTop: '22%',
    paddingBottom: '22%',
    paddingLeft: '15%',
    paddingRight: '15%',
    borderRadius: 30,
    letterSpacing: 2
  },
  scoreBtnInactive: {
    marginLeft: 0,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'gray',
    paddingTop: '22%',
    paddingBottom: '22%',
    paddingLeft: '15%',
    paddingRight: '15%',
    borderRadius: 30,
    letterSpacing: 2
  },
  serveBtnInactive: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'gray',
    paddingTop: '22%',
    paddingBottom: '22%',
    paddingLeft: '15%',
    paddingRight: '15%',
    borderRadius: 30,
    letterSpacing: 2
  },
})

export default DoublesScoreKeeper;