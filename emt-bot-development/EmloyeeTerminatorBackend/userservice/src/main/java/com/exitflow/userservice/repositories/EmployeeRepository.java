package com.exitflow.userservice.repositories;

import com.exitflow.userservice.models.Employee;
import com.exitflow.userservice.models.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    Optional<Employee> findById(int e_id);
    Optional<Employee> findByEmail(String email);
    Employee deleteById(int e_id);
    List<Employee> findAll();
}
