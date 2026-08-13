package com.api.clients;

import com.api.specs.RequestSpec;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BookClient {
    public Response getBooksListRequest(String token){
        return given()
                .spec(RequestSpec.getBooksRequestSpec(token))
                .get("");
    }
}
