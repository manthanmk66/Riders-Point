using System.Diagnostics.Contracts;
using System.Security.AccessControl;

namespace model;

public class Rider_route_details{
    public int Route_id {
        get;set;
    }
	public int Status_id {
        get;set;
    }
	 public string Start_point{
        get;set;
    } 
	 public string End_point  {
        get;set;
    }
	 public DateTime Travel_date{
        get;set;
    } 
	 public string Start_time{
        get;set;
    }
	 public string End_time  {
        get;set;
    } 
	 public string Description{
        get;set;
    }

    public Rider_route_details(int route_id,int status_id,string start_point,string end_point ,DateTime travel_date,string start_time,string end_time,string description)
    {
        this.Route_id=route_id;
        this.Status_id=status_id;
        this.Start_point=start_point;
        this.End_point=end_point;
        this.Travel_date=travel_date;
        this.Start_time=start_time;
        this.End_time=end_time;
        this.Description=description;

    }
    
}