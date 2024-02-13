package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;

@Repository
public interface Dao extends JpaRepository<Login, Integer>{

}

