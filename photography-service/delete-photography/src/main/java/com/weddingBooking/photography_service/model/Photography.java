package com.weddingBooking.photography_service.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Schema(description = "Photography entity that represents a service in the system")

public class Photography {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_photograhy;
    private String name;
    private Double price;

    public Long getId_photograhy() {
        return id_photograhy;
    }

    public void setId_photograhy(Long id_photograhy) {
        this.id_photograhy = id_photograhy;
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

    public Photography() {
    }

    public Photography(Long id_photograhy, String name, Double price) {
        this.id_photograhy = id_photograhy;
        this.name = name;
        this.price = price;
    }
}
