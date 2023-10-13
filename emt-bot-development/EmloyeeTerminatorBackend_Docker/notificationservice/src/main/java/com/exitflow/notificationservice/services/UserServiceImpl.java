package com.exitflow.notificationservice.services;

import com.exitflow.notificationservice.exceptions.NotificationNotFoundException;
import com.exitflow.notificationservice.exceptions.UserNotFoundException;
import com.exitflow.notificationservice.models.Notification;
import com.exitflow.notificationservice.models.User;
import com.exitflow.notificationservice.repositories.NotificationRepository;
import com.exitflow.notificationservice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements  UserService{

    @Autowired
    private NotificationService  notificationService;
    @Autowired
   private UserRepository userRepository ;


     @Override
    public User addNewUser(User user){
      return userRepository.save(user) ;
    }

    @Override
    public List<User> getAllUsers(){
      return userRepository.findAll() ;
    }
    @Override
    public List<Notification> getNotificationForUser(String userId) throws UserNotFoundException {
        User user = userRepository.findById(userId).get() ;

        return user.getNotifications() ;
    }

    @Override
    public Notification getNotificationForUserById(String userId, String notificationId) throws UserNotFoundException, NotificationNotFoundException {
        List<Notification> notifications = getNotificationForUser(userId) ;

        // Find the notification by ID in the list
        Optional<Notification> notificationOptional = notifications.stream()
                .filter(notification -> notification.getNotificationId().equals(notificationId))
                .findFirst();

        if (notificationOptional.isPresent()) {
            // Return the found notification
            return notificationOptional.get();
        } else {
            throw new NotificationNotFoundException("Notification not found for the given ID.");
        }

    }

    @Override
    public User createNotificationForUser(String userId , String message) throws UserNotFoundException{
        User user = userRepository.findById(userId).get() ;
        if(user == null){
            throw new UserNotFoundException("User Does Not Exist !! ") ;
        }

        Notification new_notification = notificationService.createNotification(message) ;

        List<Notification> notifications = user.getNotifications() ;

        if(notifications == null)
            notifications = new ArrayList<>() ;

        notifications.add(new_notification) ;

        userRepository.save(user) ;

        return user ;

    }

    @Override
    public Notification findNotificationForUser(String userId, String notificationId) throws UserNotFoundException, NotificationNotFoundException {
        User user = userRepository.findById(userId).get() ;
        if(user == null){
            throw new UserNotFoundException("User Does Not Exist !! ") ;
        }

        Notification notification = notificationService.findNotificationById(notificationId) ;

        return notification ;

    }

    @Override
    public User markNotificationAsReadForUser(String userId, String notificationId) throws UserNotFoundException, NotificationNotFoundException {
        User user = userRepository.findById(userId).get() ;
        if(user == null){
            throw new UserNotFoundException("User Does Not Exist !! ") ;
        }

        List<Notification> notifications = user.getNotifications() ;

        for (Notification notification : notifications) {
            if (notification.getNotificationId().equals(notificationId)) { // Compare by notification ID
                notification.setRead(true); // Mark the notification as read
            }
        }
        // Save the updated notifications list
        user.setNotifications(notifications);

        return userRepository.save(user);

    }


}
