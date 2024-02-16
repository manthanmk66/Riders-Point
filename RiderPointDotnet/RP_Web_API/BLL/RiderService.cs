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
   public static bool addStatus(Status_rider rider){
         return RiderBDmanager.addstatus(rider);
    } 
    public static bool addRiderRoute(Rider_route_details rider){
         return RiderBDmanager.addRiderRoute(rider);
    }
    public static List<Rider_route_details> getbyroute(int r){
         return RiderBDmanager.getbyroute(r);
    }
}
