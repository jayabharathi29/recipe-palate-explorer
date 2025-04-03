
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import { ChevronLeft } from 'lucide-react';
import { fetchRecipesByCuisine } from '../services/recipeService';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const CuisineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipes, setRecipes] = useState<any[]>([]);
  const [cuisine, setCuisine] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      loadCuisineData(id);
    }
  }, [id]);
  
  const loadCuisineData = async (cuisineId: string) => {
    try {
      setLoading(true);
      
      // Fetch cuisine details
      const { data: cuisineData, error: cuisineError } = await supabase
        .from('cuisines')
        .select('*')
        .eq('id', cuisineId)
        .single();
      
      if (cuisineError) {
        throw cuisineError;
      }
      
      setCuisine(cuisineData);
      
      // Fetch recipes for this cuisine
      const recipesData = await fetchRecipesByCuisine(cuisineId);
      setRecipes(recipesData);
    } catch (error) {
      toast({
        title: "Error loading cuisine",
        description: "There was an error loading the cuisine data. Please try again later.",
        variant: "destructive"
      });
      console.error('Error loading cuisine data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-recipe"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!cuisine) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Cuisine Not Found</h2>
            <Link to="/cuisines" className="text-recipe hover:underline">
              Browse All Cuisines
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Banner */}
        <div 
          className="relative h-64 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${cuisine.image_url})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {cuisine.name} Cuisine
            </h1>
            <p className="text-white/90 max-w-2xl">
              {cuisine.description}
            </p>
          </div>
        </div>
        
        {/* Recipe List */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/cuisines" className="inline-flex items-center text-gray-600 hover:text-recipe mb-6">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Cuisines
          </Link>
          
          <h2 className="text-2xl font-bold mb-6">Popular {cuisine.name} Recipes</h2>
          
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="text-center py-10">
              <p className="text-gray-500">No recipes found for this cuisine.</p>
              <Link to="/recipes" className="text-recipe hover:underline mt-4 inline-block">
                Browse All Recipes
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CuisineDetail;
