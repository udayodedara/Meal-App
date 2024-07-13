import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsList from '../components/meals_list/MealsList';

const MealsOverviewScreen = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
