import React, {createContext, useState} from 'react';

export const FavoriteContext = createContext<{
  ids: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

interface FavoriteContextProviderProps {
  children: React.ReactNode;
}

const FavoriteContextProvider = (props: FavoriteContextProviderProps) => {
  const {children} = props;
  const [favoriteMealIds, setFavoriteMealIds] = useState<number[]>([]);
  const addFavorite = (id: number) => {
    setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
  };
  const removeFavorite = (id: number) => {
    setFavoriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
