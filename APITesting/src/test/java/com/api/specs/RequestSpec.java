package com.api.specs;

import com.api.config.Config;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class RequestSpec {

 public static RequestSpecification baseRequest(){
     return new RequestSpecBuilder()
             .setBaseUri(Config.BASEURL())
             .setContentType(ContentType.JSON)
             .setAccept(ContentType.JSON)
             .build();
 }

 public static RequestSpecification userRequestSpec(){
     return new RequestSpecBuilder()
             .addRequestSpecification(RequestSpec.baseRequest())
             .setBasePath("/Account/v1/User")
             .build();
 }

 public static RequestSpecification tokenGeneration(){
     return new RequestSpecBuilder()
             .addRequestSpecification(RequestSpec.baseRequest())
             .setBasePath("/Account/v1/GenerateToken")
             .build();
 }

 public static RequestSpecification getBooksRequestSpec(String token){
     return new RequestSpecBuilder()
             .addRequestSpecification(RequestSpec.baseRequest())
             .setBasePath("/BookStore/v1/Books")
             .addHeader("Authorization: Bearer ",token)
             .build();

 }
}
