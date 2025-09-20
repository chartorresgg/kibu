// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-kibu-navbar sticky top-0 z-50">
      <div className="kibu-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* Tu logo personalizado */}
                <img 
                  src="/logo.png" 
                  alt="Kibu Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold text-kibu-dark">Kibu</span>
              </div>
            </Link>
          </div>

          {/* Menú de navegación - Desktop */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <Link
                to="/"
                className="text-kibu-dark hover:text-kibu-primary px-3 py-2 text-base font-medium transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="text-kibu-dark hover:text-kibu-primary px-3 py-2 text-base font-medium transition-colors"
              >
                Servicios
              </Link>
              <Link
                to="/nosotros"
                className="text-kibu-dark hover:text-kibu-primary px-3 py-2 text-base font-medium transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="text-kibu-dark hover:text-kibu-primary px-3 py-2 text-base font-medium transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Botón Login */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="kibu-btn-primary"
            >
              Login
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-kibu-dark hover:text-kibu-primary hover:bg-kibu-light-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kibu-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-kibu-light-gray">
              <Link
                to="/"
                className="text-kibu-dark hover:text-kibu-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="text-kibu-dark hover:text-kibu-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/nosotros"
                className="text-kibu-dark hover:text-kibu-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="text-kibu-dark hover:text-kibu-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="/login"
                className="kibu-btn-primary w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;