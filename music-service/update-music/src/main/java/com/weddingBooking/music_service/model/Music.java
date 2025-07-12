package com.weddingBooking.music_service.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Schema(description = "Music entity that represents a service in the system")
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_music;
    private String name;
    private Double price;

    public Long getId_music() {
        return id_music;
    }

    public void setId_music(Long id_music) {
        this.id_music = id_music;
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

    public Music() {
    }

    public Music(Long id_music, String name, Double price) {
        this.id_music = id_music;
        this.name = name;
        this.price = price;
    }
}
