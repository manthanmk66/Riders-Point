package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;

@Repository
public interface Dao extends JpaRepository<Login, Integer>{

	@Query(value = "select * from Login where username=:uname and password=:pass",nativeQuery = true)
	Login getValidUser(String uname, String pass);

}

