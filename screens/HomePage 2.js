import React from "react";
import { Text, StyleSheet } from 'react-native';
import PB1 from '../assets/images/pb1.png';
import { Image } from "react-native"; 

const HomePage = () => {
  return (
    <>
      <Text style={styles.text}>The Pickle Ball Club</Text>
      <Image 
        source={ PB1 }
        style={styles.image}
      />
    </>
  )
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 100,
    borderRadius: 50
  },

  text: {
    fontSize: 30,
    marginBottom: 40
    
  }
})

export default HomePage;