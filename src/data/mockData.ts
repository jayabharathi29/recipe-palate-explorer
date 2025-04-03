
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
  }
];

export const getRecipeById = (id: string): RecipeDetails | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};

export const getRecipesByCuisine = (cuisine: string): RecipeDetails[] => {
  return mockRecipes.filter(recipe => 
    recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
  );
};

export const searchRecipes = (query: string): RecipeDetails[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowercaseQuery) ||
    recipe.description.toLowerCase().includes(lowercaseQuery) ||
    recipe.cuisine.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(lowercaseQuery)
    )
  );
};

export const filterRecipes = (
  filters: {
    cuisine: string[];
    dietary: string[];
    difficulty: string[];
  }
): RecipeDetails[] => {
  return mockRecipes.filter(recipe => {
    // If no filters are applied, return all recipes
    if (
      filters.cuisine.length === 0 &&
      filters.dietary.length === 0 &&
      filters.difficulty.length === 0
    ) {
      return true;
    }
    
    // Check cuisine filter
    const cuisineMatch = filters.cuisine.length === 0 ||
      filters.cuisine.some(c => 
        recipe.cuisine.toLowerCase().includes(c.toLowerCase())
      );
    
    // Check dietary filter
    const dietaryMatch = filters.dietary.length === 0 ||
      filters.dietary.some(d => 
        recipe.dietary.toLowerCase().includes(d.toLowerCase())
      );
    
    // Check difficulty filter
    const difficultyMatch = filters.difficulty.length === 0 ||
      filters.difficulty.includes(recipe.difficulty);
    
    return cuisineMatch && dietaryMatch && difficultyMatch;
  });
};
