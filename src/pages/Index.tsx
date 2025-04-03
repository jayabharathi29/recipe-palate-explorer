
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FeaturedRecipes from '../components/FeaturedRecipes';
import CuisineSection from '../components/CuisineSection';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Delicious <span className="text-recipe">Recipes</span> from Around the World
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore a variety of cuisines and find your next favorite dish. Filter by dietary preferences and difficulty level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/recipes">
                  <button className="recipe-btn px-8 py-3">
                    Explore Recipes
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-white text-recipe border border-recipe font-medium px-8 py-3 rounded-md hover:bg-orange-50 transition-colors">
                    Create Account
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" 
                alt="Delicious food" 
                className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes */}
      <FeaturedRecipes />
      
      {/* Cuisine Categories */}
      <CuisineSection />
      
      {/* Call to Action */}
      <section className="bg-recipe py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start cooking?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Create an account to save your favorite recipes, create custom collections, and share your own recipes with our community.
          </p>
          <Link to="/signup">
            <button className="bg-white text-recipe font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Sign Up for Free
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
