package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Model.RpDetails;

public interface RpDetailsDao extends JpaRepository<RpDetails, Integer> {

	@Query("select * from RpDetails where mode='rider'")
	List<RpDetails> getAllriders();

}
