
import { Link } from 'react-router-dom';

const cuisines = [
  {
    id: 'chinese',
    name: 'Chinese',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80',
    description: 'Explore the rich flavors and traditions of Chinese cuisine'
  },
  {
    id: 'indian',
    name: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?auto=format&fit=crop&q=80',
    description: 'Discover the aromatic spices and diverse dishes of Indian cooking'
  },
  {
    id: 'arabic',
    name: 'Arabic',
    imageUrl: 'https://images.unsplash.com/photo-1541518763069-e3df6207a5e7?auto=format&fit=crop&q=80',
    description: 'Experience the exotic flavors and traditions of Arabic cuisine'
  },
];

const CuisineSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Explore Cuisines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cuisines.map(cuisine => (
            <Link 
              key={cuisine.id} 
              to={`/cuisine/${cuisine.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cuisine.imageUrl} 
                    alt={cuisine.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{cuisine.name} Cuisine</h3>
                  <p className="text-gray-600 mb-4">{cuisine.description}</p>
                  
                  <span className="text-recipe font-medium group-hover:underline">
                    Explore Recipes
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
