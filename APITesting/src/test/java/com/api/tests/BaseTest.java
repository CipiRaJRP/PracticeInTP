package com.api.tests;

import com.api.clients.BookClient;
import com.api.clients.TokenClient;
import com.api.clients.UserClient;
import org.junit.jupiter.api.BeforeAll;

public class BaseTest {

    public  static UserClient userClient;
    public static TokenClient tokenClient;
    public static BookClient bookClient;
    @BeforeAll
    static void setup(){
        userClient = new UserClient();
        tokenClient = new TokenClient();
        bookClient = new BookClient();
    }

}
