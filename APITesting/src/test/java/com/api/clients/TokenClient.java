package com.api.clients;

import com.api.specs.RequestSpec;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class TokenClient {

    public Response tokenGenerationRequest(Object user){
        return given()
                .spec(RequestSpec.tokenGeneration())
                .body(user)
                .post("");
    }
}
