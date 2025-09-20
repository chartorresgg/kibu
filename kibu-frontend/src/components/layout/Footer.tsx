// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kibu-secondary border-t border-gray-200">
      <div className="kibu-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Kibu Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-kibu-dark">Kibu</span>
            </div>
            
            <div className="space-y-2 text-kibu-small text-kibu-gray">
              <p>Calle 61A#9-15 Bogotá D.C.</p>
              <p>ZIP 11110 33134 COL</p>
              <p>Correo: servicios@kibu.com.co</p>
              <p>Teléfono: +57 699 67 83</p>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-kibu-dark font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-kibu-dark font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/opciones-pago" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                  Opciones de pago
                </Link>
              </li>
              <li>
                <Link to="/reembolsos" className="text-kibu-gray hover:text-kibu-primary transition-colors">
                  Reembolsos
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-kibu-dark font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="kibu-input flex-1 rounded-r-none"
              />
              <button className="bg-kibu-primary text-white px-4 py-2 rounded-r-md hover:bg-kibu-accent transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Garantías */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Garantía de calidad */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-kibu-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-kibu-dark">Garantía de calidad</p>
                <p className="text-kibu-small text-kibu-gray">y profesional</p>
              </div>
            </div>

            {/* Garantía de servicios */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-kibu-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-kibu-dark">Garantía de servicios</p>
                <p className="text-kibu-small text-kibu-gray">5 años</p>
              </div>
            </div>

            {/* Asesoría gratuita */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-kibu-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-kibu-dark">Asesoría gratuita</p>
                <p className="text-kibu-small text-kibu-gray">En todos los servicios</p>
              </div>
            </div>

            {/* Soporte 24/7 */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-kibu-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-kibu-dark">Soporte 24 / 7</p>
                <p className="text-kibu-small text-kibu-gray">Personalizado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-kibu-small text-kibu-gray">
            2025 Kibu. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;