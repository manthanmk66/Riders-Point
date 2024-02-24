using model;

using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace dbmanagerUtil;


public static class BDmanager {
        
    public static List<Login> GetAlldetails()
    {
        List<Login> lst=new List<Login>();
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from Loginrp";
        try
        {
            MySqlCommand cmd=new MySqlCommand(query,connection);
            
            connection.Open();
            MySqlDataReader dr=cmd.ExecuteReader();
            while(dr.Read())
            {
                int id=int.Parse(dr["id"].ToString());
                string username=dr["username"].ToString();
                string password=dr["password"].ToString();
                Login rs=new Login(id,username,password);
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
    public static List<rp_details> GetAllrp()
    {
        List<rp_details> lst=new List<rp_details>();
        MySqlConnection connection=new MySqlConnection();
        connection.ConnectionString="server=localhost;port=3306;user=root;password=Atpadi@123;database=dotnetRiderpoint";
        string query="select * from rp_details";
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
}