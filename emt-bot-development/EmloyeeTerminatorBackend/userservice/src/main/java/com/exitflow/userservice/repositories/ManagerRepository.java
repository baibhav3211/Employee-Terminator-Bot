package com.exitflow.userservice.repositories;

import com.exitflow.userservice.models.Manager;
import com.exitflow.userservice.models.TeamLead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManagerRepository extends JpaRepository<Manager,String> {
    Optional<Manager> findByDepartment(String department);
    boolean existsByDepartment(String department);
    void deleteByDepartment(String department);
}
