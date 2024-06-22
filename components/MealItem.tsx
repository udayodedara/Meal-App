import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MealDetails from './MealDetails';

interface MealItemProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  id: string;
}

const MealItem = (props: MealItemProps) => {
  const {title, imageUrl, duration, complexity, affordability, id} = props;
  const navigation: any = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };

  return (
    <View style={styles.menuItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPress : null)}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  menuItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'black',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  buttonPress: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
