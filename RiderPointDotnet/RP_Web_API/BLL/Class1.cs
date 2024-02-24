namespace BLL;
using model;
using dbmanagerUtil;
using System.Collections.Generic;

public static class BLLservice
{
    public static List<Login> GetAlldetails(){
        List<Login> lst=new List<Login>();
        lst=BDmanager.GetAlldetails();
        return lst;
    }
    
    public static List<rp_details> GetAllrp(){
        List<rp_details> lst=new List<rp_details>();
        lst=BDmanager.GetAllrp();
        return lst;
    }

}
