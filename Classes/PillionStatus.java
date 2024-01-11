

public class PillionStatus {

	private int pillion_id;	
	private int status_id;
	private String expense;
	public PillionStatus() {
		super();
	}
	public PillionStatus(int pillion_id, int status_id, String expense) {
		super();
		this.pillion_id = pillion_id;
		this.status_id = status_id;
		this.expense = expense;
	}
	public int getPillion_id() {
		return pillion_id;
	}
	public void setPillion_id(int pillion_id) {
		this.pillion_id = pillion_id;
	}
	public int getStatus_id() {
		return status_id;
	}
	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}
	public String getExpense() {
		return expense;
	}
	public void setExpense(String expense) {
		this.expense = expense;
	}
	@Override
	public String toString() {
		return "PillionStatus [pillion_id=" + pillion_id + ", status_id=" + status_id + ", expense=" + expense + "]";
	}
	
	
}