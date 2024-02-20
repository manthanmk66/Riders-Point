package com.demo.Model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;


<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.CascadeType;
=======
>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1

@Entity
public class Rider_Status {
	@Id
<<<<<<< HEAD
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int status_id;
	@OneToOne
	@JoinColumn(name = "rp_id")
	private RpDetails rp_id;
=======
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int status_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="rp_id")
	private RpDetails rp_id ;
>>>>>>> 0a325a3568ab47e66c93239589d4b2be72d5b7b1
	private String bike;
	private Double expense;
	private String license;
	private Boolean wantPillion;

	@OneToOne
	@JoinColumn(name = "pillion_rp_id")
	private RpDetails pillon;
	@ManyToOne
	@JsonIgnoreProperties(value = { "status_id", "handler", "hibernateLazyInitializer" }, allowSetters = true)
	@JoinColumn(name = "route_id")
	private Rider_route_details routeDetails;

	public Rider_Status() {
		super();
	}

	public Rider_Status(RpDetails rp_id, String bike, Double expense, String license, Boolean wantPillion,
			RpDetails pillon) {
		super();
		this.rp_id = rp_id;
		this.bike = bike;
		this.expense = expense;
		this.license = license;
		this.wantPillion = wantPillion;
		this.pillon = pillon;
	}

	public Rider_Status(RpDetails rp_id, String bike, Double expense, String license, Boolean wantPillion,
			RpDetails pillon, Rider_route_details routeDetails) {
		super();
		this.rp_id = rp_id;
		this.bike = bike;
		this.expense = expense;
		this.license = license;
		this.wantPillion = wantPillion;
		this.pillon = pillon;
		this.routeDetails = routeDetails;
	}

	public int getStatus_id() {
		return status_id;
	}

	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}

	public RpDetails getRp_id() {
		return rp_id;
	}

	public void setRp_id(RpDetails rp_id) {
		this.rp_id = rp_id;
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

	public Rider_route_details getRouteDetails() {
		return routeDetails;
	}

	public void setRouteDetails(Rider_route_details routeDetails) {
		this.routeDetails = routeDetails;
	}

	
	public RpDetails getPillon() {
		return pillon;
	}

	public void setPillon(RpDetails pillon) {
		this.pillon = pillon;
	}

	@Override
	public String toString() {
		return "Rider_Status [status_id=" + status_id + ", rp_id=" + rp_id + ", bike=" + bike + ", expense=" + expense
				+ ", license=" + license + ", wantPillion=" + wantPillion + ", pillon=" + pillon + ", routeDetails="
				+ routeDetails + "]";
	}

	

}
