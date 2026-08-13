package com.api.specs;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification;
import static org.hamcrest.Matchers.*;


public class ResponseSpec {

    public static ResponseSpecification responseSpecOf201(){

        return new ResponseSpecBuilder()
                .expectStatusCode(201)
                .expectContentType(ContentType.JSON)
                .build();
    }

    public static ResponseSpecification responseSpecOf200(){

        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .build();
    }

    public static  ResponseSpecification validateUserCreation(){
        return new ResponseSpecBuilder()
                .addResponseSpecification(responseSpecOf201())
                .expectBody("userID",notNullValue())
                .expectBody("username",notNullValue())
                .build();
    }

    public static ResponseSpecification validateTokenGeneration(){
        return new ResponseSpecBuilder()
                .addResponseSpecification(ResponseSpec.responseSpecOf200())
                .expectBody("token",notNullValue())
                .build();
    }

    public static ResponseSpecification validateReturnedBookResponse(){
        return new ResponseSpecBuilder()
                .addResponseSpecification(ResponseSpec.responseSpecOf200())
                .expectBody("books.size()",greaterThan(0))
                .expectBody("books[0].title",notNullValue())
                .build();
    }
}
