import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealsList from '../components/meals_list/MealsList';
import {FavoriteContext} from '../store/context/favorite-context';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsCtx.ids.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
