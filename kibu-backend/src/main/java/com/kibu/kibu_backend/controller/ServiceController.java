package com.kibu.kibu_backend.controller;

import com.kibu.kibu_backend.entity.Service;
import com.kibu.kibu_backend.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:5173" })
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    // GET /api/services - Obtener todos los servicios
    @GetMapping
    public ResponseEntity<List<Service>> getAllServices() {
        List<Service> services = serviceRepository.findByActivoTrue();
        return ResponseEntity.ok(services);
    }

    // GET /api/services/paged - Obtener servicios con paginación
    @GetMapping("/paged")
    public ResponseEntity<Page<Service>> getServicesPageable(Pageable pageable) {
        Page<Service> services = serviceRepository.findByActivoTrue(pageable);
        return ResponseEntity.ok(services);
    }

    // GET /api/services/{id} - Obtener servicio por ID
    @GetMapping("/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable Long id) {
        Optional<Service> service = serviceRepository.findByIdAndActivoTrue(id);
        return service.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // GET /api/services/search - Buscar servicios por nombre
    @GetMapping("/search")
    public ResponseEntity<Page<Service>> searchServices(
            @RequestParam String nombre,
            Pageable pageable) {
        Page<Service> services = serviceRepository.findByNombreContainingIgnoreCase(nombre, pageable);
        return ResponseEntity.ok(services);
    }

    // GET /api/services/promociones - Obtener servicios en promoción
    @GetMapping("/promociones")
    public ResponseEntity<List<Service>> getServicesOnPromotion() {
        List<Service> services = serviceRepository.findByPromocionTrueAndActivoTrue();
        return ResponseEntity.ok(services);
    }

    // POST /api/services - Crear nuevo servicio (temporal, sin seguridad)
    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody Service service) {
        Service savedService = serviceRepository.save(service);
        return ResponseEntity.ok(savedService);
    }

    // PUT /api/services/{id} - Actualizar servicio
    @PutMapping("/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service serviceDetails) {
        Optional<Service> serviceOptional = serviceRepository.findById(id);

        if (serviceOptional.isPresent()) {
            Service service = serviceOptional.get();
            service.setNombre(serviceDetails.getNombre());
            service.setDescripcion(serviceDetails.getDescripcion());
            service.setPrecio(serviceDetails.getPrecio());
            service.setPromocion(serviceDetails.getPromocion());
            service.setPorcentajeDescuento(serviceDetails.getPorcentajeDescuento());
            service.setDisponible(serviceDetails.getDisponible());
            service.setImagenUrl(serviceDetails.getImagenUrl());

            Service updatedService = serviceRepository.save(service);
            return ResponseEntity.ok(updatedService);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE /api/services/{id} - Eliminar servicio (soft delete)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        Optional<Service> serviceOptional = serviceRepository.findById(id);

        if (serviceOptional.isPresent()) {
            Service service = serviceOptional.get();
            service.setActivo(false);
            serviceRepository.save(service);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}