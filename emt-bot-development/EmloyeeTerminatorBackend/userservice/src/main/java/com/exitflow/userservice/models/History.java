package com.exitflow.userservice.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name="History")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class History {
    @Id
    private int e_id;
    private String firstname;
    private String lastname;
    private String email;
    private String city;
    private String phone;
    private String address;
    private Date dob;
    private Date doj;
    private String account;
    private String ifsc;
    private String bankName;
    private String compensation;
    private String position;
    private String department;
    private String country;
    private String state;
    private String gender;
    private String status;
    private int teamId;
}
