import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SinglesPaddle from '../assets/images/singlesPaddle.png';
import DoublesPaddle from '../assets/images/doublesPaddle.png';
import { TouchableOpacity } from 'react-native';

const SinglesDoubles = ({navigation}) => {

  // const navigation = useNavigation();
  const singles = () => {
    navigation.navigate('SinglesScoreKeeper')
  }

  const doubles = () => {
    navigation.navigate('DoublesScoreKeeper')
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
    fontSize: 20,
    color: 'black',
    paddingTop: 130
  },
  text2: {
    textAlign: 'center',
    flex: 1,
    letterSpacing: 2,
    fontSize: 20,
    color: 'black',
    paddingTop: 130
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 70,
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

  }
})

export default SinglesDoubles;