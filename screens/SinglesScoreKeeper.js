import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from 'react';
import TouchButton from "../components/Button";
import EndTurnButton from "../components/EndTurnButton";

const SinglesScoreKeeper = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [teamName, setTeamName] = useState('');
  const [secondTeamName, setSecondTeamName] = useState('');
  const [disable, setDisable] = useState(false);
  const [disableTwo, setDisableTwo] = useState(true);

  const onScore = () => setCount(prevCount => prevCount + 1);
  const onScoreSecond = () => setSecondCount(prevCount => prevCount + 1);

  const onEndTurnBlue = () => {
    setDisable(true);
    setDisableTwo(false);
  }

  const onEndTurnGreen = () => {
    setDisable(false);
    setDisableTwo(true);
  }

  const resetScoring = () => {
    setCount(0);
    setSecondCount(0);
    setTeamName('');
    setSecondTeamName('');
    setDisable(false);
    setDisableTwo(true);
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
  
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput 
          style={styles.textarea}
          placeholder="Enter Team Name"
          placeholderTextColor='white'
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
                1/1
              </Text>
            </Text>
          </View>
          <View style={styles.btn}>
            <TouchButton disable={disable} handleOnPress={onScore} name='SCORE' />
            <TouchButton disable={disable} name='SERVE'/>
          </View>
          <EndTurnButton handleOnPress={onEndTurnBlue} name='Next Teams Serve'/>
        </View>
        <View  style={styles.view2}>
        <TextInput 
          style={styles.textarea}
          placeholder="Enter Team Name"
          placeholderTextColor='white'
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
                  1/1
                </Text>
            </Text>
          </View>
          <View style={styles.btn}>
            <TouchButton disable={disableTwo} handleOnPress={onScoreSecond} name='SCORE' />
            <TouchButton disable={disableTwo} name='SERVE' />
          </View>
          <EndTurnButton handleOnPress={onEndTurnGreen} name='Next Teams Serve'/>
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
  }
})

export default SinglesScoreKeeper;