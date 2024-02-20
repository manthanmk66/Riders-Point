package com.demo.Dto;

import java.time.LocalTime;
import java.util.Date;

<<<<<<< HEAD
import com.demo.Model.Rider_Status;

public class Rider_route_details_Dto {
	private int status_id;
	private int route_id;
	private String start_point;
	private String end_point;
	private Date travel_date;
	private LocalTime start_time;
	private LocalTime end_time;
	private String description;
	private String bike;
	private Double expense;
	private String license ;
	private Boolean wantPillion;

	

	public Rider_route_details_Dto(String start_point, String end_point, Date travel_date, LocalTime start_time,
			LocalTime end_time, String description, String bike, Double expense, String license, Boolean wantPillion) {
		super();
		this.start_point = start_point;
		this.end_point = end_point;
		this.travel_date = travel_date;
		this.start_time = start_time;
		this.end_time = end_time;
		this.description = description;
		this.bike = bike;
		this.expense = expense;
		this.license = license;
		this.wantPillion = wantPillion;
	}

	public String getStart_point() {
		return start_point;
	}

	public void setStart_point(String start_point) {
		this.start_point = start_point;
	}

	public String getEnd_point() {
		return end_point;
	}

	public void setEnd_point(String end_point) {
		this.end_point = end_point;
	}

	public Date getTravel_date() {
		return travel_date;
	}

	public void setTravel_date(Date travel_date) {
		this.travel_date = travel_date;
	}

	public LocalTime getStart_time() {
		return start_time;
	}

	public void setStart_time(LocalTime start_time) {
		this.start_time = start_time;
	}

	public LocalTime getEnd_time() {
		return end_time;
	}

	public void setEnd_time(LocalTime end_time) {
		this.end_time = end_time;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	

	public String getBike() {
		return bike;
	}

	public void setBike(String bike) {
		this.bike = bike;
	}

	public Double getExpense() {
		return expense;
	}

	public void setExpense(Double expense) {
		this.expense = expense;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public Boolean getWantPillion() {
		return wantPillion;
	}

	public void setWantPillion(Boolean wantPillion) {
		this.wantPillion = wantPillion;
	}

	public int getStatus_id() {
		return status_id;
	}

	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}

=======


import com.demo.Model.Rider_Status;

public class Rider_route_details_Dto {
	
	 private int route_id ;
	 private Rider_Status status_id  ;
	 private String start_point; 
	 private String end_point  ; 
	 private Date travel_date; 
	 private LocalTime start_time ; 
	 private LocalTime end_time   ; 
	 private String description;
	 
	 
	public Rider_route_details_Dto() {
		super();
	}


	public Rider_route_details_Dto(int route_id, Rider_Status status_id, String start_point, String end_point, Date travel_date,
			LocalTime start_time, LocalTime end_time, String description) {
		super();
		this.route_id = route_id;
		this.status_id = status_id;
		this.start_point = start_point;
		this.end_point = end_point;
		this.travel_date = travel_date;
		this.start_time = start_time;
		this.end_time = end_time;
		this.description = description;
	}


>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1
	public int getRoute_id() {
		return route_id;
	}

<<<<<<< HEAD
=======

>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1
	public void setRoute_id(int route_id) {
		this.route_id = route_id;
	}

<<<<<<< HEAD
	@Override
	public String toString() {
		return "Rider_route_details_Dto [status_id=" + status_id + ", route_id=" + route_id + ", start_point="
				+ start_point + ", end_point=" + end_point + ", travel_date=" + travel_date + ", start_time="
				+ start_time + ", end_time=" + end_time + ", description=" + description + ", bike=" + bike
				+ ", expense=" + expense + ", license=" + license + ", wantPillion=" + wantPillion + "]";
	}

	

	
=======

	public Rider_Status getStatus_id() {
		return status_id;
	}


	public void setStatus_id(Rider_Status status_id) {
		this.status_id = status_id;
	}


	public String getStart_point() {
		return start_point;
	}


	public void setStart_point(String start_point) {
		this.start_point = start_point;
	}


	public String getEnd_point() {
		return end_point;
	}


	public void setEnd_point(String end_point) {
		this.end_point = end_point;
	}


	public Date getTravel_date() {
		return travel_date;
	}


	public void setTravel_date(Date travel_date) {
		this.travel_date = travel_date;
	}


	public LocalTime getStart_time() {
		return start_time;
	}


	public void setStart_time(LocalTime start_time) {
		this.start_time = start_time;
	}


	public LocalTime getEnd_time() {
		return end_time;
	}


	public void setEnd_time(LocalTime end_time) {
		this.end_time = end_time;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return "Rider_route_details [route_id=" + route_id + ", status_id=" + status_id + ", start_point=" + start_point
				+ ", end_point=" + end_point + ", travel_date=" + travel_date + ", start_time=" + start_time
				+ ", end_time=" + end_time + ", description=" + description + "]";
	}
>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1
}
