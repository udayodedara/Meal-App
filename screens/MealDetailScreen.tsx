import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/meal_detail/Subtitle';
import List from '../components/meal_detail/List';
import IconButton from '../components/IconButton';
import Images from '../assets/icons';
import {FavoriteContext} from '../store/context/favorite-context';

const MealDetailScreen = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const favoriteMealsCtx = useContext(FavoriteContext);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  useLayoutEffect(() => {
    const headerButtonPressHandler = () => {
      if (mealIsFavorite) {
        favoriteMealsCtx.removeFavorite(mealId);
      } else {
        favoriteMealsCtx.addFavorite(mealId);
      }
    };
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={Images.star}
            color={mealIsFavorite ? 'red' : 'white'}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, mealIsFavorite, favoriteMealsCtx, mealId]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        duration={selectedMeal?.duration}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
