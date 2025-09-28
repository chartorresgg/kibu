package com.kibu.kibu_backend.repository;

import com.kibu.kibu_backend.entity.ServiceCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceCategoryRepository extends JpaRepository<ServiceCategory, Long> {

    List<ServiceCategory> findByActivaTrue();

    Optional<ServiceCategory> findByNombreAndActivaTrue(String nombre);

    boolean existsByNombre(String nombre);
}