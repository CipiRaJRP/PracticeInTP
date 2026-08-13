package com.api.tests;

import com.api.builder.Userbuilder;
import com.api.data.Testdata;
import com.api.model.User;
import com.api.specs.ResponseSpec;
import org.junit.jupiter.api.Test;

public class GenerateToken extends BaseTest{

    @Test
    void generateTokenWithCreatedUser(){
        User user = new Userbuilder().setName(Testdata.getLoggedUserName()).build();
        tokenClient.tokenGenerationRequest(user).then().spec(ResponseSpec.validateTokenGeneration());
    }
}
