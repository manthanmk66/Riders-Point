package com.demo.Model;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Rider_route_details {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int route_id;

	@OneToMany(mappedBy = "routeDetails", cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
	private List<Rider_Status> status_id;
	private String start_point;
	private String end_point;
	private Date travel_date;
	private LocalTime start_time;
	private LocalTime end_time;
	private String description;

	@OneToOne
	private RpDetails createdBy;
	
	public Rider_route_details() {
		super();
	}

	public Rider_route_details(List<Rider_Status> status_id, String start_point, String end_point, Date travel_date,
			LocalTime start_time, LocalTime end_time, String description) {
		super();
		this.status_id = status_id;
		this.start_point = start_point;
		this.end_point = end_point;
		this.travel_date = travel_date;
		this.start_time = start_time;
		this.end_time = end_time;
		this.description = description;
	}

	public int getRoute_id() {
		return route_id;
	}

	public void setRoute_id(int route_id) {
		this.route_id = route_id;
	}

	public List<Rider_Status> getStatus_id() {
		return status_id;
	}

	public void setStatus_id(List<Rider_Status> status_id) {
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
	
	

	public RpDetails getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(RpDetails createdBy) {
		this.createdBy = createdBy;
	}

	@Override
	public String toString() {
		return "Rider_route_details [route_id=" + route_id + ", status_id=" + status_id + ", start_point=" + start_point
				+ ", end_point=" + end_point + ", travel_date=" + travel_date + ", start_time=" + start_time
				+ ", end_time=" + end_time + ", description=" + description + "]";
	}

}
