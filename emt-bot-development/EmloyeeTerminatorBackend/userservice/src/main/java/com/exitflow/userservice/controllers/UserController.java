package com.exitflow.userservice.controllers;


import com.exitflow.userservice.models.Employee;
import com.exitflow.userservice.models.History;
import com.exitflow.userservice.models.Manager;
import com.exitflow.userservice.models.TeamLead;
import com.exitflow.userservice.services.EmployeeService;
import com.exitflow.userservice.services.HistoryService;
import com.exitflow.userservice.services.ManagerService;
import com.exitflow.userservice.services.TeamLeadService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Random;

@RestController
@RequestMapping("/api/v1")
@Transactional
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private HistoryService historyService;

    @Autowired
    private ManagerService managerService;

    @Autowired
    private TeamLeadService teamLeadService;

    @PostMapping("employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Random random = new Random();
        employee.setE_id(random.nextInt(900000) + 100000);
        if(Objects.equals(employee.getPosition(), "TeamLead")) {
            TeamLead teamLead = new TeamLead(employee.getTeamId(),employee.getFirstname()+" "+employee.getLastname(),employee.getE_id());
            teamLeadService.addTeamLead(teamLead);}
        else if (Objects.equals(employee.getPosition(), "Manager")) {
            Manager manager=new Manager(employee.getDepartment(),employee.getFirstname()+" "+employee.getLastname(),employee.getE_id());
            managerService.addManager(manager);}

        return new ResponseEntity<>(employeeService.addEmployee(employee), HttpStatus.CREATED);
    }

    @GetMapping("employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return new ResponseEntity<>(employeeService.getAllEmployees(),HttpStatus.OK);
    }

    @GetMapping("employee/id/{e_id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int e_id){
        return new ResponseEntity<>(employeeService.getEmployeeById(e_id),HttpStatus.FOUND);
    }

    @GetMapping("employee/email/{email}")
    public ResponseEntity<Employee> getEmployeeByEmail(@PathVariable String email){
        return new ResponseEntity<>(employeeService.getEmployeeByEmail(email),HttpStatus.FOUND);
    }

    @GetMapping("history/{e_id}")
    public ResponseEntity<History> getHistoryById(@PathVariable int e_id){
        return new ResponseEntity<>(historyService.getHistoryById(e_id),HttpStatus.FOUND);
    }

    @GetMapping("history")
    public ResponseEntity<List<History>> getAllHistory(){
        return new ResponseEntity<>(historyService.getAllHistory(),HttpStatus.OK);
    }

    @DeleteMapping("employee/{e_id}")
    public ResponseEntity<?> terminateEmployee(@RequestBody Employee employee){
        if(Objects.equals(employee.getPosition(), "TeamLead"))
        {teamLeadService.removeTeamLead(employee.getTeamId());}
        else if(Objects.equals(employee.getPosition(), "Manager"))
        {managerService.removeManager(employee.getDepartment());}

        return new ResponseEntity<>(employeeService.removeEmployee(employee.getE_id()),HttpStatus.ACCEPTED);
    }

    @PostMapping("history")
    public ResponseEntity<History> addHistory(@RequestBody History history)
    {return new ResponseEntity<>(historyService.addHistory(history),HttpStatus.CREATED);}


}
