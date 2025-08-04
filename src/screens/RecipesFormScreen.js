import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function RecipesFormScreen({ route, navigation }) {
  const { recipeToEdit, recipeIndex, onrecipeEdited } = route.params || {};
  const [title, setTitle] = useState(recipeToEdit ? recipeToEdit.title : "");
  const [image, setImage] = useState(recipeToEdit ? recipeToEdit.image : "");
  const [description, setDescription] = useState(
    recipeToEdit ? recipeToEdit.description : ""
  );

  const saverecipe = async () => {
    try {
      // Validation des champs obligatoires
      if (!title.trim()) {
        alert('Le titre est obligatoire');
        return;
      }
      
      if (!description.trim()) {
        alert('La description est obligatoire');
        return;
      }

      // Initialiser une nouvelle recette
      const newrecipe = {
        title: title.trim(),
        image: image.trim(),
        description: description.trim(),
        createdAt: new Date().toISOString(),
      };

      // Récupérer les recettes existantes
      const existingRecipesJSON = await AsyncStorage.getItem("customrecipes");
      let recipes = [];
      
      if (existingRecipesJSON) {
        recipes = JSON.parse(existingRecipesJSON);
      }

      // Mettre à jour ou ajouter une recette
      if (recipeToEdit && recipeIndex !== undefined) {
        // Mode modification : mettre à jour la recette existante
        recipes[recipeIndex] = {
          ...newrecipe,
          createdAt: recipeToEdit.createdAt, // Conserver la date de création originale
          updatedAt: new Date().toISOString(), // Ajouter une date de modification
        };
        
        // Notifier le composant parent de la modification
        if (onrecipeEdited) {
          onrecipeEdited();
        }
        
        console.log('Recette modifiée avec succès');
      } else {
        // Mode création : ajouter une nouvelle recette
        recipes.push(newrecipe);
        console.log('Nouvelle recette ajoutée avec succès');
      }

      // Enregistrer le tableau mis à jour dans AsyncStorage
      await AsyncStorage.setItem("customrecipes", JSON.stringify(recipes));

      // Revenir à l'écran précédent
      navigation.goBack();

    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la recette:', error);
      alert('Une erreur est survenue lors de l\'enregistrement. Veuillez réessayer.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Text style={styles.imagePlaceholder}>Upload Image URL</Text>
      )}
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
        style={[styles.input, { height: hp(20), textAlignVertical: "top" }]}
      />
      <TouchableOpacity onPress={saverecipe} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save recipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
  },
  input: {
    marginTop: hp(4),
    borderWidth: 1,
    borderColor: "#ddd",
    padding: wp(0.5),
    marginVertical: hp(1),
  },
  image: {
    width: 300,
    height: 200,
    margin: wp(2),
  },
  imagePlaceholder: {
    height: hp(20),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    padding: wp(2),
  },
  saveButton: {
    backgroundColor: "#4F75FF",
    padding: wp(0.5),
    alignItems: "center",
    borderRadius: 5,
    marginTop: hp(2),
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});