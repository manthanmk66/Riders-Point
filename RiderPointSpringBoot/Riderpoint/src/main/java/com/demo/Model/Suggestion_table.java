package com.demo.Model;


public class Suggestion_table {
	 private int rp_id;
	 private String suggestion;
	public Suggestion_table() {
		super();
	}
	public Suggestion_table(int rp_id, String suggestion) {
		super();
		this.rp_id = rp_id;
		this.suggestion = suggestion;
	}
	public int getRp_id() {
		return rp_id;
	}
	public void setRp_id(int rp_id) {
		this.rp_id = rp_id;
	}
	public String getSuggestion() {
		return suggestion;
	}
	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}
	@Override
	public String toString() {
		return "Suggestion_table [rp_id=" + rp_id + ", suggestion=" + suggestion + "]";
	}
	 
	 
}
