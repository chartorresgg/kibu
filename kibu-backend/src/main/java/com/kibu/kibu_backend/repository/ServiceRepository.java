package com.kibu.kibu_backend.repository;

import com.kibu.kibu_backend.entity.Service;
import com.kibu.kibu_backend.entity.ServiceCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

    // Buscar servicios activos
    List<Service> findByActivoTrue();

    Page<Service> findByActivoTrue(Pageable pageable);

    // Buscar por categoría
    List<Service> findByCategoriaAndActivoTrue(ServiceCategory categoria);

    Page<Service> findByCategoriaAndActivoTrue(ServiceCategory categoria, Pageable pageable);

    // Buscar por promoción
    List<Service> findByPromocionTrueAndActivoTrue();

    // Buscar por rango de precios
    @Query("SELECT s FROM Service s WHERE s.precio BETWEEN :precioMin AND :precioMax AND s.activo = true")
    Page<Service> findByPrecioRange(@Param("precioMin") BigDecimal precioMin,
            @Param("precioMax") BigDecimal precioMax,
            Pageable pageable);

    // Buscar por nombre (búsqueda por texto)
    @Query("SELECT s FROM Service s WHERE LOWER(s.nombre) LIKE LOWER(CONCAT('%', :nombre, '%')) AND s.activo = true")
    Page<Service> findByNombreContainingIgnoreCase(@Param("nombre") String nombre, Pageable pageable);

    // Buscar servicios disponibles
    @Query("SELECT s FROM Service s WHERE s.disponible > 0 AND s.activo = true")
    List<Service> findAvailableServices();

    // Contar servicios por categoría
    long countByCategoriaAndActivoTrue(ServiceCategory categoria);

    // Servicios ordenados por fecha de creación (más recientes primero)
    @Query("SELECT s FROM Service s WHERE s.activo = true ORDER BY s.fechaCreacion DESC")
    List<Service> findRecentServices(Pageable pageable);

    // Verificar si existe servicio por nombre
    boolean existsByNombreAndActivoTrue(String nombre);

    // Buscar servicio por ID y activo
    Optional<Service> findByIdAndActivoTrue(Long id);

    // Buscar servicios ordenados por precio
    List<Service> findByActivoTrueOrderByPrecioAsc();

    List<Service> findByActivoTrueOrderByPrecioDesc();
}