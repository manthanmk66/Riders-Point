package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Model.RpDetails;

public interface RpDetailsDao extends JpaRepository<RpDetails, Integer> {

	@Query(value="select * from Rp_Details where mode='rider'",nativeQuery = true)
	List<RpDetails> getAllriders();

	@Query(value="select * from Rp_Details where mode='pillion'",nativeQuery =true)
	List<RpDetails> getAllPillions();

	@Query(value="select * from Rp_Details where id=:id",nativeQuery =true)
	RpDetails findPillionById(int id);
	
	@Query(value="select * from Rp_Details where id=:id",nativeQuery =true)
	RpDetails findRiderById(int id);

	

}
