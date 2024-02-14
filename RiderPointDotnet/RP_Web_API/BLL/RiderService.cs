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

}
