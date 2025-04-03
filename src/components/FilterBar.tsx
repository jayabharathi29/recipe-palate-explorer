
import { useState } from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: {
    cuisine: string[];
    dietary: string[];
    difficulty: string[];
  }) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [filters, setFilters] = useState({
    cuisine: [] as string[],
    dietary: [] as string[],
    difficulty: [] as string[],
  });
  
  const [isExpanded, setIsExpanded] = useState(false);

  const cuisineOptions = ['Chinese', 'Indian', 'Arabic'];
  const dietaryOptions = ['Vegetarian', 'Non-Vegetarian'];
  const difficultyOptions = ['Easy', 'Medium', 'Hard'];

  const handleFilterChange = (category: 'cuisine' | 'dietary' | 'difficulty', value: string) => {
    setFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];
        
      const newFilters = {
        ...prevFilters,
        [category]: updatedCategory
      };
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const clearFilters = () => {
    const resetFilters = {
      cuisine: [],
      dietary: [],
      difficulty: []
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </h2>
        
        <div className="flex space-x-3">
          <button 
            className="text-sm text-gray-500 hover:text-recipe"
            onClick={clearFilters}
          >
            Clear All
          </button>
          
          <button 
            className="md:hidden text-sm font-medium text-recipe"
            onClick={toggleExpand}
          >
            {isExpanded ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      
      <div className={`md:flex md:space-x-6 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {/* Cuisine Filters */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm font-medium mb-2">Cuisine</h3>
          <div className="flex flex-wrap gap-2">
            {cuisineOptions.map(cuisine => (
              <button
                key={cuisine}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.cuisine.includes(cuisine)
                    ? 'bg-recipe text-white border-recipe'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-recipe'
                }`}
                onClick={() => handleFilterChange('cuisine', cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
        
        {/* Dietary Preference */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm font-medium mb-2">Dietary</h3>
          <div className="flex flex-wrap gap-2">
            {dietaryOptions.map(option => (
              <button
                key={option}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.dietary.includes(option)
                    ? 'bg-recipe text-white border-recipe'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-recipe'
                }`}
                onClick={() => handleFilterChange('dietary', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        {/* Difficulty Level */}
        <div>
          <h3 className="text-sm font-medium mb-2">Difficulty</h3>
          <div className="flex flex-wrap gap-2">
            {difficultyOptions.map(difficulty => (
              <button
                key={difficulty}
                className={`px-3 py-1 text-sm rounded-full border ${
                  filters.difficulty.includes(difficulty)
                    ? 'bg-recipe text-white border-recipe'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-recipe'
                }`}
                onClick={() => handleFilterChange('difficulty', difficulty)}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
