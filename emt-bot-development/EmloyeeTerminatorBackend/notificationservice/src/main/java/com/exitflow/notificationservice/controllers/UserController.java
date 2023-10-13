package com.exitflow.notificationservice.controllers;

import com.exitflow.notificationservice.exceptions.NotificationNotFoundException;
import com.exitflow.notificationservice.exceptions.UserNotFoundException;
import com.exitflow.notificationservice.models.Notification;
import com.exitflow.notificationservice.models.User;
import com.exitflow.notificationservice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService ;

    @GetMapping()
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUsers() , HttpStatus.OK) ;
    }

    @PostMapping()
    public ResponseEntity<User> createNewUser(@RequestBody User user){
        return new ResponseEntity<>(userService.addNewUser(user) , HttpStatus.CREATED) ;
    }
    @GetMapping("/{userId}/notifications")
    public ResponseEntity<List<Notification>> getNotificationsForUser(@PathVariable String userId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getNotificationForUser(userId) , HttpStatus.FOUND) ;
    }



    @PostMapping("/{userId}/create-new-notification")
    public ResponseEntity<User> createNotificationForUser(@PathVariable String userId , @RequestBody String message) throws UserNotFoundException {
        return new ResponseEntity<User>(userService.createNotificationForUser(userId , message) , HttpStatus.CREATED) ;
    }


    @PutMapping("/{userId}/{notification_id}/mark-as-read")
    public ResponseEntity<User> markNotificationAsRead(@PathVariable String userId, @PathVariable String notification_id) throws NotificationNotFoundException, UserNotFoundException {
        return new ResponseEntity<>(userService.markNotificationAsReadForUser(userId , notification_id)  , HttpStatus.OK);
    }
}
