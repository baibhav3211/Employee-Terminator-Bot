package com.exitflow.notificationservice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;


@Document(collection = "users")
public class User {

    @Id
    private String _id ;

    private String userType ;

    private List<Notification> notifications = new ArrayList<>();

    public User() {
    }

    public User(String _id, String userType) {
        this._id = _id;
        this.userType = userType;
    }

    public User(String userType) {
        this.userType = userType;
        this.notifications = new ArrayList<>()  ;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public List<Notification> getNotifications() {
        return notifications;
    }

    public void setNotifications(List<Notification> notifications) {
        this.notifications = notifications;
    }
}
