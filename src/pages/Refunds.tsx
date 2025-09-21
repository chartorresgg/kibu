// src/pages/Refunds.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Clock, CheckCircle, AlertCircle, FileText, Mail, Shield } from 'lucide-react';

const Refunds: React.FC = () => {
  const refundConditions = [
    {
      icon: <Clock className="w-6 h-6 text-kibu-primary" />,
      title: 'Solicitud Temprana',
      description: 'Hasta 7 días después del inicio del proyecto',
      refund: '100% del pago'
    },
    {
      icon: <FileText className="w-6 h-6 text-kibu-primary" />,
      title: 'Incumplimiento de Entregables',
      description: 'Si no cumplimos con los requisitos acordados',
      refund: '50-100% según caso'
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-kibu-primary" />,
      title: 'Cancelación por Fuerza Mayor',
      description: 'Eventos fuera del control de ambas partes',
      refund: 'Proporcional al avance'
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Solicitud Formal',
      description: 'Envía tu solicitud de reembolso por correo electrónico con la justificación correspondiente.',
      timeframe: 'Inmediato'
    },
    {
      step: 2,
      title: 'Evaluación',
      description: 'Nuestro equipo evalúa la solicitud según las políticas establecidas y el avance del proyecto.',
      timeframe: '2-3 días hábiles'
    },
    {
      step: 3,
      title: 'Aprobación',
      description: 'Te notificamos la decisión y el monto aprobado para reembolso si aplica.',
      timeframe: '1-2 días hábiles'
    },
    {
      step: 4,
      title: 'Procesamiento',
      description: 'Procesamos el reembolso al método de pago original utilizado.',
      timeframe: '5-10 días hábiles'
    }
  ];

  const noRefundConditions = [
    'Cambios en los requerimientos después de la aprobación inicial',
    'Demoras causadas por falta de información del cliente',
    'Servicios ya entregados y aprobados por el cliente',
    'Proyectos completados satisfactoriamente',
    'Cambios de opinión sin justificación técnica'
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header de la página */}
      <section className="bg-gradient-to-r from-kibu-secondary to-white py-16">
        <div className="kibu-container">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-kibu-dark mb-4">
              Política de Reembolsos
            </h1>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center space-x-2 text-kibu-gray">
              <Link to="/" className="hover:text-kibu-primary transition-colors">
                Inicio
              </Link>
              <span>{'>'}</span>
              <span className="text-kibu-dark font-medium">Reembolsos</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16">
        <div className="kibu-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-kibu-dark mb-6">
              Compromiso con la Satisfacción del Cliente
            </h2>
            <p className="text-lg text-kibu-gray leading-relaxed mb-8">
              En KiBu, nuestra prioridad es la satisfacción de nuestros clientes. Entendemos que 
              en ocasiones pueden surgir situaciones que requieran la devolución de pagos. Por eso, 
              hemos establecido una política clara y justa de reembolsos que protege tanto a nuestros 
              clientes como a nuestra empresa.
            </p>
            
            <div className="bg-kibu-light-gray rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-kibu-dark font-semibold">
                Garantizamos reembolsos justos y transparentes según las condiciones establecidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Condiciones para Reembolso */}
      <section className="py-16 bg-kibu-light-gray">
        <div className="kibu-container">
          <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
            ¿Cuándo Puedes Solicitar un Reembolso?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {refundConditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-lg shadow-kibu-card p-8 text-center">
                <div className="flex justify-center mb-4">
                  {condition.icon}
                </div>
                <h3 className="text-xl font-semibold text-kibu-dark mb-4">
                  {condition.title}
                </h3>
                <p className="text-kibu-gray mb-4">
                  {condition.description}
                </p>
                <div className="bg-kibu-primary text-white rounded-full px-4 py-2 text-sm font-medium">
                  {condition.refund}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Reembolso */}
      <section className="py-16">
        <div className="kibu-container">
          <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
            Proceso de Reembolso
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {refundProcess.map((process, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-kibu-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-kibu-card p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-kibu-dark">
                        {process.title}
                      </h3>
                      <span className="bg-kibu-light-gray text-kibu-dark text-sm px-3 py-1 rounded-full">
                        {process.timeframe}
                      </span>
                    </div>
                    <p className="text-kibu-gray">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Condiciones que NO aplican para reembolso */}
      <section className="py-16 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-kibu-dark text-center mb-8">
              Condiciones que NO Aplican para Reembolso
            </h2>
            <p className="text-lg text-kibu-gray text-center mb-8">
              Para mantener la transparencia, te informamos sobre las situaciones en las que 
              no es posible procesar reembolsos:
            </p>
            
            <div className="bg-white rounded-lg shadow-kibu-card p-8">
              <ul className="space-y-4">
                {noRefundConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-kibu-gray">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto para Reembolsos */}
      <section className="py-16">
        <div className="kibu-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-kibu-dark mb-8">
              ¿Cómo Solicitar un Reembolso?
            </h2>
            
            <div className="bg-white rounded-lg shadow-kibu-card p-8">
              <div className="flex justify-center mb-6">
                <Mail className="w-12 h-12 text-kibu-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-kibu-dark mb-4">
                Envía tu solicitud por correo electrónico
              </h3>
              
              <div className="bg-kibu-light-gray rounded-lg p-6 mb-6">
                <p className="font-semibold text-kibu-dark mb-2">Email:</p>
                <p className="text-xl text-kibu-primary font-bold">reembolsos@kibu.com.co</p>
              </div>
              
              <div className="text-left space-y-3">
                <h4 className="font-semibold text-kibu-dark">Incluye la siguiente información:</h4>
                <ul className="space-y-2 text-kibu-gray">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                    Número de contrato o proyecto
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                    Motivo detallado de la solicitud
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                    Documentos de soporte (si aplica)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-kibu-primary rounded-full"></div>
                    Información del método de pago original
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiempos de Procesamiento */}
      <section className="py-16 bg-kibu-light-gray">
        <div className="kibu-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
              Tiempos de Procesamiento por Método de Pago
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-kibu-card p-6 text-center">
                <h3 className="font-semibold text-kibu-dark mb-2">Tarjetas de Crédito</h3>
                <div className="text-2xl font-bold text-kibu-primary mb-2">5-7 días</div>
                <p className="text-sm text-kibu-gray">Aparece en el siguiente estado de cuenta</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-kibu-card p-6 text-center">
                <h3 className="font-semibold text-kibu-dark mb-2">Transferencias</h3>
                <div className="text-2xl font-bold text-kibu-primary mb-2">3-5 días</div>
                <p className="text-sm text-kibu-gray">Transferencia directa a cuenta</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-kibu-card p-6 text-center">
                <h3 className="font-semibold text-kibu-dark mb-2">PSE</h3>
                <div className="text-2xl font-bold text-kibu-primary mb-2">2-4 días</div>
                <p className="text-sm text-kibu-gray">Reembolso automático al banco</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-kibu-card p-6 text-center">
                <h3 className="font-semibold text-kibu-dark mb-2">Efectivo</h3>
                <div className="text-2xl font-bold text-kibu-primary mb-2">No aplica</div>
                <p className="text-sm text-kibu-gray">Requiere transferencia bancaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ sobre Reembolsos */}
      <section className="py-16">
        <div className="kibu-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-kibu-dark text-center mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-kibu-card p-6">
                <h3 className="text-lg font-semibold text-kibu-dark mb-3">
                  ¿Puedo cancelar mi proyecto después de haber iniciado?
                </h3>
                <p className="text-kibu-gray">
                  Sí, puedes cancelar tu proyecto. El monto del reembolso dependerá del avance 
                  del trabajo realizado y el tiempo transcurrido desde el inicio del proyecto. 
                  Evaluamos cada caso individualmente.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-kibu-card p-6">
                <h3 className="text-lg font-semibold text-kibu-dark mb-3">
                  ¿Qué pasa si no estoy satisfecho con el trabajo entregado?
                </h3>
                <p className="text-kibu-gray">
                  Ofrecemos revisiones gratuitas para asegurar que el trabajo cumpla con tus 
                  expectativas. Si después de las revisiones aún no estás satisfecho, 
                  evaluaremos tu caso para un posible reembolso parcial.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-kibu-card p-6">
                <h3 className="text-lg font-semibold text-kibu-dark mb-3">
                  ¿Los reembolsos incluyen las tasas de procesamiento?
                </h3>
                <p className="text-kibu-gray">
                  Las tasas de procesamiento de pagos no son reembolsables. El monto del 
                  reembolso corresponde al valor del servicio menos las comisiones bancarias 
                  y de procesamiento incurridas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-kibu-card p-6">
                <h3 className="text-lg font-semibold text-kibu-dark mb-3">
                  ¿Puedo obtener un reembolso si cambio de opinión?
                </h3>
                <p className="text-kibu-gray">
                  Los cambios de opinión sin justificación técnica no califican para reembolso 
                  completo. Sin embargo, podemos discutir alternativas como modificaciones 
                  del proyecto o créditos para futuros servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-kibu-primary">
        <div className="kibu-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas Ayuda con tu Solicitud?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo de atención al cliente está aquí para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="bg-white text-kibu-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contáctanos
            </Link>
            <a 
              href="mailto:reembolsos@kibu.com.co"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-kibu-primary transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refunds;