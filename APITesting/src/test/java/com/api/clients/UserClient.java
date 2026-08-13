package com.api.clients;


import com.api.specs.RequestSpec;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class UserClient {

    public Response createUserRequest(Object user){
        return given()
                .spec(RequestSpec.userRequestSpec())
                .body(user)
                .post("");
    }
}
