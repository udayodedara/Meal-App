import {FlatList, StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

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

  const renderMealItem = (itemData: {
    item: {
      imageUrl: string;
      id: string;
      title: string;
      complexity: string;
      duration: number;
      affordability: string;
    };
  }) => {
    const menuItemProps = {
      imageUrl: itemData.item.imageUrl,
      title: itemData.item.title,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability,
      id: itemData.item.id,
    };
    return <MealItem {...menuItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
