
public class pillion {
	private int pillon_id;
	private String name;
	private String Mobile;
	private String address;
	
	public pillion() {
		super();
	}

	public pillion(int pillon_id, String name, String mobile, String address) {
		super();
		this.pillon_id = pillon_id;
		this.name = name;
		Mobile = mobile;
		this.address = address;
	}

	public int getPillon_id() {
		return pillon_id;
	}

	public void setPillon_id(int pillon_id) {
		this.pillon_id = pillon_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return Mobile;
	}

	public void setMobile(String mobile) {
		Mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "pillion [pillon_id=" + pillon_id + ", name=" + name + ", Mobile=" + Mobile + ", address=" + address
				+ "]";
	}
	
	
	
}