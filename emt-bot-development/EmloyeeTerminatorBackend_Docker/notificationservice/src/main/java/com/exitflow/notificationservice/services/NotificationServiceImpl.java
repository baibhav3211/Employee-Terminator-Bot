package com.exitflow.notificationservice.services;

import com.exitflow.notificationservice.exceptions.NotificationNotFoundException;
import com.exitflow.notificationservice.models.Notification;
import com.exitflow.notificationservice.models.User;
import com.exitflow.notificationservice.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class NotificationServiceImpl implements NotificationService{

    @Autowired
    private NotificationRepository notificationRepository ;

    //To create new notification in database
    @Override
    public Notification createNotification(String message) {
        Notification new_notification = new Notification(message) ;
        new_notification.setCreatedAt(new Date() );
        return notificationRepository.save(new_notification);
    }

//    To get all notifications from database
    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }


    @Override
    public Notification findNotificationById(String Id) throws NotificationNotFoundException {

        Notification notification =  notificationRepository.findById(Id).get() ;

        if(notification == null){
            throw new NotificationNotFoundException("Notification With the Id Does Not Exit") ;
        }

        return notification ;
    }
    @Override
    public Notification markNotificationAsRead(String notificationId) throws NotificationNotFoundException {
        Notification notification = findNotificationById(notificationId) ;
        notification.setRead(true) ;
        return notificationRepository.save(notification);
    }

}
