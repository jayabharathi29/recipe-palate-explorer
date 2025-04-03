
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import { ChevronLeft } from 'lucide-react';

// Mock data
import { getRecipesByCuisine } from '../data/mockData';

const CuisineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const cuisineData = {
    chinese: {
      name: 'Chinese',
      description: 'Chinese cuisine is one of the oldest and most diverse in the world. It originated from different regions of China and has been spread across the world from East Asia to North America, Australasia and Western Europe. The most praised are Cantonese cuisine, Shandong cuisine, Jiangsu cuisine and Sichuan cuisine.',
      banner: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80',
    },
    indian: {
      name: 'Indian',
      description: 'Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.',
      banner: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?auto=format&fit=crop&q=80',
    },
    arabic: {
      name: 'Arabic',
      description: 'Arabic cuisine is the cuisine of the Arabs, defined as the various regional cuisines spanning the Arab world, from the Maghreb to the Fertile Crescent and the Arabian Peninsula. The cuisines are often centuries old and reflect the culture of trading in spices, herbs, and foods.',
      banner: 'https://images.unsplash.com/photo-1541518763069-e3df6207a5e7?auto=format&fit=crop&q=80',
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      // In a real app, this would be an API call
      const foundRecipes = getRecipesByCuisine(id);
      setRecipes(foundRecipes);
      setLoading(false);
    }
  }, [id]);

  if (!id || !Object.keys(cuisineData).includes(id)) {
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

  const cuisine = cuisineData[id as keyof typeof cuisineData];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Banner */}
        <div 
          className="relative h-64 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${cuisine.banner})` }}
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
          
          {loading ? (
            <div className="flex justify-center py-10">
              <p className="text-gray-500">Loading recipes...</p>
            </div>
          ) : recipes.length > 0 ? (
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
