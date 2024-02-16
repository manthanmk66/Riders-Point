package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.Model.Login;
import com.demo.Model.RpDetails;

@Repository
public interface Dao extends JpaRepository<Login, Integer>{

	@Query(value="SELECT * from loginrp where username=:username and password=:password",nativeQuery = true)
	List<Login> getUser(@Param("username")String username,@Param("password") String password);
	
	@Query(value="SELECT * from loginrp where username=:username LIMIT 1",nativeQuery = true)
	Login getUser(@Param("username")String username);
}

