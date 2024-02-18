package com.demo.Dto;



import com.demo.Model.RpDetails;

public class Rider_status_Dto {
	private int status_id;
	private RpDetails rp_id ;
	private String bike;
	private Double expense;
	private String license ;
	private Boolean wantPillion;
	
	public Rider_status_Dto() {
		super();
	}
	public Rider_status_Dto(int status_id, RpDetails rp_id, String bike, Double expense, String license,
			Boolean wantPillion) {
		super();
		this.status_id = status_id;
		this.rp_id = rp_id;
		this.bike = bike;
		this.expense = expense;
		this.license = license;
		this.wantPillion = wantPillion;
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
	@Override
	public String toString() {
		return "Rider_Status [status_id=" + status_id + ", rp_id=" + rp_id + ", bike=" + bike + ", expense=" + expense
				+ ", license=" + license + ", wantPillion=" + wantPillion + "]";
	}
}
