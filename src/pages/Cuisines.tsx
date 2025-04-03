
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const cuisines = [
  {
    id: 'chinese',
    name: 'Chinese',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80',
    description: 'Explore the rich flavors and traditions of Chinese cuisine',
    popularDishes: ['Dim Sum', 'Kung Pao Chicken', 'Dumplings', 'Peking Duck'],
    keyIngredients: ['Soy Sauce', 'Rice Vinegar', 'Sesame Oil', 'Ginger', 'Garlic'],
  },
  {
    id: 'indian',
    name: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?auto=format&fit=crop&q=80',
    description: 'Discover the aromatic spices and diverse dishes of Indian cooking',
    popularDishes: ['Butter Chicken', 'Biryani', 'Samosas', 'Tandoori'],
    keyIngredients: ['Turmeric', 'Cumin', 'Cardamom', 'Garam Masala', 'Coriander'],
  },
  {
    id: 'arabic',
    name: 'Arabic',
    imageUrl: 'https://images.unsplash.com/photo-1541518763069-e3df6207a5e7?auto=format&fit=crop&q=80',
    description: 'Experience the exotic flavors and traditions of Arabic cuisine',
    popularDishes: ['Hummus', 'Falafel', 'Shawarma', 'Tabbouleh'],
    keyIngredients: ['Olive Oil', 'Tahini', 'Sumac', 'Za\'atar', 'Mint'],
  },
];

const Cuisines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-4">Explore Cuisines</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Discover recipes from different culinary traditions around the world. Each cuisine offers unique flavors, cooking techniques, and ingredients that make them special.
          </p>
          
          <div className="space-y-12">
            {cuisines.map(cuisine => (
              <div key={cuisine.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={cuisine.imageUrl} 
                      alt={cuisine.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-bold mb-3">{cuisine.name} Cuisine</h2>
                    <p className="text-gray-600 mb-4">{cuisine.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Popular Dishes</h3>
                        <ul className="space-y-1">
                          {cuisine.popularDishes.map(dish => (
                            <li key={dish} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-recipe rounded-full mr-2"></span>
                              {dish}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Key Ingredients</h3>
                        <ul className="space-y-1">
                          {cuisine.keyIngredients.map(ingredient => (
                            <li key={ingredient} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-recipe rounded-full mr-2"></span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link to={`/cuisine/${cuisine.id}`}>
                      <button className="recipe-btn">
                        Explore {cuisine.name} Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cuisines;
