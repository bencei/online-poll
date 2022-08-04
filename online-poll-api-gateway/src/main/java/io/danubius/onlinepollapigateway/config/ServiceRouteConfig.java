package io.danubius.onlinepollapigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.GatewayFilterSpec;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.gateway.route.builder.UriSpec;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.function.Function;

@Configuration
public class ServiceRouteConfig {

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        // @formatter:off
        return builder.routes()
                .route("r1", r -> r.path("/poll", "/poll/**")
                        .filters(pathVariableRewrite)
                        .uri("http://localhost:3000"))
                .route(r -> r.path("/vote", "/vote/**")
                        .filters(pathVariableRewrite)
                        .uri("http://localhost:3001"))
                .build();
        // @formatter:on
    }

    private final Function<GatewayFilterSpec, UriSpec> pathVariableRewrite =
            rw -> rw.rewritePath("/?<segment>.*", "/${segment}");


}
