package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Dto.Rider_status_Dto;
import com.demo.Model.Rider_Status;
import com.demo.Model.RpDetails;

public interface Rider_status_dao extends JpaRepository<Rider_Status, Integer> {
	
	@Query(value="select * from Rider_Status where status_id=:newId",nativeQuery = true)
	Rider_Status findStatusById(int newId);

//	@Query(value="select * from Rider_Status where mode='rider'",nativeQuery = true)
//	List<Rider_Status> addStatus();

	

}
