import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// import { useContext } from 'react';
import MealsList from '../components/mealsList/MealsList';
// import { FaforitesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FaforitesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

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
