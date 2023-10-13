package com.exitflow.authservice.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void sendRegistrationConfirmationEmail(String userEmail) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom(fromEmail);
        helper.setTo(userEmail);
        helper.setSubject("Registration Confirmation");
        Context context = new Context();
        context.setVariable("companyName", "ExitFlow");
        String htmlContent = templateEngine.process("registration-confirmation.html", context);
        helper.setText(htmlContent, true);
        mailSender.send(mimeMessage);
    }

    public void sendRegistrationAcceptanceEmail(String userEmail) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
        helper.setFrom(fromEmail);
        helper.setTo(userEmail);
        helper.setSubject("Registration Accepted");
        Context context = new Context();
        context.setVariable("companyName", "ExitFlow");
        String htmlContent = templateEngine.process("registration-acceptance.html", context);
        helper.setText(htmlContent, true);
        mailSender.send(mimeMessage);
    }

    public void sendOtpEmail(String email, String otp) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
        helper.setFrom(fromEmail);
        helper.setTo(email);
        helper.setSubject("Verify OTP");

        // Create the HTML content for the email with the OTP
        String htmlContent = """
        <html>
            <body>
                <p>Dear User,</p>
                <p>Your OTP for verification is: <strong>%s</strong></p>
                <p>Please use this OTP to verify your account.</p>
                <p>If you didn't request this OTP, please ignore this email.</p>
                <p>Best regards,<br>ExitFlow Team</p>
            </body>
        </html>
    """.formatted(otp);

        helper.setText(htmlContent, true);

        // Send the email
        mailSender.send(mimeMessage);
    }

}
