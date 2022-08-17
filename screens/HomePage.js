import React from "react";
import { Text, StyleSheet, View, Image, PanResponder, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRef } from 'react';
import Logo from '../assets/images/doublesPaddle.png';

const HomePage = ({navigation}) => {

  const view = useRef();

  const playScreen = () => {
    navigation.navigate('SinglesDoubles')
  }

  const isLeftSwipe = ({ dx }) => dx < - 200;
  const isRightSwipe = ({ dx }) => dx > + 200;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      view.current
        .rubberBand(1000)
        .then((endState) => 
          console.log(endState.finished ? 'finished' : 'canceled')
        );
    },

    onPanResponderEnd: (e, gestureState) => {
      console.log('pan responder end', gestureState);
      if (isLeftSwipe(gestureState)) {
        Alert.alert(
          'Would you like us to help you keep score?',
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'Ok',
              onPress: () => props.playScreen(e)
            }
          ]
        );
      } else if (isRightSwipe(gestureState)) {
        playScreen()
      }
    }
  })

  return (
    <Animatable.View
      animation='fadeInDownBig'
      duration={2000}
      delay={1000}
      ref={view}
      {...panResponder.panHandlers}
    >
      <View style={styles.container}>
        <Text style={styles.text}>PBJ</Text>
        <Image 
          source={ Logo }
          style={styles.imageHeader}
        />
        <Text style={styles.text}>play</Text> 
      </View>
    </Animatable.View>
  )
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 400
  },
  imageHeader: {
    resizeMode: 'contain',
    height: 300,
    marginTop: "150%"
  },

  text: {
    fontSize: 30,
    marginBottom: 10
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomePage;