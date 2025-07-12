package com.weddingBooking.photography_service.config;

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
                        .title("Read Photography Service API (GraphQL)")
                        .version("1.0")
                        .description("API for reading photography services in WeddingBooking using GraphQL"))
                .servers(List.of(
                        new Server().url("http://3.229.141.153:8052").description("EC2 Production Server")
                ));
    }
}