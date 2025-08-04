import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView 
} from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { toggleFavorite } from '../redux/favoritesSlice';

export default function RecipeDetailScreen(props) {
  const recipe = props.route.params.item;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  // Sélectionner les recettes favorites depuis le store Redux
  const favoriteRecipes = useSelector(state => state.favorites?.favoriterecipes || []);
  
  // Vérifier si la recette actuelle est favorite
  const isFavorite = favoriteRecipes.some(fav => fav.idFood === recipe.idFood);

  // Fonction pour basculer le statut favori
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(recipe));
    console.log('Toggle favorite for recipe:', recipe.recipeName);
  };

  // Fonction pour revenir à l'écran précédent
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Image Container */}
        <View testID="imageContainer" style={styles.imageContainer}>
          <Image
            source={{ uri: recipe.recipeImage }}
            style={styles.recipeImage}
            resizeMode="cover"
          />
          
          {/* Button Interface */}
          <View style={styles.buttonContainer}>
            {/* Back Button */}
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleGoBack}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            
            {/* Favorite Button */}
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={handleToggleFavorite}
            >
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={24} 
                color={isFavorite ? "#EF4444" : "#FFFFFF"} 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recipe Title */}
        <View testID="recipeTitle" style={styles.titleContainer}>
          <Text style={styles.recipeTitle}>{recipe.recipeName}</Text>
        </View>

        {/* Recipe Category */}
        <View testID="recipeCategory" style={styles.categoryContainer}>
          <Text style={styles.categoryText}>
            {recipe.recipeCategory} • {recipe.recipeOrigin}
          </Text>
        </View>

        {/* Misc Container - Icons for minutes, portions, calories, type */}
        <View testID="miscContainer" style={styles.miscContainer}>
          <View style={styles.miscItem}>
            <Ionicons name="time-outline" size={20} color="#F59E0B" />
            <Text style={styles.miscText}>30 min</Text>
          </View>
          
          <View style={styles.miscItem}>
            <Ionicons name="people-outline" size={20} color="#F59E0B" />
            <Text style={styles.miscText}>4 portions</Text>
          </View>
          
          <View style={styles.miscItem}>
            <Ionicons name="flame-outline" size={20} color="#F59E0B" />
            <Text style={styles.miscText}>320 cal</Text>
          </View>
          
          <View style={styles.miscItem}>
            <Ionicons name="restaurant-outline" size={20} color="#F59E0B" />
            <Text style={styles.miscText}>{recipe.recipeTags}</Text>
          </View>
        </View>

        {/* Ingredients Section */}
        <View testID="ingredientsSection" style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingrédients</Text>
          
          <View testID="ingredientsList" style={styles.ingredientsList}>
            {recipe.ingredients?.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <View style={styles.ingredientBullet} />
                <View style={styles.ingredientContent}>
                  <Text style={styles.ingredientName}>
                    {ingredient.ingredientName}
                  </Text>
                  <Text style={styles.ingredientMeasure}>
                    {ingredient.measure}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Instructions Section */}
        <View testID="instructionsSection" style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.instructionsText}>
            {recipe.recipeInstructions}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingBottom: hp(3),
  },
  imageContainer: {
    position: 'relative',
    height: hp(40),
    width: '100%',
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  buttonContainer: {
    position: 'absolute',
    top: hp(5),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  recipeTitle: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: '#374151',
    textAlign: 'center',
  },
  categoryContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    alignItems: 'center',
  },
  categoryText: {
    fontSize: hp(2),
    color: '#6B7280',
    fontWeight: '500',
  },
  miscContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  miscItem: {
    alignItems: 'center',
    flex: 1,
  },
  miscText: {
    fontSize: hp(1.6),
    color: '#6B7280',
    marginTop: hp(0.5),
    textAlign: 'center',
  },
  sectionContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: hp(2),
  },
  ingredientsList: {
    marginTop: hp(1),
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  ingredientBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F59E0B',
    marginRight: wp(3),
  },
  ingredientContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientName: {
    fontSize: hp(1.8),
    color: '#374151',
    fontWeight: '500',
    flex: 1,
  },
  ingredientMeasure: {
    fontSize: hp(1.6),
    color: '#6B7280',
    fontWeight: '400',
  },
  instructionsText: {
    fontSize: hp(1.8),
    color: '#4B5563',
    lineHeight: hp(2.5),
    textAlign: 'justify',
  },
});