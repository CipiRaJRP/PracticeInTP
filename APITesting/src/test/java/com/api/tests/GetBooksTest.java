package com.api.tests;

import com.api.builder.Userbuilder;
import com.api.data.Testdata;
import com.api.model.User;
import com.api.specs.ResponseSpec;
import com.api.utils.TokenProvider;
import org.junit.jupiter.api.Test;

public class GetBooksTest extends BaseTest{

    @Test
    void getBooksByAuthorizedToken(){
        User user = new Userbuilder().setName(Testdata.getLoggedUserName()).build();
        bookClient.getBooksListRequest(TokenProvider.fetchTokenFor(user))
                .then().spec(ResponseSpec.validateReturnedBookResponse());
    }
}
