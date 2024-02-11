package com.demo.Model;

public class Rider_Status {
	private int status_id;
	private String rp_id ;
	private String bike;
	private Double expense;
	
	public Rider_Status() {
		super();
	}

	public Rider_Status(int status_id, String rp_id, String bike, Double expense) {
		super();
		this.status_id = status_id;
		this.rp_id = rp_id;
		this.bike = bike;
		this.expense = expense;
	}

	public int getStatus_id() {
		return status_id;
	}

	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}

	public String getRp_id() {
		return rp_id;
	}

	public void setRp_id(String rp_id) {
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

	@Override
	public String toString() {
		return "Rider_Status [status_id=" + status_id + ", rp_id=" + rp_id + ", bike=" + bike + ", expense=" + expense
				+ "]";
	}
	
	
}
