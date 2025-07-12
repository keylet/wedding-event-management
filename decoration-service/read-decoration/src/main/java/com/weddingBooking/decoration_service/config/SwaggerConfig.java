package com.weddingBooking.decoration_service.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Read Decoration Service API (GraphQL)")
                        .version("1.0")
                        .description("API for reading decoration services in WeddingBooking using GraphQL"))
                .servers(List.of(
                        new Server().url("http://44.208.178.247:8042").description("EC2 Production Server")
                ));
    }
}