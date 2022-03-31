import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealsList from '../components/mealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const dispalymeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
    // return mealItem.categoryIds.indexOf(catId) >=0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={dispalymeals} />;
}

export default MealsOverviewScreen;
