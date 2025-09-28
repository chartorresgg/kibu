package com.kibu.kibu_backend.config;

import com.kibu.kibu_backend.entity.Service;
import com.kibu.kibu_backend.entity.ServiceCategory;
import com.kibu.kibu_backend.repository.ServiceCategoryRepository;
import com.kibu.kibu_backend.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ServiceCategoryRepository categoryRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public void run(String... args) throws Exception {
        // Solo cargar datos si no existen
        if (categoryRepository.count() == 0) {
            loadInitialData();
        }
    }

    private void loadInitialData() {
        // Crear categorías
        ServiceCategory webCategory = new ServiceCategory("Web", "Aplicaciones y servicios web");
        ServiceCategory mobileCategory = new ServiceCategory("Mobile", "Aplicaciones móviles");
        ServiceCategory aiCategory = new ServiceCategory("AI", "Inteligencia Artificial");
        ServiceCategory cloudCategory = new ServiceCategory("Cloud", "Servicios en la nube");

        categoryRepository.save(webCategory);
        categoryRepository.save(mobileCategory);
        categoryRepository.save(aiCategory);
        categoryRepository.save(cloudCategory);

        // Crear servicios
        Service webApp = new Service(
                "Aplicaciones Web",
                "Creamos aplicaciones web a medida que se adaptan perfectamente a las necesidades de tu empresa.",
                new BigDecimal("5500000"),
                webCategory);
        webApp.setInformacionAdicional(
                "En un mundo donde el 86% de los clientes investigan online antes de comprar, tener una presencia digital profesional ya no es opcional.");
        webApp.setCaracteristicas(
                "Diseño UX/UI personalizado, Desarrollo responsivo (móvil y desktop), Panel de administración, Integración con APIs, Hosting por 5 meses, Soporte técnico incluido");
        webApp.setImagenUrl(
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center");
        webApp.aplicarPromocion(new BigDecimal("50"));

        Service mobileApp = new Service(
                "Aplicaciones Móviles",
                "Apps nativas para iOS y Android que conectan con tus clientes.",
                new BigDecimal("4000000"),
                mobileCategory);
        mobileApp.setInformacionAdicional("Desarrollo nativo y multiplataforma para máximo rendimiento.");
        mobileApp.setCaracteristicas("React Native, Flutter, Push notifications, Integración APIs");
        mobileApp.setImagenUrl(
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center");
        mobileApp.aplicarPromocion(new BigDecimal("50"));

        Service aiService = new Service(
                "Inteligencia Artificial",
                "Soluciones de IA personalizadas para automatizar procesos empresariales.",
                new BigDecimal("40000000"),
                aiCategory);
        aiService.setInformacionAdicional("Machine Learning y Deep Learning para optimizar tu negocio.");
        aiService.setCaracteristicas("TensorFlow, Python, APIs personalizadas, Análisis predictivo");
        aiService.setImagenUrl(
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center");

        Service dataAnalytics = new Service(
                "Análisis de Datos",
                "Toma decisiones inteligentes basadas en datos.",
                new BigDecimal("8000000"),
                aiCategory);
        dataAnalytics.setInformacionAdicional("Dashboards interactivos y reportes automatizados.");
        dataAnalytics.setCaracteristicas("Power BI, Tableau, Python, SQL, Machine Learning");
        dataAnalytics.setImagenUrl(
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center");
        dataAnalytics.aplicarPromocion(new BigDecimal("50"));

        // Guardar servicios
        serviceRepository.save(webApp);
        serviceRepository.save(mobileApp);
        serviceRepository.save(aiService);
        serviceRepository.save(dataAnalytics);

        System.out.println("Datos iniciales cargados exitosamente!");
    }
}