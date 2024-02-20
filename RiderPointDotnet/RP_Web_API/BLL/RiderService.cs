namespace BLL;
using model;
using dbmanagerUtil;
using System.Collections.Generic;

public static class RiderService
{
    
    public static List<rp_details> GetAllriders(){
        List<rp_details> lst=new List<rp_details>();
        lst=RiderBDmanager.GetAllriders();
        return lst;
    }
     public static bool addRp(rp_details rider){
         return RiderBDmanager.addRp(rider);
    }
   public static bool addStatus(Status_rider rider){
         return RiderBDmanager.addstatus(rider);
    } 
    public static bool addRiderRoute(Rider_route_details rider){
         return RiderBDmanager.addRiderRoute(rider);
    }
    
    public static List<Rider_route_details> getbyroute(string start,string end){
         return RiderBDmanager.getbyroute(start,end);
    }
     public static RpDetails getRiderbyid(int r){
         return RiderBDmanager.getRiderbyid(r);
    }
    
    public static Status_rider getStatusbyid(int r){
         return RiderBDmanager.getStatusbyid(r);
    }
      public static Rider_route_details getRoutebyid(int r){
         return RiderBDmanager.getRoutebyid(r);
    } 
    
    public static bool updaterider(RpDetails r){
         return RiderBDmanager.updaterider(r);
    }
     //
    public static bool editStatus(Rider_Status r){
         return RiderBDmanager.editStatus(r);
    }
    public static bool editRiderRoute(Rider_route_details r){
         return RiderBDmanager.editRiderRoute(r);
    }
}
