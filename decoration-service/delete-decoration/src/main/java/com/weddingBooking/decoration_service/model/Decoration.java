package com.weddingBooking.decoration_service.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Schema(description = "Decoration entity that represents a service in the system")
public class Decoration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_decoration;
    private String name;
    private Double price;

    public Long getId_decoration() {
        return id_decoration;
    }

    public void setId_decoration(Long id_decoration) {
        this.id_decoration = id_decoration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Decoration() {
    }

    public Decoration(Long id_decoration, String name, Double price) {
        this.id_decoration = id_decoration;
        this.name = name;
        this.price = price;
    }
}
