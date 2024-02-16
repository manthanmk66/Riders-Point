namespace model;
public class Status_rider{
    public int Status_id{
        get;set;
    }
	public int Rp_id{
        get;set;
    }
	public string Bike{
        get;set;
    }
	public double Expense{
        get;set;
    }
    public Status_rider(int status_id,int rp_id,string bike,double expense)
    {
        this.Status_id=status_id;
        this.Rp_id=rp_id;
        this.Bike=bike;
        this.Expense=expense;
    }
}