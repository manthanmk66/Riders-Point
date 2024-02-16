package com.demo.dto;

import javax.persistence.Entity;
import javax.persistence.Id;


public class RpDetailDTO {
		private int id ;
		private String name;
		private String mobile;
		private String address;
		private String alert;
		private String mode;
		
		public RpDetailDTO() {
			super();
		}

		public RpDetailDTO(int id, String name, String mobile, String address, String alert, String mode) {
			super();
			this.id = id;
			this.name = name;
			this.mobile = mobile;
			this.address = address;
			this.alert = alert;
			this.mode = mode;
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getMobile() {
			return mobile;
		}

		public void setMobile(String mobile) {
			this.mobile = mobile;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getAlert() {
			return alert;
		}

		public void setAlert(String alert) {
			this.alert = alert;
		}

		public String getMode() {
			return mode;
		}

		public void setMode(String mode) {
			this.mode = mode;
		}

		@Override
		public String toString() {
			return "RpDetailDTO [id=" + id + ", name=" + name + ", mobile=" + mobile + ", address=" + address + ", alert="
					+ alert + ", mode=" + mode + "]";
		}

		
}

