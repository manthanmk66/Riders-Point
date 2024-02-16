package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Model.Pillion_route_details;

public interface PillionRouteDetailsDao extends JpaRepository<Pillion_route_details, Integer>{

	@Query(value="select * from Pillion_route_details where start_point=:start_point and end_point=:end_point",nativeQuery= true)
	List<Pillion_route_details> getByRoute(String start_point, String end_point);

	@Query(value="select * from Pillion_route_details where route_id= :rid",nativeQuery= true)
	Pillion_route_details findRouteById(int rid);
	

}
