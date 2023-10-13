package com.exitflow.notificationservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class NotificationServiceExceptionalHandler {

@ExceptionHandler(NotificationNotFoundException.class)
public ResponseEntity<?> handleNotificationNotFoundException(NotificationNotFoundException exception){
  return new ResponseEntity<>(exception.getMessage() , HttpStatus.NOT_FOUND) ;
}


@ExceptionHandler(UserNotFoundException.class)
public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException exception){
  return new ResponseEntity<>(exception.getMessage() , HttpStatus.NOT_FOUND) ;
}

}
