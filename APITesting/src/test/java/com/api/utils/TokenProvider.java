package com.api.utils;

import com.api.specs.RequestSpec;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;


public class TokenProvider {

    public static String fetchTokenFor(Object user) {
        return  makeTokenGeneration(user)
                .then().extract()
                .jsonPath().getString("token");
    }

    public static Response makeTokenGeneration(Object user){
        return given()
                .spec(RequestSpec.tokenGeneration())
                .body(user)
                .post("");
    }
}
