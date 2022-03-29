import { useEffect } from 'react';

import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the meal Detail screen ({mealId})</Text>
    </View>
  );
}

export default MealDetailScreen;
