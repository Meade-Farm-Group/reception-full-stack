package com.example.backend.repository;

import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {

    //UserDTO updateUser(Long userID, UserDTO updateUserDTO);
    Optional<User> findUserById(Long id);
}
