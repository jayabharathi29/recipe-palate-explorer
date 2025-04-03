
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Cuisines = () => {
  const [cuisines, setCuisines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadCuisines();
  }, []);

  const loadCuisines = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('cuisines')
        .select('*')
        .order('name');
      
      if (error) {
        throw error;
      }
      
      setCuisines(data || []);
    } catch (error) {
      toast({
        title: "Error loading cuisines",
        description: "There was an error loading the cuisines. Please try again later.",
        variant: "destructive"
      });
      console.error('Error loading cuisines:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-4">Explore Cuisines</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Discover recipes from different culinary traditions around the world. Each cuisine offers unique flavors, cooking techniques, and ingredients that make them special.
          </p>
          
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-recipe"></div>
            </div>
          ) : cuisines.length > 0 ? (
            <div className="space-y-12">
              {cuisines.map(cuisine => (
                <div key={cuisine.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={cuisine.image_url} 
                        alt={cuisine.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h2 className="text-2xl font-bold mb-3">{cuisine.name} Cuisine</h2>
                      <p className="text-gray-600 mb-4">{cuisine.description}</p>
                      
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">No cuisines found. Check back later!</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cuisines;
