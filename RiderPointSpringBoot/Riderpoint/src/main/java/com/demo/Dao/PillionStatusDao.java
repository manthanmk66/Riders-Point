package com.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Model.Pillion_Status;

public interface PillionStatusDao extends JpaRepository<Pillion_Status, Integer>{

	@Query(value="select * from pillion_status where status_id=:sid",nativeQuery =true)
	Pillion_Status findStatusById(int sid);


	

}
