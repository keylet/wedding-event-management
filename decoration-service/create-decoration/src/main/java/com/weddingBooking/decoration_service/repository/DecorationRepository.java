package com.weddingBooking.decoration_service.repository;

import com.weddingBooking.decoration_service.model.Decoration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DecorationRepository extends JpaRepository<Decoration, Long> {

}
