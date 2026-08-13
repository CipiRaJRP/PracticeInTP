package com.api.tests;

import com.api.builder.Userbuilder;
import com.api.data.Testdata;
import com.api.model.User;
import com.api.specs.RequestSpec;
import com.api.specs.ResponseSpec;
import io.restassured.response.Response;
import io.restassured.specification.ResponseSpecification;
import org.junit.jupiter.api.Test;

public class CreateUserTest extends BaseTest{

    @Test
    void createUserWithCredentials(){
        User user = new Userbuilder().setName(Testdata.getName()).build();
        userClient.createUserRequest(user).then().spec(ResponseSpec.validateUserCreation());
    }
}
