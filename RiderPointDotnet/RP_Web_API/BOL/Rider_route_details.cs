namespace model;

class Rider_route_details{
    public int Route_id {
        get;set;
    }
	public int Status_id {
        get;set;
    }
	 public String Start_point{
        get;set;
    } 
	 public String End_point  {
        get;set;
    }
	 public DateTime Travel_date{
        get;set;
    } 
	 public DateTime Start_time{
        get;set;
    }
	 public DateTime End_time  {
        get;set;
    } 
	 public String Description{
        get;set;
    }
}