
import { useEffect, useState } from 'react';
import RecipeCard, { RecipeCardProps } from './RecipeCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Temporary mock data
import { mockRecipes } from '../data/mockData';

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeCardProps[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call to fetch featured recipes
    // For now, we'll use mock data
    setRecipes(mockRecipes.slice(0, 3));
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Recipes</h2>
          
          <Link 
            to="/recipes" 
            className="text-recipe font-medium flex items-center hover:underline"
          >
            View All
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                imageUrl={recipe.imageUrl}
                preparationTime={recipe.preparationTime}
                servings={recipe.servings}
                difficulty={recipe.difficulty}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-10">
            <p className="text-gray-500">Loading featured recipes...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
