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

}
