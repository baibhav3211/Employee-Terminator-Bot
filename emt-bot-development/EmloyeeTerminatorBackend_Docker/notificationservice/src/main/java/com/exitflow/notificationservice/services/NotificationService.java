package com.exitflow.notificationservice.services;

import com.exitflow.notificationservice.exceptions.NotificationNotFoundException;
import com.exitflow.notificationservice.models.Notification;
import com.exitflow.notificationservice.models.User;

import java.util.List;
import java.util.Map;

public interface NotificationService {
    Notification createNotification(String message) ;

    List<Notification> getAllNotifications() ;

    Notification findNotificationById(String notificationId) throws NotificationNotFoundException;

    Notification markNotificationAsRead(String notificationId) throws NotificationNotFoundException;






}
