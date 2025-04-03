
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import FilterBar from '../components/FilterBar';
import { Filter, Search } from 'lucide-react';

// Mock data
import { mockRecipes, filterRecipes, searchRecipes } from '../data/mockData';

const Recipes = () => {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    cuisine: [] as string[],
    dietary: [] as string[],
    difficulty: [] as string[],
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = searchRecipes(searchQuery);
      setRecipes(results);
    } else {
      // If search is cleared, apply only filters
      const results = filterRecipes(activeFilters);
      setRecipes(results);
    }
  };

  const handleFilterChange = (filters: {
    cuisine: string[];
    dietary: string[];
    difficulty: string[];
  }) => {
    setActiveFilters(filters);
    
    if (searchQuery.trim()) {
      // If there's a search query, search first then filter results
      const searchResults = searchRecipes(searchQuery);
      const filteredResults = filterRecipes({
        ...filters,
        cuisine: filters.cuisine,
        dietary: filters.dietary,
        difficulty: filters.difficulty,
      }).filter(recipe => 
        searchResults.some(searchRecipe => searchRecipe.id === recipe.id)
      );
      setRecipes(filteredResults);
    } else {
      // If no search query, just apply filters
      const filteredResults = filterRecipes(filters);
      setRecipes(filteredResults);
    }
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Recipes</h1>
        
        {/* Search Bar (Larger Screens) */}
        <div className="hidden md:block mb-6">
          <form onSubmit={handleSearch} className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-recipe focus:border-transparent"
              placeholder="Search recipes by name, ingredient, or cuisine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 px-4 text-white bg-recipe rounded-r-lg hover:bg-recipe/90"
            >
              Search
            </button>
          </form>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Search and Filter Controls */}
          <div className="md:hidden mb-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-recipe focus:border-transparent"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-4 text-white bg-recipe rounded-r-lg hover:bg-recipe/90"
              >
                Search
              </button>
            </form>
            
            <button
              className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 mb-4"
              onClick={toggleMobileFilter}
            >
              <Filter className="h-5 w-5" />
              {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {isMobileFilterOpen && (
              <div className="mb-4">
                <FilterBar onFilterChange={handleFilterChange} />
              </div>
            )}
          </div>
          
          {/* Sidebar Filters (Larger Screens) */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
          
          {/* Recipe Grid */}
          <div className="md:w-3/4 lg:w-4/5">
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
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=200" 
                  alt="No recipes found" 
                  className="w-32 h-32 mb-4 rounded-full object-cover opacity-70"
                />
                <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
                <p className="text-gray-500 mb-6 max-w-md">
                  We couldn't find any recipes that match your search criteria. Try adjusting your filters or search query.
                </p>
                <button
                  className="recipe-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilters({ cuisine: [], dietary: [], difficulty: [] });
                    setRecipes(mockRecipes);
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recipes;
