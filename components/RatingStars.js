import { View, StyleSheet } from 'react-native';
import Stars from 'react-native-stars';
import pbTrans from '../assets/images/pbTrans.png';
import pbFill from '../assets/images/pbFill.png';



const RatingStars = () => (
    <View style={styles.ratingView}>
        <Stars  
            rating={3}
            count={5}
            starSize={40}
            // half={true}
            fullStar={pbFill}
            emptyStar={pbTrans}
            // halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
        />
    </View>
)

const styles = StyleSheet.create({
    ratingView: {
        marginBottom: 20
    }
})



export default RatingStars;