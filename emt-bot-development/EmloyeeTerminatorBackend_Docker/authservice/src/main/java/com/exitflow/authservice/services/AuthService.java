package com.exitflow.authservice.services;

import com.exitflow.authservice.exceptions.UserDoesNotExistsException;
import com.exitflow.authservice.exceptions.UserExistsException;
import com.exitflow.authservice.model.User;
import com.exitflow.authservice.model.UserCredentials;
import jakarta.mail.MessagingException;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface AuthService {
    User registerUser(User user) throws UserExistsException, MessagingException;
    User updateUser(UUID userId, User updatedUser) throws MessagingException;
    Map<String, String> authenticateUser(UserCredentials userCredentials) throws UserDoesNotExistsException;

    void sendOtp(String email) throws MessagingException;

    boolean verifyOtp(String email, String otp);

    void updatePassword(String email, String newPassword);

    List<User> getInactiveUsers();
}
