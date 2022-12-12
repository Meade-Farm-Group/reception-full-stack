package com.example.backend.entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity

@Table(name="reception_table")
public class User {

    public User(){}

    public User(LocalDateTime arrival_time, LocalDateTime departure_time, String guest_name, String guest_company, String phone_number, String host_employee, String area) {
        this.arrival_time = arrival_time;
       // this.departure_time = departure_time;
        this.guest_name = guest_name;
        this.guest_company = guest_company;
        this.phone_number = phone_number;
        this.host_employee = host_employee;
        this.area = area;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "arrival_time")
    private LocalDateTime arrival_time;
/*
    @Column(name = "departure_time")
    private LocalDateTime departure_time;
*/
    @Column(name = "guest_name")
    private String guest_name;

    @Column(name = "guest_company")
    private String guest_company;

    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "host_employee")
    private String host_employee;

    @Column(name = "area")
    private String area;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getArrival_time() {
        return arrival_time;
    }

    public void setArrival_time(LocalDateTime arrival_time) {
        this.arrival_time = arrival_time;
    }
/*
    public LocalDateTime getDeparture_time() {
        return departure_time;
    }

    public void setDeparture_time(LocalDateTime departure_time) {
        this.departure_time = departure_time;
    }
*/
    public String getGuest_name() {
        return guest_name;
    }

    public void setGuest_name(String guest_name) {
        this.guest_name = guest_name;
    }

    public String getGuest_company() {
        return guest_company;
    }

    public void setGuest_company(String guest_company) {
        this.guest_company = guest_company;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getHost_employee() {
        return host_employee;
    }

    public void setHost_employee(String host_employee) {
        this.host_employee = host_employee;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }


}
