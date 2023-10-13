package com.exitflow.userservice.services;

import com.exitflow.userservice.models.Employee;
import com.exitflow.userservice.repositories.EmployeeRepository;
import com.exitflow.userservice.repositories.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    @Override
    public Employee removeEmployee(int e_id){
        return employeeRepository.deleteById(e_id);
    }

    @Override
    public List<Employee> getAllEmployees(){
       return employeeRepository.findAll();
    }

    @Override
    public void updateEmployee(Employee employee){
        employeeRepository.save(employee);
    }

    @Override
    public Employee getEmployeeById(int e_id){
        return employeeRepository.findById(e_id).orElse(null);
    }

    @Override
    public Employee getEmployeeByEmail(String email){
        return employeeRepository.findByEmail(email).orElse(null);
    }


}
