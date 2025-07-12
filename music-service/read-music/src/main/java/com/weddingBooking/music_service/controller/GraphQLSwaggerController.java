package com.weddingBooking.music_service.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/graphql-api")
@Tag(name = "GraphQL API", description = "GraphQL Endpoints for Music Services")
public class GraphQLSwaggerController {

    private final String GRAPHQL_URL = "http://54.173.57.181:8062/graphql";

    @PostMapping
    @Operation(summary = "Execute GraphQL Query", description = "Send a GraphQL query to the server")
    public ResponseEntity<Map<String, Object>> executeGraphQLQuery(@RequestBody Map<String, Object> query) {
        return ResponseEntity.ok(Map.of("message", "GraphQL endpoint is available at /graphql"));
    }
}
