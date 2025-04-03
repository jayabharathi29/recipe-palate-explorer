
import { Link } from 'react-router-dom';
import { Clock, Users, Utensils } from 'lucide-react';

export interface RecipeCardProps {
  id: string;
  title: string;
  imageUrl: string;
  preparationTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const RecipeCard = ({ 
  id, 
  title, 
  imageUrl, 
  preparationTime, 
  servings, 
  difficulty 
}: RecipeCardProps) => {
  const difficultyClass = 
    difficulty === 'Easy' 
      ? 'easy' 
      : difficulty === 'Medium' 
        ? 'medium' 
        : 'hard';

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Container with Difficulty Badge */}
      <div className="relative h-52">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <span className={`difficulty-badge ${difficultyClass}`}>
          {difficulty}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{preparationTime} mins</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{servings} servings</span>
          </div>
        </div>
        
        <Link to={`/recipe/${id}`}>
          <button className="recipe-btn w-full">
            <Utensils className="w-4 h-4" />
            <span>View Recipe</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
