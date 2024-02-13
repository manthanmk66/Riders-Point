namespace model;
public class rp_details{
    public int Rp_id{
        get;set;
    }
    public string Name{
        get;set;
    }
    public string Mobile_no{
        get;set;
    }
    public string Address{
        get;set;
    }
    public string Alert{
        get;set;
    }
    public string Mode{
        get;set;
    }

    public rp_details(int id,string name,string mob,string addr,string alert,string mode)
    {
        this.Rp_id=id;
        this.Name=name;
        this.Mobile_no=mob;
        this.Address=addr;
        this.Alert=alert;
        this.Mode=mode;
    }
}