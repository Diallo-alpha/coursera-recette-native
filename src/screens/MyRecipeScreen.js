import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { useNavigation, useFocusEffect } from "@react-navigation/native";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
  export default function MyRecipeScreen() {
    const navigation = useNavigation();
    const [recipes, setrecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fonction pour récupérer les recettes
    const fetchrecipes = async () => {
      try {
        setLoading(true);
        // Récupérer les recettes depuis AsyncStorage
        const storedRecipes = await AsyncStorage.getItem("customrecipes");
        
        // Vérifier et mettre à jour l'état
        if (storedRecipes) {
          const parsedRecipes = JSON.parse(storedRecipes);
          setrecipes(parsedRecipes);
        } else {
          setrecipes([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
      } finally {
        // Mettre à jour l'état de chargement
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchrecipes();
    }, []);

    // Rafraîchir les recettes quand on revient sur l'écran
    useFocusEffect(
      React.useCallback(() => {
        fetchrecipes();
      }, [])
    );

    const handleAddrecipe = () => {
      // Naviguer vers RecipesFormScreen pour ajouter une nouvelle recette
      navigation.navigate("RecipesFormScreen");
    };
  
    const handlerecipeClick = (recipe) => {
      // Naviguer vers CustomRecipesScreen en passant la recette comme paramètre
      navigation.navigate("CustomRecipesScreen", { recipe });
    };
    const deleterecipe = async (index) => {
      try {
        // Cloner le tableau des recettes
        const updatedrecipes = [...recipes];
        
        // Supprimer la recette à l'index spécifié
        updatedrecipes.splice(index, 1);
        
        // Mettre à jour AsyncStorage
        await AsyncStorage.setItem("customrecipes", JSON.stringify(updatedrecipes));
        
        // Mettre à jour l'état
        setrecipes(updatedrecipes);
      } catch (error) {
        console.error("Erreur lors de la suppression de la recette:", error);
      }
    };
  
    const editrecipe = (recipe, index) => {
      // Naviguer vers RecipesFormScreen avec les données de la recette à modifier
      navigation.navigate("RecipesFormScreen", { 
        recipeToEdit: recipe, 
        recipeIndex: index 
      });
    };
  
    return (
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"Back"}</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={handleAddrecipe} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New recipe</Text>
        </TouchableOpacity>
  
        {loading ? (
          <ActivityIndicator size="large" color="#f59e0b" />
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {recipes.length === 0 ? (
              <Text style={styles.norecipesText}>No recipes added yet.</Text>
            ) : (
              recipes.map((recipe, index) => (
                <View key={index} style={styles.recipeCard} testID="recipeCard">
                  <TouchableOpacity testID="handlerecipeBtn" onPress={() => handlerecipeClick(recipe)}>
                    {recipe.image && (
                      <Image 
                        source={{ uri: recipe.image }} 
                        style={styles.recipeImage}
                        resizeMode="cover"
                      />
                    )}
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <Text style={styles.recipeDescription} testID="recipeDescp">
                      {recipe.description && recipe.description.length > 50 
                        ? `${recipe.description.substring(0, 50)}...` 
                        : recipe.description || "Aucune description disponible"}
                    </Text>
                  </TouchableOpacity>
  
                  {/* Edit and Delete Buttons */}
                  <View style={styles.actionButtonsContainer} testID="editDeleteButtons">
                    <TouchableOpacity 
                      style={styles.editButton}
                      onPress={() => editrecipe(recipe, index)}
                    >
                      <Text style={styles.editButtonText}>Modifier</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.deleteButton}
                      onPress={() => deleterecipe(index)}
                    >
                      <Text style={styles.deleteButtonText}>Supprimer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(4),
      backgroundColor: "#F9FAFB",
    },
    backButton: {
      marginBottom: hp(1.5),
    },
    backButtonText: {
      fontSize: hp(2.2),
      color: "#4F75FF",
    },
    addButton: {
      backgroundColor: "#4F75FF",
      padding: wp(.7),
      alignItems: "center",
      borderRadius: 5,
      width:300,
     marginLeft:500
      // marginBottom: hp(2),
    },
    addButtonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: hp(2.2),
    },
    scrollContainer: {
      paddingBottom: hp(2),
      height:'auto',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      flexWrap:'wrap'
    },
    norecipesText: {
      textAlign: "center",
      fontSize: hp(2),
      color: "#6B7280",
      marginTop: hp(5),
    },
    recipeCard: {
      width: 400, // Make recipe card width more compact
      height: 300, // Adjust the height of the card to fit content
      backgroundColor: "#fff",
      padding: wp(3),
      borderRadius: 8,
      marginBottom: hp(2),
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3, // for Android shadow
    },
    recipeImage: {
      width: 300, // Set width for recipe image
      height: 150, // Adjust height of the image
      borderRadius: 8,
      marginBottom: hp(1),
    },
    recipeTitle: {
      fontSize: hp(2),
      fontWeight: "600",
      color: "#111827",
      marginBottom: hp(0.5),
    },
    recipeDescription: {
      fontSize: hp(1.8),
      color: "#6B7280",
      marginBottom: hp(1.5),
    },
    actionButtonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: hp(1),
    },
    editButton: {
      backgroundColor: "#34D399",
      padding: wp(.5),
      borderRadius: 5,
      width: 100, // Adjust width of buttons to be more compact
      alignItems: "center",
    },
    editButtonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: hp(1.8),
    },
    deleteButton: {
      backgroundColor: "#EF4444",
      padding: wp(.5),
      borderRadius: 5,
      width: 100, // Adjust width of buttons to be more compact
      alignItems: "center",
    },
    deleteButtonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: hp(1.8),
    },
  });
  