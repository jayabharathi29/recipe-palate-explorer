
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, LogIn, MenuIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Placeholder for authentication state
  const isAuthenticated = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F97316"
              className="w-8 h-8"
            >
              <path d="M11 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7 0-3.47 2.6-6.33 6-6.92V8h2V4.08c3.4.59 6 3.45 6 6.92 0 3.87-3.13 7-7 7z" />
              <path d="M16 5v2a7 7 0 0 1 0 14v2a9 9 0 0 0 0-18z" />
            </svg>
            <span className="text-xl font-bold">Recipe Finder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-recipe focus:border-transparent"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Navigation Links */}
            <Link to="/" className="font-medium hover:text-recipe">Home</Link>
            <Link to="/recipes" className="font-medium hover:text-recipe">Recipes</Link>
            <Link to="/cuisines" className="font-medium hover:text-recipe">Cuisines</Link>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <Button variant="outline" className="flex items-center gap-2">
                <User size={16} />
                <span>Profile</span>
              </Button>
            ) : (
              <Link to="/login">
                <Button className="flex items-center gap-2 bg-recipe hover:bg-recipe/90">
                  <LogIn size={16} />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-recipe focus:border-transparent"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Link to="/" className="font-medium py-2 hover:text-recipe">Home</Link>
              <Link to="/recipes" className="font-medium py-2 hover:text-recipe">Recipes</Link>
              <Link to="/cuisines" className="font-medium py-2 hover:text-recipe">Cuisines</Link>
              
              {isAuthenticated ? (
                <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                  <User size={16} />
                  <span>Profile</span>
                </Button>
              ) : (
                <Link to="/login" className="w-full">
                  <Button className="flex items-center justify-center gap-2 w-full bg-recipe hover:bg-recipe/90">
                    <LogIn size={16} />
                    <span>Login</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
