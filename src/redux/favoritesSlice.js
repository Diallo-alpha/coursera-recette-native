import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Tableau pour stocker les recettes favorites
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      
      // Chercher si la recette existe déjà dans les favoris en comparant idFood
      const existingIndex = state.favoriterecipes.findIndex(
        (favoriteRecipe) => favoriteRecipe.idFood === recipe.idFood
      );
      
      if (existingIndex !== -1) {
        // Si la recette existe déjà, la supprimer des favoris
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // Si la recette n'existe pas, l'ajouter aux favoris
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;