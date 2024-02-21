using model;
using model.dtos;
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
    
    
    
    public static bool addRp(rp_details rider)
    {
        bool flag=false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="insert into rp_details(Name,mobile_no,address,alert,mode) values('"+rider.Name+"','"+rider.Mobile_no+"','"+rider.Address+"','"+rider.Alert+"','"+rider.Mode+"')";
        try
        {
            Console.WriteLine("step in db");
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            cmd.ExecuteNonQuery();
            flag=true;
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return flag;
    }
     public static bool addstatus(Status_riderDTO rider)
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

     public static bool addRiderRoute(Rider_route_detailsDTO rider)
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
    
    public static List<Rider_route_details> getbyroute(string start,string end)
    {
        List<Rider_route_details> lst=new List<Rider_route_details>();
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from Rider_route_details where start_point='"+start+"' and end_point='"+end+"'";
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

//rewrite
    //  public static bool addRiderRoute(Rider_route_detailsDTO rider)
    // {
    //     bool state =false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
    //     string query="insert into Rider_route_details(status_id,start_point,end_point,travel_date,start_time,end_time,description) values("+rider.Status_id+",'"+rider.Start_point+"','"+rider.End_point+"','"+rider.Travel_date+"','"+rider.Start_time+"','"+rider.End_time+"','"+rider.Description+"')";
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
    
    

    public static rp_details getRiderbyid(int id)
    {
        
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from rp_details where rp_id="+id;
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            MySqlDataReader reader= cmd.ExecuteReader();
            if(reader.Read())
            {
                int rp_id=int.Parse(reader["rp_id"].ToString());
                string name=reader["name"].ToString();
                string mobile_no=reader["mobile_no"].ToString();
                string address=reader["address"].ToString();
                string alert=reader["alert"].ToString();
                string mode=reader["mode"].ToString();
                rp_details r=new rp_details(rp_id,name,mobile_no,address,alert,mode);
            return r;
            }
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return null;
    }

     public static Status_rider getStatusbyid(int id)
    {
        
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from Status_rider where status_id="+id;
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            MySqlDataReader reader= cmd.ExecuteReader();
            if(reader.Read())
            {
                int status_id=int.Parse(reader["status_id"].ToString());
                int rp_id=int.Parse(reader["rp_id"].ToString());
                string bike=reader["bike"].ToString();
                double expense=Convert.ToDouble(reader["expense"].ToString());
                // string wantpillion=reader["wantpillion"].ToString();
                // string alert=reader["alert"].ToString();
                
                Status_rider r=new Status_rider(status_id,rp_id,bike,expense);
                return r;
            }
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return null;
    }
    public static Rider_route_details getRoutebyid(int route)
    {
        
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from Rider_route_details where route_id="+route;
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
            return r;
            }
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return null;
    }

    public static bool updaterider(rp_detailsDTO rider)
    {
        bool flag=false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="update from rp_details set name='"+rider.Name+"',mobile_no='"+rider.Mobile_no+"',address='"+rider.Address+"',alert='"+rider.Alert+"',mode='"+rider.Mode+"' where rp_id="+rider.Rp_id;
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            cmd.ExecuteReader();
            flag=true;
        }
        catch(Exception e)
        {   Console.WriteLine(e.Message);       }
        finally{
            connection.Close();
        }
       return flag;
    }
    // public static bool updaterider(rp_details rider)
    // {
    //     bool flag=false;
    //     MySqlConnection connection=new MySqlConnection();
    //     connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
    //     string query="update from rp_details set name='"+rider.Name+"',mobile_no='"+rider.Mobile_no+"',address='"+rider.Address+"',alert='"+rider.Alert+"',mode='"+rider.Mode+"' where rp_id="+rider.Rp_id;
    //     try
    //     {
    //         MySqlCommand cmd=new MySqlCommand(query,connection);
            
    //         connection.Open();
    //         cmd.ExecuteNonQuery();
    //         flag=true;
    //     }
    //     catch(Exception e)
    //     {   Console.WriteLine(e.Message);       }
    //     finally{
    //         connection.Close();
    //     }
    //    return flag;
    // }
     public static bool editStatus(Status_riderDTO rider)
    {
        bool state =false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="update from Status_rider set rp_id="+rider.Rp_id+",bike='"+rider.Bike+"',expense="+rider.Expense+" where status_id="+rider.Status_id;
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
     public static bool editRiderRoute(Rider_route_detailsDTO rider)
    {
        bool state =false;
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="update from Rider_route_details set status_id="+rider.Status_id+",start_point='"+rider.Start_point+"',end_point='"+rider.End_point+"',travel_date='"+rider.Travel_date+"',start_time='"+rider.Start_time+"',end_time='"+rider.End_time+"',description='"+rider.Description+"') where route_id="+rider.Route_id;
        
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

}