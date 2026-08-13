package com.api.config;


import io.github.cdimascio.dotenv.Dotenv;


public class Config {

    private Config(){}

    private static Dotenv dotenv = Dotenv.load();

    private static String baseUrl = dotenv.get("BASEURL");

    public static String BASEURL(){
        return baseUrl;
    }
}
