package com.kibu.kibu_backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "servicios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre del servicio es requerido")
    @Size(max = 200, message = "El nombre no puede exceder 200 caracteres")
    @Column(nullable = false, length = 200)
    private String nombre;

    @NotBlank(message = "La descripción es requerida")
    @Size(max = 1000, message = "La descripción no puede exceder 1000 caracteres")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String descripcion;

    @Size(max = 2000, message = "La información adicional no puede exceder 2000 caracteres")
    @Column(name = "informacion_adicional", columnDefinition = "TEXT")
    private String informacionAdicional;

    @Size(max = 1000, message = "Las características no pueden exceder 1000 caracteres")
    @Column(columnDefinition = "TEXT")
    private String caracteristicas;

    @NotNull(message = "El precio es requerido")
    @DecimalMin(value = "0.0", inclusive = false, message = "El precio debe ser mayor a 0")
    @Digits(integer = 10, fraction = 2, message = "El precio debe tener máximo 10 dígitos enteros y 2 decimales")
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal precio;

    @Column(nullable = false)
    private Boolean promocion = false;

    @DecimalMin(value = "0.0", message = "El porcentaje de descuento no puede ser negativo")
    @DecimalMax(value = "100.0", message = "El porcentaje de descuento no puede ser mayor a 100")
    @Column(name = "porcentaje_descuento", precision = 5, scale = 2)
    private BigDecimal porcentajeDescuento = BigDecimal.ZERO;

    @Min(value = 0, message = "La cantidad disponible no puede ser negativa")
    @Column(nullable = false)
    private Integer disponible = 1;

    @Size(max = 500, message = "La URL de imagen no puede exceder 500 caracteres")
    @Column(name = "imagen_url", length = 500)
    private String imagenUrl;

    @Column(nullable = false)
    private Boolean activo = true;

    @CreationTimestamp
    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @UpdateTimestamp
    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    // Relaciones
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id", foreignKey = @ForeignKey(name = "fk_servicio_categoria"))
    private ServiceCategory categoria;

    // Relaciones comentadas temporalmente hasta crear las entidades
    // @OneToMany(mappedBy = "servicio", cascade = CascadeType.ALL, fetch =
    // FetchType.LAZY)
    // private List<ServiceGallery> galeria = new ArrayList<>();

    // @OneToMany(mappedBy = "servicio", cascade = CascadeType.ALL, fetch =
    // FetchType.LAZY)
    // private List<OrderDetail> detallesOrden = new ArrayList<>();

    // Constructor personalizado
    public Service(String nombre, String descripcion, BigDecimal precio, ServiceCategory categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.promocion = false;
        this.disponible = 1;
        this.activo = true;
    }

    // Métodos utilitarios
    public BigDecimal getPrecioConDescuento() {
        if (promocion && porcentajeDescuento != null && porcentajeDescuento.compareTo(BigDecimal.ZERO) > 0) {
            BigDecimal descuento = precio.multiply(porcentajeDescuento).divide(BigDecimal.valueOf(100));
            return precio.subtract(descuento);
        }
        return precio;
    }

    public boolean estaDisponible() {
        return activo && disponible > 0;
    }

    public void aplicarPromocion(BigDecimal porcentaje) {
        this.promocion = true;
        this.porcentajeDescuento = porcentaje;
    }

    public void quitarPromocion() {
        this.promocion = false;
        this.porcentajeDescuento = BigDecimal.ZERO;
    }
}