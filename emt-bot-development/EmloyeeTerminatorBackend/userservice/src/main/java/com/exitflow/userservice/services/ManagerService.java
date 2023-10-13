package com.exitflow.userservice.services;

import com.exitflow.userservice.exceptions.UserDoesNotExistsException;
import com.exitflow.userservice.models.Manager;

public interface ManagerService {
    Manager addManager(Manager manager);
    void removeManager(String department);
    Manager getManagerByDepartment (String department) throws UserDoesNotExistsException;
    Boolean managerExists(String department);


}
