import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

export default function CustomRecipesScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const route = useRoute();
  const { recipe, index = 0 } = route.params || {}; // Ajout d'un index par défaut
  console.log('recipe', recipe);
  
  const favoriteRecipe = useSelector(
    (state) => state.favorites.favoriterecipes
  );
  console.log('favoriteRecipe from custom', favoriteRecipe);
  
  // Correction : utiliser un identifiant unique pour vérifier les favoris
  const isFavourite = favoriteRecipe.some(fav => 
    fav.title === recipe?.title || fav.idCategory === recipe?.idCategory
  );

  // Gestion du cas où la recette n'est pas disponible
  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Recipe Details Available</Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Text>Retour</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent} 
      testID="scrollContent"
    >
      {/* Recipe Image */}
      <View style={styles.imageContainer} testID="imageContainer">
        {recipe.image && (
          <Image 
            source={{ uri: recipe.image }} 
            style={[
              styles.recipeImage, 
              { height: index % 3 === 0 ? hp(25) : hp(35) }
            ]} 
          />
        )}
      </View>

      {/* Top Buttons Container */}
      <View style={styles.topButtonsContainer} testID="topButtonsContainer">
        {/* Premier TouchableOpacity - Bouton Retour */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>

        {/* Deuxième TouchableOpacity - Bouton Favori */}
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={styles.favoriteButton}
        >
          <Text style={styles.favoriteText}>
            {isFavourite ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recipe Details */}
      <View style={styles.contentContainer} testID="contentContainer">
        {/* Titre de la recette */}
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        
        {/* Section Contenu */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Contenu</Text>
          <Text style={styles.contentText}>{recipe.description}</Text>
        </View>

        {/* Informations supplémentaires si disponibles */}
        {recipe.createdAt && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Date de création</Text>
            <Text style={styles.contentText}>
              {new Date(recipe.createdAt).toLocaleDateString('fr-FR')}
            </Text>
          </View>
        )}

        {recipe.updatedAt && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Dernière modification</Text>
            <Text style={styles.contentText}>
              {new Date(recipe.updatedAt).toLocaleDateString('fr-FR')}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  recipeImage: {
    width: wp(98),
    // height sera définie dynamiquement selon l'index
    borderRadius: 35,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 4,
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },
  recipeTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: hp(2),
  },
  sectionContainer: {
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: hp(1),
  },
  topButtonsContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp(4),
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    marginLeft: wp(5),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 50,
    marginRight: wp(5),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentText: {
    fontSize: hp(1.6),
    color: "#4B5563",
    lineHeight: hp(2.2),
  },
  buttonText: {
    fontSize: hp(1.8),
    color: "#4B5563",
    fontWeight: "500",
  },
  favoriteText: {
    fontSize: hp(2.5),
    color: "#FF6B6B",
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#4B5563",
    textAlign: "center",
    marginTop: hp(10),
  },
});