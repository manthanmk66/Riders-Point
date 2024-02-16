package com.demo.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Cascade;

@Entity
@Table(name = "loginrp", uniqueConstraints={
        @UniqueConstraint(columnNames = "username")
       })
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int loginid;
	@OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "rp_id")
	private RpDetails id;
	private String username;
	private String password;
	private String roles;

	public Login() {
		super();
	}

	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public Login(RpDetails id, String username, String password) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	}

	public RpDetails getId() {
		return id;
	}

	public void setId(RpDetails id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "Login [id=" + id + ", username=" + username + ", password=" + password + "]";
	}

}
