package com.demo.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Suggestion_table {
	@Id
	private int sgtnId;
	@OneToOne
	@JoinColumn(name="rp_id")
	 private RpDetails rp_id;
	 private String suggestion;
	public Suggestion_table() {
		super();
	}
	public Suggestion_table(RpDetails rp_id, String suggestion) {
		super();
		this.rp_id = rp_id;
		this.suggestion = suggestion;
	}
	public RpDetails getRp_id() {
		return rp_id;
	}
	public void setRp_id(RpDetails rp_id) {
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
