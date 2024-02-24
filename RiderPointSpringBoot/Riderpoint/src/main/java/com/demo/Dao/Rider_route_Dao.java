package com.demo.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.demo.Model.Rider_route_details;
import com.demo.Model.RpDetails;

public interface Rider_route_Dao extends JpaRepository<Rider_route_details, Integer> {


	@Query(value="select * from Rider_route_details where start_point=:start and end_point=:end",nativeQuery = true)
	List<Rider_route_details> getbyroute(@Param("start")String start,@Param("end") String end);

	@Query(value="select * from Rider_route_details where route_id=:newId",nativeQuery = true)
	Rider_route_details findRoutebyid(int newId);

}
