
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/categories";
import FoodItems from "../components/recipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Chicken");

  // Hardcoded categories for news
  const [categories, setCategories] = useState([
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      
      },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
     
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
      
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb: "https://www.themealdb.com/images/category/miscellaneous.png",
      
      },
      {
        idCategory: "6",
        strCategory: "Pasta",
        strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      },
      {
        idCategory: "7",
        strCategory: "Pork",
        strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
      },
      {
        idCategory: "8",
        strCategory: "Seafood",
        strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
      },
      {
        idCategory: "9",
        strCategory: "Side",
        strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      },
      {
        idCategory: "10",
        strCategory: "Starter",
        strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      },
      {
        idCategory: "11",
        strCategory: "Vegan",
        strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      },
      {
        idCategory: "12",
        strCategory: "Vegetarian",
        strCategoryThumb: "https://www.themealdb.com/images/category/vegetarian.png",
      },
      {
        idCategory: "13",
        strCategory: "Breakfast",
        strCategoryThumb: "https://www.themealdb.com/images/category/breakfast.png",
      },
      {
        idCategory: "14",
        strCategory: "Goat",
        strCategoryThumb: "https://images.unsplash.com/photo-1619711667542-c049700dd9e0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      
  ]);

  // Keep all foods in state (unfiltered list)
  const [allFood, setAllFood] = useState([
    {
      category:'Beef',
      idFood:'1',
      idCategory: "1",
      recipeName: "Beef and Mustard Pie",
      recipeInstructions: "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
      recipeImage: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_01",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "British",
      cookingDescription: "Preheat the oven to 150C/300F/Gas 2. Toss the beef and flour together in a bowl with some salt and black pepper...",
      recipeTags: "Meat,Pie",
      ingredients: [
        {
          ingredientName: "Beef",
          measure: "1kg"
        },
        {
          ingredientName: "Plain Flour",
          measure: "2 tbs"
        },
        {
          ingredientName: "Rapeseed Oil",
          measure: "2 tbs"
        },
        {
          ingredientName: "Red Wine",
          measure: "200ml"
        },
        {
          ingredientName: "Beef Stock",
          measure: "400ml"
        },
        {
          ingredientName: "Onion",
          measure: "1 finely sliced"
        },
        {
          ingredientName: "Carrots",
          measure: "2 chopped"
        },
        {
          ingredientName: "Thyme",
          measure: "3 sprigs"
        },
        {
          ingredientName: "Mustard",
          measure: "2 tbs"
        },
        {
          ingredientName: "Egg Yolks",
          measure: "2 free-range"
        },
        {
          ingredientName: "Puff Pastry",
          measure: "400g"
        },
        {
          ingredientName: "Green Beans",
          measure: "300g"
        },
        {
          ingredientName: "Butter",
          measure: "25g"
        },
        {
          ingredientName: "Salt",
          measure: "pinch"
        },
        {
          ingredientName: "Pepper",
          measure: "pinch"
        }
      ],
       

    },
    {
      category:'Beef',
      idFood:'2',
      idCategory: "1",
      recipeInstructions: "Add'l ingredients: mayonnaise, siracha\r\n\r\n1\r\n\r\nPlace rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.\r\n\r\n2\r\n\r\nMeanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.\r\n\r\n3\r\n\r\nIn a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.\r\n\r\n5\r\n\r\nFluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo.",
      recipeName: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
      recipeImage: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_02",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Vietnamese",
      cookingDescription: "In a medium bowl, toss cucumber with vinegar, salt, and sugar; set aside to pickle...",
      recipeTags: "Rice,Bowl",
      ingredients: [
        {
          ingredientName: "Ground Beef",
          measure: "500g"
        },
        {
          ingredientName: "Rice",
          measure: "200g"
        },
        {
          ingredientName: "Cucumber",
          measure: "1 sliced"
        },
        {
          ingredientName: "Carrot",
          measure: "1 grated"
        },
        {
          ingredientName: "Sriracha",
          measure: "2 tbs"
        },
        {
          ingredientName: "Mayonnaise",
          measure: "3 tbs"
        },
        {
          ingredientName: "Soy Sauce",
          measure: "2 tbs"
        },
        {
          ingredientName: "Lime",
          measure: "1 juiced"
        },
        {
          ingredientName: "Brown Sugar",
          measure: "1 tbs"
        },
        {
          ingredientName: "Vinegar",
          measure: "2 tbs"
        }
      ],
    },
    {
      idCategory: "1",
      idFood:'3',
      category:'Beef',
      recipeName: "Beef Brisket Pot Roast",
      recipeInstructions:"To cook Beef Brisket Pot Roast, preheat the oven to 160°C (320°F) and season a 1.5kg beef brisket with 2 tsp salt, 1 tsp pepper, 1 tsp garlic powder, and 1 tsp onion powder. Heat 2 tbsp olive oil in a large oven-safe pot over medium-high heat, sear the brisket on all sides, then set it aside. In the same pot, sauté 2 chopped onions, 4 chopped carrots, and 3 minced garlic cloves until softened. Pour in 250ml red wine, deglaze the pot by scraping up the browned bits, and simmer for 2-3 minutes. Add 500ml beef stock and 3 sprigs of thyme, then return the brisket to the pot. Cover and cook in the oven for 3-4 hours until the meat is tender. Let the brisket rest for 10-15 minutes before slicing, and serve with the vegetables and sauce from the pot.",
      recipeImage: "https://images.unsplash.com/photo-1622003184404-bc0c66144534?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_03",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "American",
      cookingDescription: "Preheat oven to 160°C/325°F. Rub brisket with salt, pepper, garlic powder, and onion powder...",
      recipeTags: "Roast,Pot",
      ingredients: [
        {
          ingredientName: "Beef Brisket",
          measure: "1.5kg"
        },
        {
          ingredientName: "Salt",
          measure: "2 tsp"
        },
        {
          ingredientName: "Pepper",
          measure: "1 tsp"
        },
        {
          ingredientName: "Garlic Powder",
          measure: "1 tsp"
        },
        {
          ingredientName: "Onion Powder",
          measure: "1 tsp"
        },
        {
          ingredientName: "Olive Oil",
          measure: "2 tbs"
        },
        {
          ingredientName: "Onions",
          measure: "2 chopped"
        },
        {
          ingredientName: "Carrots",
          measure: "4 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "3 cloves minced"
        },
        {
          ingredientName: "Beef Stock",
          measure: "500ml"
        },
        {
          ingredientName: "Red Wine",
          measure: "250ml"
        },
        {
          ingredientName: "Thyme",
          measure: "3 sprigs"
        }
      ],

    },
    {
      idCategory: "1",
      idFood:'4',
      category:'Beef',
      recipeName: "Beef Bourguignon",
              recipeInstructions: "Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned.\r\nIn the same pan, fry the bacon, shallots or pearl onions, mushrooms, garlic and bouquet garni until lightly browned. Mix in the tomato purée and cook for a few mins, stirring into the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through.\r\nPour over the wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour.\r\nHeat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Then cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan.\r\nTo make the celeriac mash, peel the celeriac and cut into cubes. Heat the olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in the rosemary, thyme, bay and cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins.\r\nAfter 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like.",
      recipeImage: "https://images.unsplash.com/photo-1548869206-93b036288d7e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_04",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "French",
      cookingDescription: "Preheat the oven to 150°C. Heat oil in a large casserole, brown the beef, and set aside. In the same pot, sauté onions...",
      recipeTags: "Stew,Meat",
      ingredients: [
        {
          ingredientName: "Beef Chuck",
          measure: "1kg"
        },
        {
          ingredientName: "Onions",
          measure: "2 sliced"
        },
        {
          ingredientName: "Carrots",
          measure: "3 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "4 cloves minced"
        },
        {
          ingredientName: "Bacon",
          measure: "150g chopped"
        },
        {
          ingredientName: "Red Wine",
          measure: "500ml"
        },
        {
          ingredientName: "Beef Stock",
          measure: "500ml"
        },
        {
          ingredientName: "Thyme",
          measure: "2 sprigs"
        },
        {
          ingredientName: "Mushrooms",
          measure: "200g sliced"
        },
        {
          ingredientName: "Butter",
          measure: "50g"
        },
        {
          ingredientName: "Salt",
          measure: "pinch"
        },
        {
          ingredientName: "Pepper",
          measure: "pinch"
        }
      ],

    },
    {
      idFood:'5',
      idCategory: "1",
      category:'Beef',
      recipeInstructions:"To make Beef Stroganoff, season 500g of thinly sliced beef with salt and pepper, then lightly coat the beef with 2 tablespoons of flour. Heat 2 tablespoons of olive oil and 2 tablespoons of butter in a large pan over medium-high heat. Sear the beef strips in batches until browned, then remove and set aside. In the same pan, sauté 1 finely chopped onion and 2 minced garlic cloves until soft and fragrant. Add 250g of sliced mushrooms and cook until softened. Stir in 1 tablespoon of flour, cook for 1 minute, then pour in 1 cup of beef stock and 1 cup of sour cream. Simmer the mixture for a few minutes, then return the beef to the pan and cook for another 5 minutes, allowing the sauce to thicken and coat the beef. Serve hot over noodles or rice, garnished with fresh parsley.",
      recipeName: "Beef Stroganoff",
      recipeImage: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_05",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Russian",
      cookingDescription: "Heat butter in a pan, cook the beef strips until browned. Add onions, garlic, and mushrooms, sautéing until soft...",
      recipeTags: "Creamy,Meat",
      ingredients: [
        {
          ingredientName: "Beef Sirloin",
          measure: "500g"
        },
        {
          ingredientName: "Onions",
          measure: "1 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "2 cloves minced"
        },
        {
          ingredientName: "Mushrooms",
          measure: "200g sliced"
        },
        {
          ingredientName: "Sour Cream",
          measure: "150g"
        },
        {
          ingredientName: "Dijon Mustard",
          measure: "1 tbs"
        },
        {
          ingredientName: "Beef Stock",
          measure: "200ml"
        },
        {
          ingredientName: "Butter",
          measure: "2 tbs"
        },
        {
          ingredientName: "Salt",
          measure: "pinch"
        },
        {
          ingredientName: "Pepper",
          measure: "pinch"
        }
      ],       
        
    },
    {
      idFood:'6',
      idCategory: "1",
      recipeInstructions:"To make Beef Tacos, heat 1 tablespoon of oil in a skillet over medium heat, then add 500g of ground beef and cook until browned, breaking it up with a spoon. Drain excess fat and stir in 1 packet of taco seasoning or a homemade mix of 1 tsp chili powder, 1/2 tsp cumin, 1/2 tsp paprika, 1/2 tsp garlic powder, and 1/2 tsp onion powder, along with 1/4 cup of water. Simmer for 5-7 minutes until the beef is fully cooked and the flavors meld. Warm taco shells or tortillas, then fill them with the seasoned beef. Top with your choice of shredded lettuce, diced tomatoes, grated cheese, sour cream, salsa, and guacamole. Serve and enjoy!",
      category:'Beef',
      recipeName: "Beef Tacos",
      recipeImage: "https://images.unsplash.com/photo-1619221882161-95135fca04e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_06",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Mexican",
      cookingDescription: "In a skillet, cook the beef until browned. Add onions, garlic, cumin, and chili powder, cooking for 5 minutes...",
      recipeTags: "Mexican,Taco",
      ingredients: [
        {
          ingredientName: "Ground Beef",
          measure: "500g"
        },
        {
          ingredientName: "Onions",
          measure: "1 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "2 cloves minced"
        },
        {
          ingredientName: "Cumin",
          measure: "1 tsp"
        },
        {
          ingredientName: "Chili Powder",
          measure: "1 tsp"
        },
        {
          ingredientName: "Tomatoes",
          measure: "2 chopped"
        },
        {
          ingredientName: "Lettuce",
          measure: "100g shredded"
        },
        {
          ingredientName: "Cheese",
          measure: "100g grated"
        },
        {
          ingredientName: "Sour Cream",
          measure: "100g"
        },
        {
          ingredientName: "Tortillas",
          measure: "6 small"
        }
      ],
      
        
    },
    {
      idCategory: "2",
      idFood:'7',
      recipeInstructions:"To make Chicken Curry, heat 2 tablespoons of oil in a large pan over medium heat, then sauté 1 chopped onion until soft. Add 2 minced garlic cloves, 1 tablespoon of grated ginger, and cook for 1-2 minutes. Stir in 2 tablespoons of curry powder, 1 teaspoon of cumin, and 1 teaspoon of turmeric, cooking for another minute until fragrant. Add 500g of diced chicken and brown the pieces on all sides. Pour in 400ml of coconut milk and 1 cup of chicken stock, bringing the mixture to a simmer. Cover and cook for 20-25 minutes until the chicken is tender. Season with salt and pepper to taste, then garnish with fresh cilantro. Serve the curry over rice or with naan bread.",
      category:'Chicken',
      recipeName: "Chicken Curry",
      recipeImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_01",
      recipeCategory: "Chicken",
      recipeOrigin: "Indian",
      cookingDescription: "Cook chicken with spices, tomatoes, and onions until tender.",
      recipeTags: "Spicy,Curry",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Onions",
          measure: "2 chopped"
        },
        {
          ingredientName: "Tomatoes",
          measure: "3 chopped"
        },
        {
          ingredientName: "Cumin",
          measure: "1 tsp"
        },
        {
          ingredientName: "Turmeric",
          measure: "1 tsp"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'8',
      recipeInstructions:"To make Chicken Alfredo, season 2 boneless, skinless chicken breasts with salt and pepper, then cook in a large skillet with 2 tablespoons of olive oil over medium heat until golden and cooked through, about 6-7 minutes per side. Remove the chicken, slice it, and set aside. In the same pan, melt 2 tablespoons of butter, add 3 minced garlic cloves, and sauté for 1 minute. Stir in 1 cup of heavy cream and bring to a simmer, then add 1 cup of grated Parmesan cheese, stirring until the sauce is smooth and thickened. Cook 300g of fettuccine pasta according to package instructions, drain, and toss it with the Alfredo sauce. Add the sliced chicken on top and garnish with parsley before serving.",
      category:'Chicken',
      recipeName: "Chicken Alfredo",

      recipeImage: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_02",
      recipeCategory: "Chicken",
      recipeOrigin: "Italian",
      cookingDescription: "Cook chicken with Alfredo sauce and serve with pasta.",
      recipeTags: "Pasta,Creamy",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "400g"
        },
        {
          ingredientName: "Cream",
          measure: "200ml"
        },
        {
          ingredientName: "Parmesan",
          measure: "100g grated"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'9',
      category:'Chicken',
      recipeInstructions:"To make Chicken Parmesan, start by seasoning 2 boneless, skinless chicken breasts with salt and pepper, then coat each in flour, dip in beaten eggs, and cover with breadcrumbs mixed with grated Parmesan cheese. Heat 2 tablespoons of olive oil in a skillet over medium heat and cook the breaded chicken breasts for 4-5 minutes per side until golden brown and crispy. Transfer the chicken to a baking dish, top each breast with marinara sauce and shredded mozzarella cheese. Bake in a preheated oven at 190°C (375°F) for 15-20 minutes until the cheese is melted and bubbly. Garnish with fresh basil and serve over pasta or with a side salad.",
      recipeName: "Chicken Parmesan",
      recipeImage: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_03",
      recipeCategory: "Chicken",
      recipeOrigin: "Italian",
      cookingDescription: "Bread and fry chicken cutlets, then top with marinara sauce and cheese.",
      recipeTags: "Breaded,Cheesy",
      ingredients: [
        {
          ingredientName: "Chicken Cutlets",
          measure: "4 pieces"
        },
        {
          ingredientName: "Marinara Sauce",
          measure: "1 cup"
        },
        {
          ingredientName: "Mozzarella Cheese",
          measure: "1 cup shredded"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'10',
      category:'Chicken',
      recipeInstructions:"To make Chicken Teriyaki, heat 1 tablespoon of oil in a skillet over medium heat, then cook 2 boneless, skinless chicken breasts, sliced into strips, until browned and cooked through, about 5-6 minutes. In a small bowl, whisk together 1/4 cup soy sauce, 2 tablespoons of honey, 1 tablespoon of rice vinegar, 1 tablespoon of sesame oil, 1 tablespoon of cornstarch, and 2 minced garlic cloves. Pour the sauce over the cooked chicken and simmer for 3-4 minutes until the sauce thickens and coats the chicken. Serve the chicken teriyaki with steamed rice and garnish with sesame seeds and chopped green onions.",
      recipeName: "Chicken Teriyaki",
      recipeImage: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_04",
      recipeCategory: "Chicken",
      recipeOrigin: "Japanese",
      cookingDescription: "Marinate chicken in teriyaki sauce and grill until cooked.",
      recipeTags: "Grilled,Asian",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Teriyaki Sauce",
          measure: "1/2 cup"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'11',
      recipeInstructions:"To make Chicken Fajitas, heat 1 tablespoon of oil in a large skillet over medium heat, then cook 2 boneless, skinless chicken breasts, sliced into thin strips, seasoned with 1 teaspoon of chili powder, 1 teaspoon of cumin, 1/2 teaspoon of paprika, salt, and pepper. Cook the chicken for 5-6 minutes until browned and cooked through. Remove the chicken from the skillet and set aside. In the same pan, sauté 1 sliced onion and 2 sliced bell peppers for about 4-5 minutes until softened. Return the chicken to the skillet and toss to combine with the vegetables. Serve the fajitas with warm tortillas and your choice of toppings like guacamole, sour cream, salsa, and cheese.",
      category:'Chicken',
      recipeName: "Chicken Fajitas",
      recipeImage: "https://images.unsplash.com/photo-1689773976415-293dd893f77e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_05",
      recipeCategory: "Chicken",
      recipeOrigin: "Mexican",
      cookingDescription: "Cook chicken with bell peppers and onions, serve in tortillas.",
      recipeTags: "Mexican,Spicy",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Bell Peppers",
          measure: "2 sliced"
        },
        {
          ingredientName: "Onions",
          measure: "1 sliced"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'12',
      recipeInstructions:"To make a Chicken Caesar Salad, start by grilling or pan-searing 2 boneless, skinless chicken breasts seasoned with salt and pepper until cooked through, about 6-7 minutes per side, then let them rest before slicing. In a large bowl, combine 6 cups of chopped romaine lettuce, the sliced chicken, and 1/2 cup of grated Parmesan cheese. For the dressing, whisk together 1/4 cup of mayonnaise, 2 tablespoons of lemon juice, 1 teaspoon of Dijon mustard, 1 minced garlic clove, and salt and pepper to taste. Drizzle the dressing over the salad and toss gently to combine. Top with croutons and extra Parmesan before serving.",
      category:'Chicken',
      recipeName: "Chicken Caesar Salad",
      recipeImage: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_06",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription: "Grill chicken and toss with romaine lettuce, croutons, and Caesar dressing.",
      recipeTags: "Salad,Healthy",
      ingredients: [
        {
          ingredientName: "Chicken Breast",
          measure: "2 grilled"
        },
        {
          ingredientName: "Romaine Lettuce",
          measure: "1 head chopped"
        },
        {
          ingredientName: "Croutons",
          measure: "1 cup"
        },
        {
          ingredientName: "Caesar Dressing",
          measure: "1/4 cup"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'13',
      recipeInstructions:"To make Buffalo Chicken Wings, preheat your oven to 200°C (400°F) or heat oil in a deep fryer. If using the oven, line a baking sheet with aluminum foil and place a wire rack on top. Toss 1 kg of chicken wings with salt, pepper, and 1 teaspoon of baking powder for extra crispiness, then arrange them in a single layer on the rack. Bake for about 40-45 minutes, turning halfway, until golden and crispy. Meanwhile, in a saucepan, melt 1/2 cup of unsalted butter and whisk in 1/2 cup of hot sauce (like Frank's RedHot) and 1 tablespoon of vinegar. Once the wings are done, toss them in the Buffalo sauce until well coated. Serve hot with celery sticks and blue cheese or ranch dressing for dipping.",
      category:'Chicken',
      recipeName: "Buffalo Chicken Wings",
      recipeImage: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_07",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription: "Deep-fry chicken wings and toss in buffalo sauce.",
      recipeTags: "Spicy,Fried",
      ingredients: [
        {
          ingredientName: "Chicken Wings",
          measure: "12 pieces"
        },
        {
          ingredientName: "Buffalo Sauce",
          measure: "1/2 cup"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'14',
      recipeInstructions:"To make Chicken and Rice, heat 2 tablespoons of oil in a large skillet over medium heat, then season 4 bone-in, skin-on chicken thighs with salt and pepper and brown them on both sides for about 5-7 minutes. Remove the chicken and set aside. In the same skillet, add 1 chopped onion and 2 minced garlic cloves, sautéing until the onion is translucent. Stir in 1 cup of long-grain rice, allowing it to toast for 1-2 minutes. Add 2 cups of chicken broth, 1 teaspoon of paprika, and the browned chicken thighs back to the skillet. Bring to a simmer, cover, and reduce the heat to low, cooking for 20-25 minutes or until the rice is tender and the chicken is cooked through. Fluff the rice with a fork, garnish with chopped parsley, and serve hot.",
      category:'Chicken',
      recipeName: "Chicken and Rice",
      recipeImage: "https://images.unsplash.com/photo-1617651523904-8768096faf40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_08",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription: "Cook chicken with rice and seasonings in a single pot.",
      recipeTags: "Comfort Food,One-Pot",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Rice",
          measure: "1 cup"
        },
        {
          ingredientName: "Chicken Broth",
          measure: "2 cups"
        }
      ],
    },
  ]);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  // Filter foods by active category during rendering
  const filteredfoods = allFood.filter(
    (food) => food.category === activeCategory
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        testID="scrollContainer"
      >
        <View style={styles.headerContainer} testID="headerContainer">
        <Image
            source={{uri:'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png'}}
            style={styles.avatar}
          />
          <Text style={styles.greetingText}>Hello, User!</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Make your own food,</Text>
          <Text style={styles.subtitle}>
            stay at <Text style={styles.highlight}>home</Text>
          </Text>
        </View>

        <View testID="categoryList">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            onChangeCategory={handleChangeCategory}
          />
        </View>

        <View testID="foodList">
          <FoodItems foods={filteredfoods} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // white
  },
  scrollContainer: {
    paddingBottom: 50,
    paddingTop: hp(14), // pt-14 equivalent
  },
  headerContainer: {
    marginHorizontal: wp(4), // mx-4 equivalent
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(-8.5),
  },
  avatar: {
    height: hp(5),
    width: hp(5.5),
  },
  greetingText: {
    fontSize: hp(1.7),
    color: "#52525B", // neutral-600
    fontWeight: "600", // font-semibold
    backgroundColor: "#F3F4F6", // gray-100
    paddingHorizontal: wp(2), // px-2
    paddingVertical: hp(0.5), // py-1
    borderRadius: 9999, // full rounded
    textAlign: "center",
  },
  titleContainer: {
    marginHorizontal: wp(4), // mx-4
    marginBottom: hp(2), // mb-2
  },
  title: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  subtitle: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  highlight: {
    color: "#F59E0B", // amber-400
  },
});
