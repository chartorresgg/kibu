// src/pages/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulación de autenticación (en una app real sería una llamada a la API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Verificación básica de credenciales demo
      if (formData.email === 'admin@kibu.com' && formData.password === 'admin123') {
        // Guardar token de autenticación (simulado)
        localStorage.setItem('kibu_admin_token', 'demo_token_123');
        localStorage.setItem('kibu_admin_user', JSON.stringify({
          email: formData.email,
          name: 'Administrador Kibu'
        }));
        
        // Redirigir al panel de administración
        navigate('/admin');
      } else {
        setErrors({
          general: 'Credenciales incorrectas. Usa: admin@kibu.com / admin123'
        });
      }
    } catch (error) {
      setErrors({
        general: 'Error al iniciar sesión. Intenta nuevamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Breadcrumb */}
      <section className="py-6 bg-kibu-light-gray">
        <div className="kibu-container">
          <nav className="flex items-center space-x-2 text-kibu-gray">
            <Link to="/" className="hover:text-kibu-primary transition-colors">
              Inicio
            </Link>
            <span>{'>'}</span>
            <Link to="/login" className="hover:text-kibu-primary transition-colors">
              Login
            </Link>
            <span>{'>'}</span>
            <span className="text-kibu-dark font-medium">Iniciar sesión</span>
          </nav>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 lg:py-20">
        <div className="kibu-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Formulario de login */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="space-y-8">
                
                {/* Encabezado */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl lg:text-4xl font-bold text-kibu-dark mb-4">
                    ¡Bienvenido!
                  </h1>
                  <p className="text-kibu-gray text-lg">
                    Ingresa tus credenciales para ingresar a tu cuenta
                  </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error general */}
                  {errors.general && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                      {errors.general}
                    </div>
                  )}

                  {/* Campo de correo electrónico */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-kibu-dark mb-2">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`kibu-input pl-10 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="correo@ejemplo.com"
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Campo de contraseña */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-kibu-dark mb-2">
                      Contraseña
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`kibu-input pl-10 pr-10 ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Ingresa tu contraseña"
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-kibu-primary"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>

                  {/* Recordarme y recuperar contraseña */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-kibu-primary focus:ring-kibu-primary border-gray-300 rounded"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-kibu-gray">
                        Recordarme por 30 días
                      </label>
                    </div>
                    <Link
                      to="/recuperar-contrasena"
                      className="text-sm text-kibu-primary hover:text-kibu-accent transition-colors"
                    >
                      Recuperar contraseña
                    </Link>
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full kibu-btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Iniciando sesión...
                      </div>
                    ) : (
                      'Acceder'
                    )}
                  </button>

                  {/* Información de demo */}
                  <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-md text-sm">
                    <strong>Demo:</strong> admin@kibu.com / admin123
                  </div>
                </form>
              </div>
            </div>

            {/* Imagen lateral */}
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center"
                  alt="Administrador Kibu"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;