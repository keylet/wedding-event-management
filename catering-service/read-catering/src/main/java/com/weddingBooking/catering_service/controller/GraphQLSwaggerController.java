package com.weddingBooking.catering_service.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/graphql-api")
@Tag(name = "GraphQL API", description = "GraphQL Endpoints for Catering Services")
public class GraphQLSwaggerController {

    private final String GRAPHQL_URL = "http://44.208.178.247:8072/graphql"; // Cambia si es necesario

    @PostMapping
    @Operation(summary = "Execute GraphQL Query", description = "Send a GraphQL query to the server")
    public ResponseEntity<Map<String, Object>> executeGraphQLQuery(@RequestBody Map<String, Object> query) {
        return ResponseEntity.ok(Map.of("message", "GraphQL endpoint is available at /graphql"));
    }
}
