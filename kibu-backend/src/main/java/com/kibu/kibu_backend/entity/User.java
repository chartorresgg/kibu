package com.kibu.kibu_backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es requerido")
    @Size(max = 100, message = "El nombre no puede exceder 100 caracteres")
    @Column(nullable = false, length = 100)
    private String nombre;

    @NotBlank(message = "El email es requerido")
    @Email(message = "El email debe tener un formato válido")
    @Size(max = 150, message = "El email no puede exceder 150 caracteres")
    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @NotBlank(message = "La contraseña es requerida")
    @Size(min = 6, message = "La contraseña debe tener al menos 6 caracteres")
    @Column(nullable = false)
    private String password;

    @Size(max = 20, message = "El teléfono no puede exceder 20 caracteres")
    @Column(length = 20)
    private String telefono;

    @Size(max = 100, message = "La empresa no puede exceder 100 caracteres")
    @Column(length = 100)
    private String empresa;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole rol = UserRole.CLIENTE;

    @Column(nullable = false)
    private Boolean activo = true;

    @CreationTimestamp
    @Column(name = "fecha_registro", nullable = false, updatable = false)
    private LocalDateTime fechaRegistro;

    @UpdateTimestamp
    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    // Relaciones - comentadas temporalmente hasta crear las entidades
    // @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch =
    // FetchType.LAZY)
    // private List<Order> ordenes = new ArrayList<>();

    // @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch =
    // FetchType.LAZY)
    // private List<Refund> reembolsos = new ArrayList<>();

    // Enums
    public enum UserRole {
        ADMIN, CLIENTE
    }

    // Constructor para registro
    public User(String nombre, String email, String password, String telefono, String empresa) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.empresa = empresa;
        this.rol = UserRole.CLIENTE;
        this.activo = true;
    }

    // Método de utilidad
    public boolean isAdmin() {
        return this.rol == UserRole.ADMIN;
    }
}