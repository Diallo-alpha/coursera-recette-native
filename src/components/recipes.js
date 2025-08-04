import { View, Text, Pressable, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipe({ categories, foods }) {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
<ArticleCard item={item} index={index} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View testID="recipesDisplay">
        <FlatList
          data={foods}
          numColumns={2}
          keyExtractor={(item, index) => item.id?.toString() || index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
}

const ArticleCard = ({ item, index, navigation }) => {
  return (
    <View
      style={[styles.cardContainer, { paddingHorizontal: wp(2) }]} testID="articleDisplay">
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeDetail", { item })}
        style={styles.cardContent}
      >
        <Image source={{ uri: item.recipeImage }} style={styles.articleImage} />
        <View style={styles.textContainer}>
          <Text style={styles.articleText}>{item.recipeName}</Text>
          <Text style={styles.articleDescription}>{item.recipeDescription}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4), // mx-4 equivalent
    marginTop: hp(2),
  },
  title: {
    fontSize: hp(3),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginBottom: hp(1.5),
  },
  loading: {
    marginTop: hp(20),
  },
  cardContainer: {
    flex: 1,
    marginBottom: hp(2),
    marginHorizontal: wp(1),
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardContent: {
    padding: wp(3),
    alignItems: "center",
  },
  articleImage: {
    width: wp(35),
    height: wp(35),
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginBottom: hp(1),
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: wp(1),
  },
  articleText: {
    fontSize: hp(1.8),
    fontWeight: "600",
    color: "#52525B",
    textAlign: "center",
    marginBottom: hp(0.5),
    numberOfLines: 2,
  },
  articleDescription: {
    fontSize: hp(1.3),
    color: "#6B7280",
    textAlign: "center",
    numberOfLines: 3,
  },
  row: {
    justifyContent: "space-between", // Align columns evenly
  },
});
