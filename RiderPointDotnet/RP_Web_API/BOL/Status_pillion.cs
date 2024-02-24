namespace model;

public class Status_pillion{
    public int Status_id {
        get;set;
    }
	public int Rp_id {
        get;set;
    }
	public  double Avg_expense{
        get;set;
    }
    public Status_pillion(int status_id,int rp_id,double avg_expense)
    {
        this.Status_id=status_id;
        this.Rp_id=rp_id;
        this.Avg_expense=avg_expense;
    }
}