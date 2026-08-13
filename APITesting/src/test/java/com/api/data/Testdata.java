package com.api.data;

import java.util.UUID;

public class Testdata {


    private static String loggerUserName = "kiara";


    public static String getName(){
       return "user_" + UUID.randomUUID().toString().substring(0, 8);
    }

    public static String getLoggedUserName(){
        return loggerUserName;
    }
}
