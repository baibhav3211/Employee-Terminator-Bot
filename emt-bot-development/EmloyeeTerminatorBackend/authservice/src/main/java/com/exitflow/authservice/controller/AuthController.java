package com.exitflow.authservice.controller;

import com.exitflow.authservice.exceptions.UserDoesNotExistsException;
import com.exitflow.authservice.exceptions.UserExistsException;
import com.exitflow.authservice.model.User;
import com.exitflow.authservice.model.UserCredentials;
import com.exitflow.authservice.services.AuthService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) throws UserExistsException, MessagingException {
        return new ResponseEntity<>(authService.registerUser(user), HttpStatus.CREATED);
    }

    @PutMapping("/updateuser/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable UUID userId, @RequestBody User updatedUser) {
        try {
            User user = authService.updateUser(userId, updatedUser);
            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody UserCredentials userCredentials) throws UserDoesNotExistsException {
        Map<String, String> token = authService.authenticateUser(userCredentials);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestParam String email) {
        try {
            authService.sendOtp(email);
            return new ResponseEntity<>("OTP sent successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to send OTP", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtpAndUpdatePassword(
            @RequestParam String email,
            @RequestParam String otp,
            @RequestParam String newPassword) {
        try {
            if (authService.verifyOtp(email, otp)) {
                authService.updatePassword(email, newPassword);
                return new ResponseEntity<>("Password updated successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid OTP", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update password", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getinactiveusers")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<User>> getInactiveUsers() {
        List<User> inactiveUsers = authService.getInactiveUsers();
        return new ResponseEntity<>(inactiveUsers, HttpStatus.OK);
    }

}
