
import { supabase } from "@/integrations/supabase/client";
import { RecipeCardProps } from "@/components/RecipeCard";

export interface RecipeDetails extends RecipeCardProps {
  description: string;
  ingredients: string[];
  instructions: string[];
  cuisine: string;
  dietary: string;
}

export interface FilterOptions {
  cuisine: string[];
  dietary: string[];
  difficulty: string[];
}

// Fetch all recipes
export const fetchRecipes = async (): Promise<RecipeCardProps[]> => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      id,
      title,
      image_url as imageUrl,
      preparation_time as preparationTime,
      servings,
      difficulty_levels!inner(name as difficulty)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }

  return data || [];
};

// Fetch recipe by ID
export const fetchRecipeById = async (id: string): Promise<RecipeDetails | null> => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      id,
      title,
      description,
      image_url as imageUrl,
      preparation_time as preparationTime,
      servings,
      ingredients,
      instructions,
      difficulty_levels!inner(name as difficulty),
      cuisines!inner(name as cuisine)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }

  // Get dietary preferences for this recipe
  const { data: dietaryData, error: dietaryError } = await supabase
    .from('recipe_dietary')
    .select(`
      dietary_types!inner(name)
    `)
    .eq('recipe_id', id);

  let dietary = 'None';
  if (!dietaryError && dietaryData && dietaryData.length > 0) {
    dietary = dietaryData.map((d: any) => d.dietary_types.name).join(', ');
  }

  return {
    ...data,
    dietary,
    // Convert JSONB arrays to string arrays if needed
    ingredients: Array.isArray(data.ingredients) ? data.ingredients : [],
    instructions: Array.isArray(data.instructions) ? data.instructions : []
  };
};

// Fetch recipes by cuisine
export const fetchRecipesByCuisine = async (cuisineId: string): Promise<RecipeCardProps[]> => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      id,
      title,
      image_url as imageUrl,
      preparation_time as preparationTime,
      servings,
      difficulty_levels!inner(name as difficulty)
    `)
    .eq('cuisine_id', cuisineId);

  if (error) {
    console.error('Error fetching recipes by cuisine:', error);
    throw error;
  }

  return data || [];
};

// Filter recipes based on provided criteria
export const filterRecipes = async (filters: FilterOptions): Promise<RecipeCardProps[]> => {
  let query = supabase
    .from('recipes')
    .select(`
      id,
      title,
      image_url as imageUrl,
      preparation_time as preparationTime,
      servings,
      difficulty_levels!inner(name as difficulty),
      cuisines!inner(name as cuisine)
    `);

  // Apply cuisine filter
  if (filters.cuisine && filters.cuisine.length > 0) {
    // First get the cuisine ids
    const { data: cuisineIds } = await supabase
      .from('cuisines')
      .select('id')
      .in('name', filters.cuisine);
    
    if (cuisineIds && cuisineIds.length > 0) {
      const ids = cuisineIds.map(c => c.id);
      query = query.in('cuisine_id', ids);
    }
  }

  // Apply difficulty filter
  if (filters.difficulty && filters.difficulty.length > 0) {
    // Get the difficulty ids
    const { data: difficultyIds } = await supabase
      .from('difficulty_levels')
      .select('id')
      .in('name', filters.difficulty);
    
    if (difficultyIds && difficultyIds.length > 0) {
      const ids = difficultyIds.map(d => d.id);
      query = query.in('difficulty_id', ids);
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error filtering recipes:', error);
    throw error;
  }

  // If dietary filters are applied, we need to filter results further
  if (filters.dietary && filters.dietary.length > 0) {
    // Get recipes with the specified dietary types
    const { data: dietaryRecipes } = await supabase
      .from('recipe_dietary')
      .select(`
        recipe_id,
        dietary_types!inner(name)
      `)
      .in('dietary_types.name', filters.dietary);
    
    if (dietaryRecipes && dietaryRecipes.length > 0) {
      // Extract recipe IDs that match dietary filters
      const dietaryRecipeIds = new Set(dietaryRecipes.map((dr: any) => dr.recipe_id));
      
      // Filter the recipes to only include those with matching dietary preferences
      return data?.filter(recipe => dietaryRecipeIds.has(recipe.id)) || [];
    }
    return []; // No recipes match the dietary filters
  }

  return data || [];
};

// Search recipes by query
export const searchRecipes = async (query: string): Promise<RecipeCardProps[]> => {
  const searchTerm = query.toLowerCase();
  
  // Search in recipe titles and descriptions
  const { data: recipesData, error: recipesError } = await supabase
    .from('recipes')
    .select(`
      id,
      title,
      description,
      image_url as imageUrl,
      preparation_time as preparationTime,
      servings,
      difficulty_levels!inner(name as difficulty)
    `)
    .or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);
  
  if (recipesError) {
    console.error('Error searching recipes:', recipesError);
    throw recipesError;
  }
  
  return recipesData || [];
};

// Fetch all cuisines
export const fetchCuisines = async () => {
  const { data, error } = await supabase
    .from('cuisines')
    .select('*')
    .order('name');
    
  if (error) {
    console.error('Error fetching cuisines:', error);
    throw error;
  }
  
  return data || [];
};

// Fetch all dietary types
export const fetchDietaryTypes = async () => {
  const { data, error } = await supabase
    .from('dietary_types')
    .select('*')
    .order('name');
    
  if (error) {
    console.error('Error fetching dietary types:', error);
    throw error;
  }
  
  return data || [];
};

// Fetch all difficulty levels
export const fetchDifficultyLevels = async () => {
  const { data, error } = await supabase
    .from('difficulty_levels')
    .select('*')
    .order('name');
    
  if (error) {
    console.error('Error fetching difficulty levels:', error);
    throw error;
  }
  
  return data || [];
};
