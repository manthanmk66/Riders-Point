using model;

using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace dbmanagerUtil;


public static class PillionBDmanager {
        
    
    public static List<rp_details> GetAllpillion()
    {
        List<rp_details> lst=new List<rp_details>();
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
        string query="select * from rp_details where mode='pillion'";
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            MySqlDataReader dr=cmd.ExecuteReader();
            while(dr.Read())
            {
                int id=int.Parse(dr["rp_id"].ToString());
                string name=dr["name"].ToString();
                string mobile_no=dr["mobile_no"].ToString();
                string addr=dr["address"].ToString();
                string alert=dr["alert"].ToString();
                string mode=dr["mode"].ToString();
                rp_details rs=new rp_details(id,name,mobile_no,addr,alert,mode);
                lst.Add(rs);
            }
        }
        catch(Exception e)
        {
            
            Console.WriteLine(e.Message);
        }
        finally{
            connection.Close();
        }
        return lst;
    }
    //  public static bool addstatus(Status_pillion Pillion)
    // {
    //     bool state =false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="insert into Status_Pillion(rp_id,expense) values("+Pillion.Rp_id+",'"+Pillion.Avg_expense+"')";
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         cmd.ExecuteNonQuery();
    //         state=true;
            
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return state;
    // }

    //  public static bool addPillionRoute(Pillion_route_details Pillion)
    // {
    //     bool state =false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="insert into Pillion_route_details(status_id,start_point,end_point,travel_date,description) values("+Pillion.Status_id+",'"+Pillion.Start_point+"','"+Pillion.End_point+"','"+Pillion.Travel_date+"','"+Pillion.Description+"')";
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         cmd.ExecuteNonQuery();
    //         state=true;
            
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return state;
    // }
    
    // public static List<Pillion_route_details> getbyroute(string start,string end)
    // {
    //     List<Pillion_route_details> lst=new List<Pillion_route_details>();
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="select * from Pillion_route_details where start_point='"+start+"' and end_point='"+end+"'";
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         MySqlDataReader reader= cmd.ExecuteReader();
    //         if(reader.Read())
    //         {
    //             int route_id=int.Parse(reader["route_id"].ToString());
    //             int status_id=int.Parse(reader["status_id"].ToString());
    //             string start_point=reader["start_point"].ToString();
    //             string end_point=reader["end_point"].ToString();
    //             string travel_date=reader["travel_date"].ToString();
    //             DateTime dt=Convert.ToDateTime(travel_date);
                
    //             string description=reader["description"].ToString();
    //             Pillion_route_details r=new Pillion_route_details(route_id,status_id,start_point,end_point ,dt,description);
    //         lst.Add(r);
    //         }
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return lst;
    // }

    // //  public static bool addPillionRoute(Pillion_route_details Pillion)
    // // {
    // //     bool state =false;
    // //     MySqlConnection connection=new MySqlConnection();
    // //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    // //     string query="insert into Pillion_route_details(status_id,start_point,end_point,travel_date,start_time,end_time,description) values("+Pillion.Status_id+",'"+Pillion.Start_point+"','"+Pillion.End_point+"','"+Pillion.Travel_date+"','"+Pillion.Start_time+"','"+Pillion.End_time+"','"+Pillion.Description+"')";
    // //     try
    // //     {
    // //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    // //         connection.Open();
    // //         cmd.ExecuteNonQuery();
    // //         state=true;
            
    // //     }
    // //     catch(Exception e)
    // //     {   Console.WriteLine(e.Message);       }
    // //     finally{
    // //         connection.Close();
    // //     }
    // //    return state;
    // // }
    
    

    // public static rp_details getPillionbyid(int id)
    // {
        
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="select * from rp_details where rp_id="+id;
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         MySqlDataReader reader= cmd.ExecuteReader();
    //         if(reader.Read())
    //         {
    //             int rp_id=int.Parse(reader["rp_id"].ToString());
    //             string name=reader["name"].ToString();
    //             string mobile_no=reader["mobile_no"].ToString();
    //             string address=reader["address"].ToString();
    //             string alert=reader["alert"].ToString();
    //             string mode=reader["mode"].ToString();
    //             rp_details r=new rp_details(rp_id,name,mobile_no,address,alert,mode);
    //         return r;
    //         }
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return null;
    // }

    //  public static Status_pillion getStatusbyid(int id)
    // {
        
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="select * from Status_Pillion where status_id="+id;
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         MySqlDataReader reader= cmd.ExecuteReader();
    //         if(reader.Read())
    //         {
    //             int status_id=int.Parse(reader["status_id"].ToString());
    //             int rp_id=int.Parse(reader["rp_id"].ToString());
                
    //             double expense=Convert.ToDouble(reader["avg_expense"].ToString());
    //             // string wantpillion=reader["wantpillion"].ToString();
    //             // string alert=reader["alert"].ToString();
                
    //             Status_pillion r=new Status_pillion(status_id,rp_id,expense);
    //             return r;
    //         }
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return null;
    // }
    // public static Pillion_route_details getRoutebyid(int route)
    // {
        
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="select * from Pillion_route_details where route_id="+route;
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         MySqlDataReader reader= cmd.ExecuteReader();
    //         if(reader.Read())
    //         {
    //             int route_id=int.Parse(reader["route_id"].ToString());
    //             int status_id=int.Parse(reader["status_id"].ToString());
    //             string start_point=reader["start_point"].ToString();
    //             string end_point=reader["end_point"].ToString();
    //             string travel_date=reader["travel_date"].ToString();
    //             DateTime dt=Convert.ToDateTime(travel_date);
                
    //             string description=reader["description"].ToString();
    //             Pillion_route_details r=new Pillion_route_details(route_id,status_id,start_point,end_point ,dt,description);
    //         return r;
    //         }
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return null;
    // }

    // public static bool updatePillion(rp_details Pillion)
    // {
    //     bool flag=false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="update from rp_details set name='"+Pillion.Name+"',mobile_no='"+Pillion.Mobile_no+"',address='"+Pillion.Address+"',alert='"+Pillion.Alert+"',mode='"+Pillion.Mode+"' where rp_id="+Pillion.Rp_id;
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         cmd.ExecuteReader();
    //         flag=true;
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return flag;
    // }
    // // public static bool updatePillion(rp_details Pillion)
    // // {
    // //     bool flag=false;
    // //     MySqlConnection connection=new MySqlConnection();
    // //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    // //     string query="update from RpDetails set name='"+Pillion.Name+"',mobile_no='"+Pillion.Mobile_no+"',address='"+Pillion.Address+"',alert='"+Pillion.Alert+"',mode='"+Pillion.Mode+"' where rp_id="+Pillion.Rp_id;
    // //     try
    // //     {
    // //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    // //         connection.Open();
    // //         cmd.ExecuteNonQuery();
    // //         flag=true;
    // //     }
    // //     catch(Exception e)
    // //     {   Console.WriteLine(e.Message);       }
    // //     finally{
    // //         connection.Close();
    // //     }
    // //    return flag;
    // // }
    //  public static bool editStatus(Status_pillion Pillion)
    // {
    //     bool state =false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="update from Status_Pillion set rp_id="+Pillion.Rp_id+",expense="+Pillion.Avg_expense+" where status_id="+Pillion.Status_id;
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         cmd.ExecuteNonQuery();
    //         state=true;
            
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return state;
    // }
    //  public static bool editPillionRoute(Pillion_route_details Pillion)
    // {
    //     bool state =false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetPillionpoint";
    //     string query="update from Pillion_route_details set status_id="+Pillion.Status_id+",start_point='"+Pillion.Start_point+"',end_point='"+Pillion.End_point+"',travel_date='"+Pillion.Travel_date+"',description='"+Pillion.Description+"')";
        
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         cmd.ExecuteNonQuery();
    //         state=true;
            
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return state;
    // }
}