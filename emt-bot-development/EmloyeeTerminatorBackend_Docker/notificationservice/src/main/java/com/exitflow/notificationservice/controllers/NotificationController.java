package com.exitflow.notificationservice.controllers;

import com.exitflow.notificationservice.exceptions.NotificationNotFoundException;
import com.exitflow.notificationservice.models.Notification;
import com.exitflow.notificationservice.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService ;

    @GetMapping
    public ResponseEntity<List<Notification>> getAllNotifications(){
        return new ResponseEntity<>(notificationService.getAllNotifications() , HttpStatus.OK) ;
    }


    @PostMapping
    public ResponseEntity<Notification> createNotification(@RequestBody String message){
        return new ResponseEntity<>(notificationService.createNotification(message)  , HttpStatus.CREATED);
    }



    @PutMapping("/{notification_id}/mark-as-read")
    public ResponseEntity<Notification> markNotificationAsRead(@PathVariable String notification_id) throws NotificationNotFoundException {
        return new ResponseEntity<>(notificationService.markNotificationAsRead(notification_id)  , HttpStatus.OK);
    }




}
