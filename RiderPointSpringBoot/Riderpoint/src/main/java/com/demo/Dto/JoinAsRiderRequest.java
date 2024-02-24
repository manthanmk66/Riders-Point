package com.demo.Dto;

public class JoinAsRiderRequest {
	private Integer route_id;
	private String bike;
	private Double expense;
	private String license;
	private Boolean wantPillion;

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

	public Integer getRoute_id() {
		return route_id;
	}

	public void setRoute_id(Integer route_id) {
		this.route_id = route_id;
	}

	@Override
	public String toString() {
		return "JoinAsRiderRequest [route_id=" + route_id + ", bike=" + bike + ", expense=" + expense + ", license="
				+ license + ", wantPillion=" + wantPillion + "]";
	}

}
