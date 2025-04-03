
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  Clock, 
  Users, 
  AlertCircle, 
  ChevronLeft, 
  Heart, 
  Share2 
} from 'lucide-react';

// Mock data
import { getRecipeById } from '../data/mockData';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      // In a real app, this would be an API call
      const foundRecipe = getRecipeById(id);
      setRecipe(foundRecipe);
      setLoading(false);
    }
  }, [id]);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, this would update the database
  };
  
  const shareRecipe = () => {
    // In a real app, this would show share options
    alert('Share functionality would be implemented here');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-lg">Loading recipe...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center py-16">
          <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Recipe Not Found</h2>
          <p className="text-gray-600 mb-6">
            The recipe you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/recipes">
            <button className="recipe-btn">
              Browse All Recipes
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'bg-recipe-easy',
    Medium: 'bg-recipe-medium',
    Hard: 'bg-recipe-hard'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/recipes" className="inline-flex items-center text-gray-600 hover:text-recipe mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Recipes
        </Link>
        
        {/* Recipe Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold">{recipe.title}</h1>
                <div className="flex space-x-2">
                  <button 
                    onClick={toggleFavorite}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                  </button>
                  <button 
                    onClick={shareRecipe}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <p className="text-white/80 mt-2">{recipe.description}</p>
            </div>
          </div>
          
          {/* Recipe Info */}
          <div className="p-6 flex flex-wrap gap-6 border-b">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${difficultyColors[recipe.difficulty as keyof typeof difficultyColors]} mr-2`}></div>
              <span className="font-medium">{recipe.difficulty}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <span>{recipe.preparationTime} mins</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-500 mr-2" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Cuisine:</span>
              <span>{recipe.cuisine}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Dietary:</span>
              <span>{recipe.dietary}</span>
            </div>
          </div>
        </div>
        
        {/* Recipe Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-bold mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-recipe mt-1.5 mr-3 flex-shrink-0"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction: string, index: number) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-recipe text-white font-medium mr-4">
                      {index + 1}
                    </span>
                    <div className="pt-1">{instruction}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
