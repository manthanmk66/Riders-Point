namespace model.dtos;

public class Pillion_route_details{
    public int Route_id {
        get;set;
    }

	public int Status_id{
        get;set;
    }
	public string Start_point{
        get;set;
    }
	public string End_point{
        get;set;
    }
	public DateTime Travel_date{
        get;set;
    }
	public string Description{
        get;set;
    }
    public Pillion_route_details(int route_id,int status_id,string start_point,string end_point,DateTime travel_date,string description)
    {
        this.Route_id=route_id;
        this.Status_id=status_id;
        this.Start_point=start_point;
        this.End_point=end_point;
        this.Travel_date=travel_date;
        this.Description=description;
    }
}