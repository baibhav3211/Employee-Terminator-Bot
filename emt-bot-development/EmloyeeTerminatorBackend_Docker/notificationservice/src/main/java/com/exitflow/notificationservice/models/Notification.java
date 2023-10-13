package com.exitflow.notificationservice.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "notifications")
public class Notification {
    @Id
    private String _id ;

    private String message ;

    private Date createdAt  = new Date();

    private boolean isRead ;

    public Notification() {
    }

    public Notification(String notificationId, String message, Date createdAt, boolean isRead) {
        this._id = notificationId;
        this.message = message;
        this.createdAt = createdAt;
        this.isRead = isRead;
    }

    public Notification(String message) {
        this.message = message ;
        this.isRead = false;
    }

    public String getNotificationId() {
        return _id;
    }

    public void setNotificationId(String notificationId) {
        this._id = notificationId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
    }
}
