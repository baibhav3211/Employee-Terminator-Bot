package com.exitflow.notificationservice.repositories;

import com.exitflow.notificationservice.models.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NotificationRepository extends MongoRepository <Notification , String> {

}
