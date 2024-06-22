import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
}

const MealDetails = (props: MealDetailsProps) => {
  const {duration, complexity, affordability} = props;
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
