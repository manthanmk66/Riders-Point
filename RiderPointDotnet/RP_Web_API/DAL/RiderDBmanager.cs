using model;

using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace dbmanagerUtil;


public static class RiderBDmanager {
        
    
    public static List<rp_details> GetAllriders()
    {
        List<rp_details> lst=new List<rp_details>();
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from rp_details where mode='rider'";
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
     public static bool addstatus(Status_rider rider)
    {
        bool state =false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="insert into Status_rider(rp_id,bike,expense) values("+rider.Rp_id+",'"+rider.Bike+"','"+rider.Expense+"')";
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            cmd.ExecuteNonQuery();
            state=true;
            
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return state;
    }

     public static bool addRiderRoute(Rider_route_details rider)
    {
        bool state =false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="insert into Rider_route_details(status_id,start_point,end_point,travel_date,start_time,end_time,description) values("+rider.Status_id+",'"+rider.Start_point+"','"+rider.End_point+"','"+rider.Travel_date+"','"+rider.Start_time+"','"+rider.End_time+"','"+rider.Description+"')";
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            cmd.ExecuteNonQuery();
            state=true;
            
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return state;
    }
    //error write wrong method mothod is correct but implementation is wrong
    public static List<Rider_route_details> getbyroute(int rider)
    {
        List<Rider_route_details> lst=new List<Rider_route_details>();
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from Rider_route_details where route_id"+rider;
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            MySqlDataReader reader= cmd.ExecuteReader();
            if(reader.Read())
            {
                int route_id=int.Parse(reader["route_id"].ToString());
                int status_id=int.Parse(reader["status_id"].ToString());
                string start_point=reader["start_point"].ToString();
                string end_point=reader["end_point"].ToString();
                string travel_date=reader["travel_date"].ToString();
                DateTime dt=Convert.ToDateTime(travel_date);
                string start_time=reader["start_time"].ToString();
                string end_time=reader["end_time"].ToString();
                string description=reader["description"].ToString();
                Rider_route_details r=new Rider_route_details(route_id,status_id,start_point,end_point ,dt,start_time,end_time,description);
            lst.Add(r);
            }
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return lst;
    }

     public static bool addRiderRoute(Rider_route_details rider)
    {
        bool state =false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="insert into Rider_route_details(status_id,start_point,end_point,travel_date,start_time,end_time,description) values("+rider.Status_id+",'"+rider.Start_point+"','"+rider.End_point+"','"+rider.Travel_date+"','"+rider.Start_time+"','"+rider.End_time+"','"+rider.Description+"')";
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            cmd.ExecuteNonQuery();
            state=true;
            
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return state;
    }
    //
    // public static Rider_route_details getbyid(int rider)
    // {
    //     
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
    //     string query="select * from Rider_route_details where route_id"+rider;
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
    //             string start_time=reader["start_time"].ToString();
    //             string end_time=reader["end_time"].ToString();
    //             string description=reader["description"].ToString();
    //             Rider_route_details r=new Rider_route_details(route_id,status_id,start_point,end_point ,dt,start_time,end_time,description);
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
}