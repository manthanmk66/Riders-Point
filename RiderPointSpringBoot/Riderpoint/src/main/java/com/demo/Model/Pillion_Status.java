package com.demo.Model;

public class Pillion_Status {
	private int status_id ;
	private int rp_id ;
	private  double avg_expense;
	
	
	public Pillion_Status() {
		super();
	}
	public Pillion_Status(int status_id, int rp_id, double avg_expense) {
		super();
		this.status_id = status_id;
		this.rp_id = rp_id;
		this.avg_expense = avg_expense;
	}
	public int getStatus_id() {
		return status_id;
	}
	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}
	public int getRp_id() {
		return rp_id;
	}
	public void setRp_id(int rp_id) {
		this.rp_id = rp_id;
	}
	public double getAvg_expense() {
		return avg_expense;
	}
	public void setAvg_expense(double avg_expense) {
		this.avg_expense = avg_expense;
	}
	@Override
	public String toString() {
		return "Pillion_Status [status_id=" + status_id + ", rp_id=" + rp_id + ", avg_expense=" + avg_expense + "]";
	}
	
}
