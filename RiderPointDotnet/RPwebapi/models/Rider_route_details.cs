namespace model;

class Rider_route_details{
    public int Route_id {
        get;set;
    }
	public Rider_Status Status_id {
        get;set;
    }
	 public String Start_point{
        get;set;
    } 
	 public String End_point  {
        get;set;
    }
	 public Date Travel_date{
        get;set;
    } 
	 public LocalTime Start_time{
        get;set;
    }
	 public LocalTime End_time  {
        get;set;
    } 
	 public String Description{
        get;set;
    }
}