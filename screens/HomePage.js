import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import PB1 from '../assets/images/pb1.png';
import PB2 from '../assets/images/pb2.png';
import PB3 from '../assets/images/pb3.png';
import { Image } from "react-native"; 

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Image 
        source={ PB3 }
        style={styles.imageHeader}
      />
      <Image 
        source={ PB1 }
        style={styles.image}
      />
      <Text>Find out what your pickleball rating is!</Text>
      <Image 
        source={ PB2 }
        style={styles.image}
      />
      <Text>Shop the paddles that we recommend!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 200,
    borderRadius: 50
  },
  imageHeader: {
    resizeMode: 'contain',
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },

  text: {
    fontSize: 30,
    marginBottom: 40
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomePage;