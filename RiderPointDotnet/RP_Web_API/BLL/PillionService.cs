namespace BLL;
using model;
using dbmanagerUtil;
using System.Collections.Generic;

public static class PillionService
{
    
    public static List<rp_details> GetAllpillion(){
        List<rp_details> lst=new List<rp_details>();
        lst=PillionBDmanager.GetAllpillion();
        return lst;
    }
//     public static bool addStatus(Status_pillion Pillion){
//          return PillionBDmanager.addstatus(Pillion);
//     } 
//     public static bool addPillionRoute(Pillion_route_details Pillion){
//          return PillionBDmanager.addPillionRoute(Pillion);
//     }
    
//     public static List<Pillion_route_details> getbyroute(string start,string end){
//          return PillionBDmanager.getbyroute(start,end);
//     }
//      public static rp_details getPillionbyid(int r){
//          return PillionBDmanager.getPillionbyid(r);
//     }
    
//     public static Status_pillion getStatusbyid(int r){
//          return PillionBDmanager.getStatusbyid(r);
//     }
//       public static Pillion_route_details getRoutebyid(int r){
//          return PillionBDmanager.getRoutebyid(r);
//     } 
    
//     public static bool updatePillion(rp_details r){
//          return PillionBDmanager.updatePillion(r);
//     }
//      //
//     public static bool editStatus(Status_pillion r){
//          return PillionBDmanager.editStatus(r);
//     }
//     public static bool editPillionRoute(Pillion_route_details r){
//          return PillionBDmanager.editPillionRoute(r);
//     }
}
