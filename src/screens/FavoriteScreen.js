import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const navigation = useNavigation();
  // Récupération des recettes favorites depuis Redux
  const favoriteRecipes = useSelector((state) => state.favorites);
  const favoriteRecipesList = favoriteRecipes?.favoriterecipes || [];
  
  console.log(favoriteRecipes.favoriterecipes);
  console.log('favoriteRecipesList', favoriteRecipesList);

  // Fonction pour limiter le titre à 20 caractères
  const truncateTitle = (title, maxLength = 20) => {
    if (title && title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title || 'Recette sans nom';
  };

  // Fonction de rendu pour chaque élément de la liste
  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('RecipeDetail', { item: item })}
    >
      <Image
        source={{ uri: item.recipeImage || item.strMealThumb || item.image }}
        style={styles.recipeImage}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.recipeTitle}>
          {truncateTitle(item.recipeName || item.strMeal || item.name)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Si aucune recette favorite
  if (favoriteRecipesList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite recipes yet!</Text>
        {/* Bouton retour pour état vide */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#2563EB",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            width: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      {/* Titre principal */}
      <View testID="favoriteRecipes">
        <Text
          style={{ fontSize: hp(3.8), marginTop: hp(4), marginLeft: 20 }}
          className="font-semibold text-neutral-600"
        >
          My Favorite Recipes
        </Text>
      </View>

      {/* Bouton retour */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "#2563EB",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
          width: 100,
          alignItems: "center",
          marginLeft: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>Go back</Text>
      </TouchableOpacity>

      {/* Liste des recettes favorites */}
      <FlatList
        data={favoriteRecipesList}
        keyExtractor={(item) => item.idFood || item.idMeal || item.id}
        renderItem={renderRecipeItem}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: hp(2.5),
    color: "#6B7280", // text-neutral-600
  },
  listContentContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  cardContainer: {
    backgroundColor: "white",
    marginBottom: hp(2),
    padding: wp(4),
    borderRadius: 10,
    elevation: 3, // Pour l'ombre Android
    shadowColor: "#000", // Pour l'ombre iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  recipeImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: 10,
    marginRight: wp(4),
  },
  recipeTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#4B5563", // text-neutral-700
  },
});