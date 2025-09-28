// src/pages/PaymentOptions.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Banknote, DollarSign, Smartphone, Shield, Clock } from 'lucide-react';

const PaymentOptions: React.FC = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-8 h-8 text-kibu-primary" />,
      title: 'Tarjetas de Crédito y Débito',
      description: 'Aceptamos Visa, Mastercard, American Express y Diners Club',
      features: ['Pagos seguros con encriptación SSL', 'Procesamiento inmediato', 'Cuotas disponibles hasta 36 meses']
    },
    {
      icon: <Banknote className="w-8 h-8 text-kibu-primary" />,
      title: 'Transferencias Bancarias',
      description: 'Transferencias electrónicas desde cualquier banco en Colombia',
      features: ['Bancolombia, Banco de Bogotá, BBVA', 'Davivienda, Banco Popular', 'Confirmación en 24-48 horas']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-kibu-primary" />,
      title: 'Pagos Digitales',
      description: 'Plataformas de pago modernas y seguras',
      features: ['PSE (Pagos Seguros en Línea)', 'Nequi y Daviplata', 'PayU y MercadoPago']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-kibu-primary" />,
      title: 'Efectivo',
      description: 'Pagos en efectivo en puntos autorizados',
      features: ['Baloto y Efecty', 'Su Red y Paga Todo', 'Comprobante de pago requerido']
    }
  ];

  const paymentPlans = [
    {
      name: 'Pago Único',
      discount: '5% descuento',
      description: 'Pago completo al inicio del proyecto',
      benefits: ['Mayor descuento disponible', 'Prioridad en cronograma', 'Soporte premium incluido']
    },
    {
      name: 'Plan 50/50',
      discount: 'Sin intereses',
      description: '50% al inicio, 50% a la entrega',
      benefits: ['Flexibilidad de pago', 'Sin costos adicionales', 'Ideal para proyectos medianos']
    },
    {
      name: 'Plan por Hitos',
      discount: 'Personalizable',
      description: 'Pagos según avance del proyecto',
      benefits: ['Pagos según entregables', 'Mayor control del proyecto', 'Ideal para proyectos grandes']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=1920&h=600&fit=crop&crop=center")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative kibu-container">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Opciones de pago</h1>
            <nav className="flex justify-center items-center space-x-2 text-gray-200">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>{'>'}</span>
              <span className="text-white font-medium">Opciones de pago</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16">
        <div className="kibu-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-kibu-dark mb-6">
              Facilidades de Pago Flexibles
            </h2>
            <p className="text-lg text-kibu-gray leading-relaxed">
              En KiBu entendemos que cada proyecto es único, por eso ofrecemos múltiples opciones 
              de pago para que puedas elegir la que mejor se adapte a tus necesidades empresariales. 
              Todos nuestros métodos de pago son seguros y están respaldados por las mejores 
              tecnologías de encriptación.
            </p>
          </div>
        </div>
      </section>

      {/* Métodos de Pago */}
      <section className="py-16 bg-kibu-light-gray">
        <div className="kibu-container">
          <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
            Métodos de Pago Disponibles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-kibu-card p-8">
                <div className="flex items-center mb-4">
                  {method.icon}
                  <h3 className="text-xl font-semibold text-kibu-dark ml-4">
                    {method.title}
                  </h3>
                </div>
                <p className="text-kibu-gray mb-4">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-kibu-gray">
                      <div className="w-2 h-2 bg-kibu-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes de Pago */}
      <section className="py-16">
        <div className="kibu-container">
          <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
            Planes de Financiamiento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-kibu-card p-8 border-t-4 border-kibu-primary">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-kibu-dark mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-kibu-primary mb-2">
                    {plan.discount}
                  </div>
                  <p className="text-kibu-gray">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-kibu-gray">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Seguridad */}
      <section className="py-16 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
              Seguridad en los Pagos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-kibu-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-kibu-dark mb-2">
                  Encriptación SSL
                </h3>
                <p className="text-kibu-gray">
                  Todos los datos de pago se transmiten con encriptación de 256 bits
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-kibu-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-kibu-dark mb-2">
                  Procesamiento Rápido
                </h3>
                <p className="text-kibu-gray">
                  Confirmación de pagos en tiempo real para la mayoría de métodos
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-kibu-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-kibu-dark mb-2">
                  Cumplimiento PCI
                </h3>
                <p className="text-kibu-gray">
                  Certificados bajo los estándares de seguridad de la industria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información Bancaria */}
      <section className="py-16">
        <div className="kibu-container">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-kibu-card p-8">
            <h3 className="text-2xl font-bold text-kibu-dark text-center mb-6">
              Información Bancaria
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-kibu-dark">Razón Social:</span>
                <span className="text-kibu-gray">KiBu Soluciones Tecnológicas S.A.S.</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-kibu-dark">NIT:</span>
                <span className="text-kibu-gray">901.234.567-8</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-kibu-dark">Banco:</span>
                <span className="text-kibu-gray">Bancolombia</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-kibu-dark">Cuenta Corriente:</span>
                <span className="text-kibu-gray">123-456789-01</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium text-kibu-dark">Email de confirmación:</span>
                <span className="text-kibu-gray">pagos@kibu.com.co</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-kibu-primary">
        <div className="kibu-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Tienes preguntas sobre los pagos?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo está listo para ayudarte con cualquier consulta
          </p>
          <Link 
            to="/contacto"
            className="bg-white text-kibu-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaymentOptions;