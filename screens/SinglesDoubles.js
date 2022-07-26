import { Text, View, StyleSheet, Image } from "react-native";
import SinglesPaddle from '../assets/images/singlesPaddle.png';
import DoublesPaddle from '../assets/images/doublesPaddle.png';
import { TouchableOpacity } from 'react-native';

const SinglesDoubles = ({navigation}) => {

  const singles = () => {
    navigation.navigate('singleGame')
  }

  const doubles = () => {
    navigation.navigate('doubleGame')
  }

  return (
    <View style={styles.container}>
     
        <View 
          style={styles.view1}
        >
          <TouchableOpacity onPress={singles}>
          <Text style={styles.text1}>SINGLES</Text>
          <Image
            source={ SinglesPaddle }
            style={styles.image}
          />
          </TouchableOpacity>
        </View>
      
      <View style={styles.view2}>
        <TouchableOpacity onPress={doubles}>
        <Text style={styles.text2}>DOUBLES</Text>
        <Image
          source={ DoublesPaddle }
          style={styles.image}
        />
        </TouchableOpacity>
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
    fontSize: 30,
    color: 'black',
    paddingTop: 130
  },
  text2: {
    textAlign: 'center',
    flex: 1,
    letterSpacing: 2,
    fontSize: 30,
    color: 'black',
    paddingTop: 130
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 70,
  },
  view1: {
    height: 150,
    flex: 2,
    backgroundColor: '#008bf8',
    alignItems: 'center'
  },
  view2: {
    height: 150,
    backgroundColor: '#04f167',
    flex: 2,
    alignItems: 'center'

  }
})

export default SinglesDoubles;