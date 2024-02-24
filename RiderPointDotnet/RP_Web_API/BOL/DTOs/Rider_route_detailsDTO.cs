using System.Diagnostics.Contracts;
using System.Security.AccessControl;

namespace model.dtos;

public class Rider_route_detailsDTO{
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

    
}