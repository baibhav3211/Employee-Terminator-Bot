package com.exitflow.userservice.services;

import com.exitflow.userservice.models.Employee;

import java.util.List;

public interface EmployeeService {

    Employee addEmployee(Employee employee);
    Employee removeEmployee(int e_id);

    List<Employee> getAllEmployees();

    void updateEmployee(Employee employee);
    Employee getEmployeeById(int e_id);

    Employee getEmployeeByEmail(String email);


}
