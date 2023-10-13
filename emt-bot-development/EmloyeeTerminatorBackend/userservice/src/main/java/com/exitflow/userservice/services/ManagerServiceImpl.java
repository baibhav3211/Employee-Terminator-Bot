package com.exitflow.userservice.services;

import com.exitflow.userservice.exceptions.UserDoesNotExistsException;
import com.exitflow.userservice.models.Manager;
import com.exitflow.userservice.repositories.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerServiceImpl implements ManagerService{

    @Autowired
    private ManagerRepository managerRepository;

    @Override
    public Manager addManager(Manager manager){
        return managerRepository.save(manager);
    }

    @Override
    public void removeManager(String department){
        managerRepository.deleteByDepartment(department);
    }

    @Override
    public Manager getManagerByDepartment(String department) throws UserDoesNotExistsException {
        Manager manager= managerRepository.findByDepartment(department).orElse(null);
        if(manager==null) throw new UserDoesNotExistsException("Given Department does not have a manager at this moment");
        return manager;
    }

    @Override
    public Boolean managerExists(String department){
        return managerRepository.existsByDepartment(department);
    }
}
