package com.exitflow.notificationservice.services;

import com.exitflow.notificationservice.exceptions.NotificationNotFoundException;
import com.exitflow.notificationservice.exceptions.UserNotFoundException;
import com.exitflow.notificationservice.models.Notification;
import com.exitflow.notificationservice.models.User;

import java.util.List;

public interface UserService {

    User addNewUser(User user) ;

    List<User> getAllUsers() ;

    List<Notification> getNotificationForUser(String userId) throws UserNotFoundException;

    Notification getNotificationForUserById(String userId , String notificationId) throws UserNotFoundException, NotificationNotFoundException;
    User createNotificationForUser(String userId , String message) throws UserNotFoundException ;

    Notification findNotificationForUser(String userId, String notificationId) throws UserNotFoundException, NotificationNotFoundException;
    User markNotificationAsReadForUser(String userId, String notificationId) throws UserNotFoundException, NotificationNotFoundException;

}
