package com.api.builder;

import com.api.utils.Secrets;
import com.api.model.User;

public class Userbuilder {

    private String Username;
    private String Password;

    public Userbuilder setName(String name){
        this.Username = "unique_"+name;
        this.Password = Secrets.get("PASSWORD");
        return this;
    }

    public User build(){
        return new User(this.Username,this.Password);
    }
}
