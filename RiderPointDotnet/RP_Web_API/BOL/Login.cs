namespace model;
public class Login{
    public int Id {
        get;set;
    }
	public string Username{
        get;set;
    }
	public string Password{
        get;set;
    }

    public Login(int id,string uname,string pass)
    {
        this.Id=id;
        this.Username=uname;
        this.Password=pass;
    }
}