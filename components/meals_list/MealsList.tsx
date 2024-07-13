import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import MealItem from './MealItem';
import Meal from '../../models/meal';

interface MealsListProps {
  items: Meal[];
}

const MealsList = (props: MealsListProps) => {
  const {items} = props;
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
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
