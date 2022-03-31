import { createContext, useState } from 'react';

export const FaforitesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritiesContextProvider({ children }) {
  const [favoriteMealsIds, set__favoriteMealsIds] = useState([]);

  function addFavorite(id) {
    set__favoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    set__favoriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FaforitesContext.Provider value={value}>
      {children}
    </FaforitesContext.Provider>
  );
}

export default FavoritiesContextProvider;
