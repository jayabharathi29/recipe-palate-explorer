
import { RecipeCardProps } from '../components/RecipeCard';

interface RecipeDetails extends RecipeCardProps {
  description: string;
  ingredients: string[];
  instructions: string[];
  cuisine: string;
  dietary: string;
}

export const mockRecipes: RecipeDetails[] = [
  {
    id: '1',
    title: 'Homemade Margherita Pizza',
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80',
    preparationTime: 30,
    servings: 4,
    difficulty: 'Medium',
    description: 'Classic Italian pizza with fresh tomatoes, mozzarella, and basil',
    ingredients: [
      '500g pizza dough',
      '200g San Marzano tomatoes, crushed',
      '200g fresh mozzarella cheese, torn into pieces',
      'Fresh basil leaves',
      '2 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 500°F (260°C) with a pizza stone if available',
      'Roll out dough to desired thickness on a floured surface',
      'Spread crushed tomatoes evenly, leaving a small border for the crust',
      'Distribute mozzarella pieces evenly',
      'Bake for 10-12 minutes until crust is golden and cheese is bubbly',
      'Remove from oven, add fresh basil leaves, drizzle with olive oil',
      'Season with salt and pepper before serving'
    ],
    cuisine: 'Italian',
    dietary: 'Vegetarian'
  },
  {
    id: '2',
    title: 'Fresh Garden Salad',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
    preparationTime: 15,
    servings: 2,
    difficulty: 'Easy',
    description: 'A refreshing salad packed with colorful vegetables and a tangy dressing',
    ingredients: [
      'Mixed salad greens',
      '1 cucumber, sliced',
      '1 bell pepper, diced',
      'Cherry tomatoes, halved',
      '1 avocado, sliced',
      '1/4 cup nuts or seeds',
      '3 tbsp olive oil',
      '1 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Wash and dry all vegetables thoroughly',
      'Combine all vegetables in a large bowl',
      'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper',
      'Pour dressing over salad just before serving',
      'Toss gently to combine',
      'Top with nuts or seeds'
    ],
    cuisine: 'International',
    dietary: 'Vegetarian'
  },
  {
    id: '3',
    title: 'Grilled Salmon',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80',
    preparationTime: 25,
    servings: 3,
    difficulty: 'Medium',
    description: 'Perfectly grilled salmon with a herb marinade and vegetable garnish',
    ingredients: [
      '3 salmon fillets (about 150g each)',
      '2 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 lemon, juiced and zested',
      '2 tbsp fresh dill, chopped',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a bowl, mix olive oil, garlic, lemon juice, lemon zest, dill, salt, and pepper',
      'Place salmon fillets in a shallow dish and pour marinade over them',
      'Let marinate for at least 30 minutes',
      'Preheat grill to medium-high heat',
      'Grill salmon for 4-5 minutes per side until it flakes easily with a fork',
      'Serve with lemon wedges and fresh dill'
    ],
    cuisine: 'International',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '4',
    title: 'Chocolate Brownie with Ice Cream',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80',
    preparationTime: 45,
    servings: 6,
    difficulty: 'Medium',
    description: 'Rich, fudgy chocolate brownies served with vanilla ice cream',
    ingredients: [
      '200g dark chocolate',
      '175g butter',
      '325g caster sugar',
      '3 eggs',
      '130g plain flour',
      '50g cocoa powder',
      'Vanilla ice cream for serving'
    ],
    instructions: [
      'Preheat oven to 350°F (180°C) and line a baking tin with parchment paper',
      'Melt chocolate and butter together in a heatproof bowl over simmering water',
      'Whisk sugar and eggs together until light and fluffy',
      'Fold in melted chocolate mixture',
      'Sift in flour and cocoa powder, fold gently',
      'Pour into prepared tin and bake for 25-30 minutes',
      'Allow to cool before cutting into squares',
      'Serve warm with a scoop of vanilla ice cream'
    ],
    cuisine: 'International',
    dietary: 'Vegetarian'
  },
  {
    id: '5',
    title: 'Vegetable Fried Rice',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80',
    preparationTime: 20,
    servings: 4,
    difficulty: 'Easy',
    description: 'Quick and easy vegetable fried rice, perfect for a weeknight dinner',
    ingredients: [
      '3 cups cooked rice (preferably day-old)',
      '2 tbsp vegetable oil',
      '2 eggs, beaten',
      '1 onion, diced',
      '2 carrots, diced',
      '1/2 cup peas',
      '2 cloves garlic, minced',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      'Green onions for garnish'
    ],
    instructions: [
      'Heat oil in a large wok or pan over medium-high heat',
      'Add beaten eggs and scramble until cooked',
      'Remove eggs and set aside',
      'In the same pan, add more oil if needed and sauté onions until translucent',
      'Add carrots and peas, cook for 3-4 minutes',
      'Add garlic and cook for another minute',
      'Add cooked rice, breaking up any clumps',
      'Stir in soy sauce and sesame oil',
      'Mix in scrambled eggs',
      'Garnish with chopped green onions before serving'
    ],
    cuisine: 'Chinese',
    dietary: 'Vegetarian'
  },
  {
    id: '6',
    title: 'Sushi Rolls',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    preparationTime: 60,
    servings: 4,
    difficulty: 'Hard',
    description: 'Homemade sushi rolls with fresh salmon, avocado, and cucumber',
    ingredients: [
      '2 cups sushi rice',
      '3 tbsp rice vinegar',
      '1 tbsp sugar',
      '1 tsp salt',
      '6 nori sheets',
      '200g fresh salmon, sliced',
      '1 avocado, sliced',
      '1 cucumber, julienned',
      'Soy sauce for serving',
      'Wasabi and pickled ginger for serving'
    ],
    instructions: [
      'Cook sushi rice according to package instructions',
      'Mix rice vinegar, sugar, and salt, then fold into cooked rice',
      'Let rice cool to room temperature',
      'Place a nori sheet on a bamboo rolling mat',
      'Spread a thin layer of rice over the nori, leaving a border at the top',
      'Arrange salmon, avocado, and cucumber in a line across the middle',
      'Using the mat, roll the sushi tightly from the bottom',
      'Wet the border of the nori to seal the roll',
      'Slice the roll into 6-8 pieces with a sharp knife',
      'Serve with soy sauce, wasabi, and pickled ginger'
    ],
    cuisine: 'Japanese',
    dietary: 'Non-Vegetarian'
  },
  
  // Additional Chinese Recipes
  {
    id: '7',
    title: 'Kung Pao Chicken',
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80',
    preparationTime: 30,
    servings: 4,
    difficulty: 'Medium',
    description: 'Spicy and tangy stir-fried chicken with peanuts, vegetables, and chili peppers',
    ingredients: [
      '500g chicken breast, cubed',
      '1/2 cup unsalted peanuts',
      '2 red bell peppers, diced',
      '2 zucchinis, diced',
      '6 dried red chilies',
      '3 cloves garlic, minced',
      '1 inch ginger, minced',
      '3 tbsp soy sauce',
      '2 tbsp rice vinegar',
      '1 tbsp brown sugar',
      '1 tbsp cornstarch',
      '2 tbsp vegetable oil',
      'Green onions for garnish'
    ],
    instructions: [
      'Mix chicken with 1 tbsp soy sauce and cornstarch, let marinate for 15 minutes',
      'Heat oil in a wok over high heat',
      'Add dried chilies and stir-fry until fragrant (about 30 seconds)',
      'Add chicken and stir-fry until nearly cooked through',
      'Add garlic and ginger, stir-fry for 30 seconds',
      'Add bell peppers and zucchini, stir-fry for 2 minutes',
      'Mix remaining soy sauce, rice vinegar, and brown sugar in a small bowl',
      'Pour sauce over the chicken mixture and stir well',
      'Add peanuts and cook for another minute',
      'Garnish with green onions and serve with rice'
    ],
    cuisine: 'Chinese',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '8',
    title: 'Dim Sum Dumplings',
    imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80',
    preparationTime: 60,
    servings: 6,
    difficulty: 'Hard',
    description: 'Delicate steamed dumplings filled with a savory mixture of shrimp and pork',
    ingredients: [
      '200g ground pork',
      '200g shrimp, peeled and finely chopped',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp rice wine',
      '1 tsp sugar',
      '1/2 tsp white pepper',
      '2 green onions, finely chopped',
      '1 inch ginger, grated',
      '30 dumpling wrappers',
      'Dipping sauce: soy sauce, vinegar, chili oil'
    ],
    instructions: [
      'Combine pork, shrimp, soy sauce, sesame oil, rice wine, sugar, white pepper, green onions, and ginger in a bowl',
      'Mix well and let it rest for 30 minutes in the refrigerator',
      'Place 1 tablespoon of filling in the center of each dumpling wrapper',
      'Moisten the edges of the wrapper with water',
      'Fold and pleat the edges to seal the dumpling',
      'Arrange dumplings in a steamer lined with cabbage leaves or parchment paper',
      'Steam over boiling water for 8-10 minutes until cooked through',
      'Prepare dipping sauce by mixing soy sauce, vinegar, and a few drops of chili oil',
      'Serve hot with dipping sauce'
    ],
    cuisine: 'Chinese',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '9',
    title: 'Mapo Tofu',
    imageUrl: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?auto=format&fit=crop&q=80',
    preparationTime: 25,
    servings: 4,
    difficulty: 'Medium',
    description: 'Spicy Sichuan tofu dish with minced meat, doubanjiang, and Sichuan peppercorns',
    ingredients: [
      '500g soft tofu, cubed',
      '200g ground pork',
      '2 tbsp doubanjiang (Sichuan bean paste)',
      '1 tbsp fermented black beans, rinsed and chopped',
      '3 cloves garlic, minced',
      '1 inch ginger, minced',
      '2 green onions, chopped',
      '1 tbsp Sichuan peppercorns, ground',
      '2 tbsp chili oil',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '1 cup chicken stock',
      '1 tbsp cornstarch mixed with 2 tbsp water'
    ],
    instructions: [
      'Gently place tofu cubes in salted hot water for 2 minutes, then drain',
      'Heat oil in a wok over medium heat',
      'Add ground pork and stir-fry until browned',
      'Add doubanjiang, black beans, garlic, and ginger, stir-fry until fragrant',
      'Pour in chicken stock, soy sauce, and sugar, bring to a simmer',
      'Carefully add tofu cubes, simmer for 5 minutes',
      'Stir in cornstarch mixture to thicken the sauce',
      'Sprinkle with ground Sichuan peppercorns and chopped green onions',
      'Drizzle with chili oil before serving',
      'Serve hot with steamed rice'
    ],
    cuisine: 'Chinese',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '10',
    title: 'Sweet and Sour Pork',
    imageUrl: 'https://images.unsplash.com/photo-1525197134303-7b6be01a48cb?auto=format&fit=crop&q=80',
    preparationTime: 45,
    servings: 4,
    difficulty: 'Medium',
    description: 'Crispy pork pieces coated in a tangy sweet and sour sauce with bell peppers and pineapple',
    ingredients: [
      '500g pork loin, cut into 1-inch cubes',
      '1 egg, beaten',
      '1/2 cup cornstarch',
      '1/4 cup flour',
      '1 red bell pepper, chunked',
      '1 green bell pepper, chunked',
      '1 onion, chunked',
      '1 cup pineapple chunks',
      '3 tbsp vegetable oil',
      'For the sauce:',
      '1/3 cup rice vinegar',
      '1/3 cup brown sugar',
      '3 tbsp ketchup',
      '1 tbsp soy sauce',
      '1 tbsp cornstarch mixed with 2 tbsp water'
    ],
    instructions: [
      'Season pork with salt and pepper, then coat with beaten egg',
      'Mix cornstarch and flour, then dredge the pork pieces',
      'Heat oil in a wok and deep-fry pork until golden and crispy',
      'Remove pork and drain on paper towels',
      'In the same wok, stir-fry bell peppers and onion for 2 minutes',
      'Add pineapple chunks and stir-fry for another minute',
      'In a small bowl, mix vinegar, sugar, ketchup, and soy sauce',
      'Pour sauce mixture into the wok and bring to a simmer',
      'Add cornstarch mixture to thicken the sauce',
      'Return fried pork to the wok and toss to coat with sauce',
      'Serve immediately with steamed rice'
    ],
    cuisine: 'Chinese',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '11',
    title: 'Vegetable Spring Rolls',
    imageUrl: 'https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?auto=format&fit=crop&q=80',
    preparationTime: 40,
    servings: 6,
    difficulty: 'Medium',
    description: 'Crispy spring rolls filled with vegetables and served with a sweet chili dipping sauce',
    ingredients: [
      '20 spring roll wrappers',
      '2 carrots, julienned',
      '1 cup cabbage, finely shredded',
      '1 cup bean sprouts',
      '1/2 cup mushrooms, finely chopped',
      '2 cloves garlic, minced',
      '1 tbsp ginger, grated',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp vegetable oil',
      'Vegetable oil for frying',
      'Sweet chili sauce for serving'
    ],
    instructions: [
      'Heat vegetable oil in a wok over medium-high heat',
      'Add garlic and ginger, stir-fry until fragrant',
      'Add carrots, cabbage, and mushrooms, stir-fry for 3-4 minutes',
      'Add bean sprouts, soy sauce, and sesame oil, cook for 1 minute more',
      'Remove from heat and allow to cool completely',
      'Place a spring roll wrapper on a clean surface in a diamond position',
      'Put 2 tablespoons of filling near the bottom corner',
      'Fold the bottom corner over the filling, then fold in the side corners',
      'Roll tightly towards the top corner, sealing with water',
      'Heat oil to 350°F and deep-fry rolls until golden brown',
      'Drain on paper towels and serve with sweet chili sauce'
    ],
    cuisine: 'Chinese',
    dietary: 'Vegetarian'
  },
  
  // Additional Indian Recipes
  {
    id: '12',
    title: 'Butter Chicken',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80',
    preparationTime: 50,
    servings: 6,
    difficulty: 'Medium',
    description: 'Rich and creamy tomato-based curry with tender chicken pieces',
    ingredients: [
      '800g chicken thighs, boneless and skinless',
      'For the marinade:',
      '1 cup yogurt',
      '2 tbsp lemon juice',
      '2 tsp turmeric powder',
      '2 tbsp garam masala',
      '2 tbsp cumin powder',
      '2 tbsp coriander powder',
      'For the sauce:',
      '4 tbsp butter',
      '2 onions, finely chopped',
      '4 cloves garlic, minced',
      '2 tbsp ginger, grated',
      '2 green chilies, slit',
      '3 cups tomato puree',
      '1 cup heavy cream',
      '2 tbsp honey',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'Cut chicken into bite-sized pieces',
      'Mix all marinade ingredients and coat chicken well',
      'Refrigerate for at least 2 hours, preferably overnight',
      'Heat 2 tbsp butter in a large pot over medium heat',
      'Add chicken pieces and cook until browned, then set aside',
      'In the same pot, add remaining butter, onions, garlic, and ginger',
      'Sauté until onions are soft and translucent',
      'Add green chilies and tomato puree, simmer for 15 minutes',
      'Return chicken to the pot and cook for 10 minutes',
      'Stir in heavy cream and honey, simmer for 5 more minutes',
      'Garnish with fresh coriander and serve with naan or rice'
    ],
    cuisine: 'Indian',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '13',
    title: 'Palak Paneer',
    imageUrl: 'https://images.unsplash.com/photo-1596450514659-9fd242bb5613?auto=format&fit=crop&q=80',
    preparationTime: 40,
    servings: 4,
    difficulty: 'Medium',
    description: 'Creamy spinach curry with soft cubes of paneer cheese',
    ingredients: [
      '250g paneer, cubed',
      '500g spinach leaves',
      '2 onions, finely chopped',
      '2 tomatoes, chopped',
      '3 cloves garlic, minced',
      '1 inch ginger, grated',
      '2 green chilies, chopped',
      '1 tsp cumin seeds',
      '1 tsp garam masala',
      '1/2 tsp turmeric powder',
      '1/2 cup cream',
      '2 tbsp butter or ghee',
      '1 tsp kasuri methi (dried fenugreek leaves)',
      'Salt to taste'
    ],
    instructions: [
      'Blanch spinach in boiling water for 3 minutes, then immerse in cold water',
      'Blend blanched spinach into a smooth puree',
      'Heat butter in a pan, add cumin seeds and let them splutter',
      'Add onions, garlic, ginger, and green chilies, sauté until golden brown',
      'Add chopped tomatoes and cook until soft',
      'Add turmeric, garam masala, and salt, cook for 2 minutes',
      'Add spinach puree and simmer for 5 minutes',
      'Pan-fry paneer cubes separately until golden',
      'Add paneer to the spinach gravy and simmer for 5 minutes',
      'Stir in cream and kasuri methi',
      'Serve hot with naan or rice'
    ],
    cuisine: 'Indian',
    dietary: 'Vegetarian'
  },
  {
    id: '14',
    title: 'Chicken Biryani',
    imageUrl: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80',
    preparationTime: 70,
    servings: 6,
    difficulty: 'Hard',
    description: 'Fragrant rice dish layered with spiced chicken and aromatic herbs',
    ingredients: [
      '700g chicken, cut into pieces',
      '3 cups basmati rice, soaked for 30 minutes',
      '3 onions, thinly sliced',
      '3 tomatoes, chopped',
      '1/4 cup yogurt',
      '4 cloves garlic, minced',
      '2 inch ginger, grated',
      '4 green chilies, slit',
      '1/4 cup mint leaves, chopped',
      '1/4 cup coriander leaves, chopped',
      '3 bay leaves',
      '5 cardamom pods',
      '1 cinnamon stick',
      '5 cloves',
      '2 tsp biryani masala',
      '1 tsp turmeric powder',
      '1/2 cup fried onions',
      'Saffron strands soaked in 1/4 cup warm milk',
      '3 tbsp ghee',
      'Salt to taste'
    ],
    instructions: [
      'Marinate chicken with yogurt, half of the ginger-garlic paste, turmeric, and salt for 1 hour',
      'Heat ghee in a heavy-bottomed pot, add bay leaves, cardamom, cinnamon, and cloves',
      'Add sliced onions and sauté until golden brown',
      'Add remaining ginger-garlic paste and green chilies, sauté for 2 minutes',
      'Add tomatoes and cook until soft and oil separates',
      'Add marinated chicken, biryani masala, and cook until chicken is tender',
      'In another pot, bring water to boil with salt and whole spices',
      'Cook rice until 70% done, then drain',
      'Layer half the rice over the chicken, sprinkle half the mint and coriander leaves',
      'Layer the remaining rice, pour saffron milk, and top with fried onions',
      'Cover with a tight lid and cook on low heat for 20 minutes',
      'Let it rest for 10 minutes before serving'
    ],
    cuisine: 'Indian',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '15',
    title: 'Vegetable Samosas',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
    preparationTime: 60,
    servings: 8,
    difficulty: 'Medium',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    ingredients: [
      'For the dough:',
      '2 cups all-purpose flour',
      '1/4 cup ghee or oil',
      '1/2 tsp salt',
      'Water as needed',
      'For the filling:',
      '4 potatoes, boiled and mashed',
      '1 cup green peas',
      '1 onion, finely chopped',
      '2 green chilies, chopped',
      '1 tbsp ginger, grated',
      '1 tsp cumin seeds',
      '1 tsp coriander powder',
      '1 tsp garam masala',
      '1/2 tsp amchur (dry mango powder)',
      '1/4 cup fresh coriander, chopped',
      'Oil for deep frying',
      'Salt to taste'
    ],
    instructions: [
      'Mix flour, salt, and ghee until it resembles breadcrumbs',
      'Add water gradually to form a firm dough, cover and rest for 30 minutes',
      'Heat oil in a pan, add cumin seeds and let them splutter',
      'Add onions and sauté until translucent',
      'Add green chilies, ginger, and spices, cook for 2 minutes',
      'Add mashed potatoes, peas, and salt, mix well',
      'Cook for 5 minutes, add coriander leaves, and let it cool',
      'Divide the dough into equal portions and roll into thin circles',
      'Cut each circle in half, fold into a cone, and fill with potato mixture',
      'Seal the edges with water and ensure there are no gaps',
      'Heat oil and deep-fry samosas until golden brown and crispy',
      'Serve hot with mint chutney and tamarind sauce'
    ],
    cuisine: 'Indian',
    dietary: 'Vegetarian'
  },
  {
    id: '16',
    title: 'Chicken Tikka Masala',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80',
    preparationTime: 55,
    servings: 4,
    difficulty: 'Medium',
    description: 'Grilled marinated chicken pieces in a spiced tomato-based sauce',
    ingredients: [
      'For chicken tikka:',
      '500g chicken breast, cut into pieces',
      '1/2 cup yogurt',
      '1 tbsp lemon juice',
      '2 tsp ginger-garlic paste',
      '1 tsp red chili powder',
      '1 tsp turmeric powder',
      '1 tsp garam masala',
      'For the masala:',
      '2 onions, finely chopped',
      '3 tomatoes, pureed',
      '3 cloves garlic, minced',
      '1 inch ginger, grated',
      '1 tsp cumin powder',
      '1 tsp coriander powder',
      '1 tsp red chili powder',
      '1/2 tsp turmeric powder',
      '1 tsp garam masala',
      '1/2 cup cream',
      '2 tbsp butter',
      'Fresh coriander for garnish',
      'Salt to taste'
    ],
    instructions: [
      'Marinate chicken with yogurt, lemon juice, ginger-garlic paste, and spices for at least 2 hours',
      'Thread marinated chicken onto skewers and grill until charred and cooked through',
      'In a pan, heat butter and sauté onions until golden brown',
      'Add ginger and garlic, sauté for 2 minutes',
      'Add tomato puree and cook until oil separates',
      'Add all the spices and salt, cook for 2 minutes',
      'Add 1/2 cup water and simmer for 5 minutes',
      'Add grilled chicken pieces and simmer for 10 minutes',
      'Stir in cream and simmer for 5 more minutes',
      'Garnish with fresh coriander and serve with naan or rice'
    ],
    cuisine: 'Indian',
    dietary: 'Non-Vegetarian'
  },
  
  // Additional Arabic Recipes
  {
    id: '17',
    title: 'Chicken Shawarma',
    imageUrl: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80',
    preparationTime: 60,
    servings: 4,
    difficulty: 'Medium',
    description: 'Tender marinated chicken wrapped in soft flatbread with tahini sauce',
    ingredients: [
      '500g chicken thighs, boneless and skinless',
      'For the marinade:',
      '3 tbsp olive oil',
      '3 tbsp lemon juice',
      '3 cloves garlic, minced',
      '1 tsp cumin powder',
      '1 tsp paprika',
      '1/2 tsp turmeric',
      '1/2 tsp cinnamon',
      '1/4 tsp cardamom powder',
      'For serving:',
      '4 flatbreads or pita',
      '1 onion, thinly sliced',
      '1 tomato, sliced',
      '1 cucumber, sliced',
      'Fresh parsley, chopped',
      'For tahini sauce:',
      '1/4 cup tahini paste',
      '1/4 cup water',
      '2 tbsp lemon juice',
      '1 clove garlic, minced',
      'Salt to taste'
    ],
    instructions: [
      'Slice chicken thighs into thin strips',
      'Mix all marinade ingredients in a bowl',
      'Add chicken and marinate for at least 2 hours, preferably overnight',
      'Preheat oven to 425°F (220°C)',
      'Spread marinated chicken on a baking sheet and bake for 25-30 minutes until cooked and slightly crispy',
      'Prepare tahini sauce by whisking together tahini, water, lemon juice, garlic, and salt',
      'Warm flatbreads or pita bread',
      'Assemble by placing chicken on bread, adding vegetables, and drizzling with tahini sauce',
      'Sprinkle with chopped parsley',
      'Roll or fold and serve immediately'
    ],
    cuisine: 'Arabic',
    dietary: 'Non-Vegetarian'
  },
  {
    id: '18',
    title: 'Hummus',
    imageUrl: 'https://images.unsplash.com/photo-1576272481980-712e5f58c8ce?auto=format&fit=crop&q=80',
    preparationTime: 20,
    servings: 6,
    difficulty: 'Easy',
    description: 'Creamy chickpea dip with tahini, lemon, and olive oil',
    ingredients: [
      '2 cans (15 oz each) chickpeas, drained and rinsed',
      '1/4 cup fresh lemon juice',
      '1/4 cup tahini paste',
      '2 cloves garlic, minced',
      '2 tbsp olive oil, plus more for serving',
      '1/2 tsp ground cumin',
      '2-3 tbsp water',
      'Pinch of salt',
      'Paprika for garnish',
      'Fresh parsley, chopped, for garnish'
    ],
    instructions: [
      'In a food processor, combine chickpeas, lemon juice, tahini, garlic, olive oil, cumin, and salt',
      'Process until smooth, adding water as needed to achieve desired consistency',
      'Taste and adjust seasoning if necessary',
      'Transfer to a serving bowl, drizzle with olive oil',
      'Sprinkle with paprika and chopped parsley',
      'Serve with warm pita bread or vegetable sticks'
    ],
    cuisine: 'Arabic',
    dietary: 'Vegetarian'
  },
  {
    id: '19',
    title: 'Falafel',
    imageUrl: 'https://images.unsplash.com/photo-1593001874117-ff5372ebb08c?auto=format&fit=crop&q=80',
    preparationTime: 40,
    servings: 4,
    difficulty: 'Medium',
    description: 'Crispy chickpea fritters with herbs and spices',
    ingredients: [
      '2 cups dried chickpeas, soaked overnight (do not use canned)',
      '1 onion, roughly chopped',
      '4 cloves garlic',
      '1 cup fresh parsley',
      '1 cup fresh cilantro',
      '2 tsp cumin powder',
      '1 tsp coriander powder',
      '1/2 tsp cardamom powder',
      '1/4 tsp cayenne pepper',
      '1 tsp baking powder',
      '4 tbsp flour',
      'Vegetable oil for frying',
      'Salt to taste'
    ],
    instructions: [
      'Drain and rinse the soaked chickpeas',
      'Add chickpeas, onion, garlic, herbs, and spices to a food processor',
      'Pulse until mixture is finely ground but not pureed',
      'Transfer to a bowl, add flour and baking powder, mix well',
      'Cover and refrigerate for at least 1 hour',
      'Shape mixture into small balls or patties',
      'Heat oil to 350°F (175°C) in a deep fryer or heavy pot',
      'Fry falafels in batches until golden brown and crispy (about 3-4 minutes)',
      'Drain on paper towels',
      'Serve in pita bread with tahini sauce, vegetables, and pickles'
    ],
    cuisine: 'Arabic',
    dietary: 'Vegetarian'
  },
  {
    id: '20',
    title: 'Tabbouleh',
    imageUrl: 'https://images.unsplash.com/photo-1580687572594-099b23530ab8?auto=format&fit=crop&q=80',
    preparationTime: 25,
    servings: 6,
    difficulty: 'Easy',
    description: 'Fresh and vibrant Lebanese salad with parsley, mint, and bulgur wheat',
    ingredients: [
      '1 cup bulgur wheat, fine grade',
      '4 cups fresh parsley, finely chopped',
      '1 cup fresh mint leaves, chopped',
      '4 green onions, finely sliced',
      '2 tomatoes, diced',
      '1 cucumber, diced',
      '1/4 cup olive oil',
      '1/4 cup lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Rinse bulgur wheat and soak in hot water for 15 minutes until tender, then drain well',
      'In a large bowl, combine parsley, mint, green onions, tomatoes, and cucumber',
      'Add the drained bulgur wheat and mix gently',
      'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper',
      'Pour dressing over the salad and toss to combine',
      'Refrigerate for at least 30 minutes before serving to allow flavors to meld',
      'Serve chilled as a side dish or with pita bread'
    ],
    cuisine: 'Arabic',
    dietary: 'Vegetarian'
  }
];

// Adding mock filter and search functions since they're imported in Recipes.tsx but weren't defined in mockData.ts
export const filterRecipes = async (filters: { cuisine: string[], dietary: string[], difficulty: string[] }) => {
  return mockRecipes.filter(recipe => {
    // Filter by cuisine if any selected
    if (filters.cuisine.length > 0 && !filters.cuisine.includes(recipe.cuisine)) {
      return false;
    }
    
    // Filter by dietary if any selected
    if (filters.dietary.length > 0 && !filters.dietary.includes(recipe.dietary)) {
      return false;
    }
    
    // Filter by difficulty if any selected
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(recipe.difficulty)) {
      return false;
    }
    
    return true;
  });
};

export const searchRecipes = async (query: string) => {
  const searchTerm = query.toLowerCase();
  return mockRecipes.filter(recipe => {
    return (
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.cuisine.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
  });
};

export const fetchRecipes = async () => {
  return mockRecipes;
};

export const fetchRecipeById = async (id: string) => {
  return mockRecipes.find(recipe => recipe.id === id) || null;
};

export const fetchRecipesByCuisine = async (cuisineId: string) => {
  // In the mock data, we're using cuisine name instead of ID
  // This is just for mock purposes, in the real app with Supabase, we would use proper IDs
  const cuisineName = cuisineId === "1" ? "Italian" : 
                      cuisineId === "2" ? "Chinese" :
                      cuisineId === "3" ? "Mexican" :
                      cuisineId === "4" ? "Indian" :
                      cuisineId === "5" ? "Japanese" :
                      cuisineId === "6" ? "Arabic" : "";
  
  return mockRecipes.filter(recipe => recipe.cuisine === cuisineName);
};
