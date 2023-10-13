package com.exitflow.authservice.services;

import com.exitflow.authservice.exceptions.UserDoesNotExistsException;
import com.exitflow.authservice.exceptions.UserExistsException;
import com.exitflow.authservice.model.User;
import com.exitflow.authservice.model.UserCredentials;
import com.exitflow.authservice.repository.AuthRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private AuthRepository authRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtGeneratorService jwtGeneratorService;

    private Map<String, String> otpStore = new HashMap<>();

    @Override
    public User registerUser(User newUser) throws UserExistsException, MessagingException {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encryptPassword = bCryptPasswordEncoder.encode(newUser.getPassword());

        if(authRepository.existsByEmail(newUser.getEmail())){
            throw  new UserExistsException("User with the email already exists");
        }
        newUser.setPassword(encryptPassword);
        User registeredUser;
        registeredUser = authRepository.save(newUser);

        emailService.sendRegistrationConfirmationEmail(newUser.getEmail());

        return registeredUser;
    }

    @Override
    public User updateUser(UUID userId, User updatedUser) throws MessagingException {
        Optional<User> optionalUser = authRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            if (updatedUser.getUserType() != null) {
                existingUser.setUserType(updatedUser.getUserType());
            }
            existingUser.setActive(true);
            User updatedUserEntity = authRepository.save(existingUser);
            emailService.sendRegistrationAcceptanceEmail(existingUser.getEmail());
            return updatedUserEntity;
        } else {
            return null;
        }
    }

    @Override
    public Map<String, String> authenticateUser(UserCredentials userCredentials) throws UserDoesNotExistsException {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        Optional<User> userByEmail = authRepository.findByEmail(userCredentials.getEmail());

        if (userByEmail.isEmpty()) {
            throw new UserDoesNotExistsException("User not found with given email");
        }

        User user = userByEmail.get();

        if (!user.isActive()) {
            throw new UserDoesNotExistsException("Account is not active.");
        }

        if (bCryptPasswordEncoder.matches(userCredentials.getPassword(), user.getPassword()) || user.getPassword().equals(userCredentials.getPassword())) {
            String token = jwtGeneratorService.generateToken(userCredentials.getEmail());
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("userType", user.getUserType());
            return response;
        } else {
            throw new UserDoesNotExistsException("Credentials mismatch!");
        }
    }

    @Override
    public void sendOtp(String email) throws MessagingException {
        String otp = generateRandomOTP();
        otpStore.put(email, otp);
        emailService.sendOtpEmail(email, otp);
    }

    @Override
    public boolean verifyOtp(String email, String otp) {
        String storedOtp = otpStore.get(email);
        return storedOtp != null && storedOtp.equals(otp);
    }

    @Override
    public void updatePassword(String email, String newPassword) {
        Optional<User> userOptional = authRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            String encryptedPassword = bCryptPasswordEncoder.encode(newPassword);
            user.setPassword(encryptedPassword);

            // Save the updated user
            authRepository.save(user);
        }
    }

    private String generateRandomOTP() {
        Random random = new Random();
        int otp = 1000 + random.nextInt(9000);
        return String.valueOf(otp);
    }

    @Override
    public List<User> getInactiveUsers() {
        List<User> inactiveUsers = authRepository.findByIsActive(false);
        return inactiveUsers;
    }

}
