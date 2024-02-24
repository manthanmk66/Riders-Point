using Microsoft.AspNetCore.Mvc;
// using System.Web.Http.Cors;

using model;
using model.dtos;
using BLL;

namespace RP_Web_API.Controllers
{
	// [EnableCors(origins: "*", headers: "*", methods: "*")]
    [ApiController]
    [Route("Rider/")]
    public class RiderController : ControllerBase
    {
        private readonly ILogger<RiderController> _logger;

        public RiderController(ILogger<RiderController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Getall",Name = "GetRider")]
        public IEnumerable<rp_details> Getallrriders()
        {
            List<rp_details> lst=RiderService.GetAllriders();
            return lst; 
        }
		[HttpPost("addData",Name = "adduser")]
        public string addrp([FromForm]string name,[FromForm]string mobile_no,[FromForm]string address,[FromForm]string alert,[FromForm]string mode)
        {
			rp_details rp=new rp_details(0,name,mobile_no,address,alert,mode);
			Console.WriteLine("step in con");
            bool lst=RiderService.addRp(rp) ;
				if(lst!=null)
				{
					return " user added";
				}
				else
				{
					return "Failed to add plz re enter";
				}
            
        }

        [HttpPost("addStatus",Name ="addRiderStatus")]
        public string addStatus([FromBody]Status_riderDTO rider){
            // string bike="kawasaki";
			// Console.WriteLine(rider.Bike);
             bool s= RiderService.addStatus(rider);
			return s?"Status added":"reenter please";
        }
	[HttpPost("addRiderRoute",Name="addRiderRoute")]
	public string addRiderRoute([FromBody]Rider_route_detailsDTO route){
		// here i changed class Rider_route_details attribute start_time and end_time to string because it gives error
		bool s=RiderService.addRiderRoute(route);
		if(s!=null)
		{
			return "Rider route added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	
	
	[HttpGet("byroute",Name="Byroute")]
	public List<Rider_route_details> getbyroute([FromBody] RouteReqModel route){
		return RiderService.getbyroute(route.Start,route.End);
	}
	
	
	// // // All ID operation
	[HttpGet("getRiderByid/{id}",Name="getRiderByid/{id}")]
	public IEnumerable<rp_details> getRiderbyid([FromForm]int id){

		return RiderService.getRiderbyid(id) as IEnumerable<rp_details>;
	}

	[HttpGet("getStatusByid/{status_id}",Name="getStatusByid/{id}")]
	public IEnumerable<Status_rider> getStatusbyid([FromForm]int status_id){
		IEnumerable<Status_rider> s=RiderService.getStatusbyid(status_id) as IEnumerable<Status_rider>;
		return s;
	}
	[HttpGet("getRouteByid/{route_id}",Name="getRouteByid/{id}")]
	public IEnumerable<Rider_route_details> getRoutebyid([FromForm]int route_id){
	
		return RiderService.getRoutebyid(route_id) as IEnumerable<Rider_route_details>;
	}	
	
	// // All Update operation
	[HttpPut("editRider",Name="editRider")]
	public string updaterider([FromBody]rp_detailsDTO rider){
		
		bool s=RiderService.updaterider(rider);
		if(s!=null)
		{
			return "Status added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	
	[HttpPut("editStatus",Name="editStatus")]
	public string editStatus([FromBody] Status_riderDTO rsstatus){
		
		bool s=RiderService.editStatus(rsstatus);
		if(s!=null)
		{
			return "Status added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}

	
	[HttpPut("editRiderRoute",Name="editRiderRoute")]
	public string editRiderRoute([FromBody]Rider_route_detailsDTO rroute){
		bool s=RiderService.editRiderRoute(rroute);
		if(s!=null)
		{
			return "Rider route added";
		}
		else
		{
			return "Failed to add plz re enter";
		}
	}
	
	
	
	// // [HttpPost(Name="Alert")]
	// // public String sendAlert([FromBody] String start,[FromBody] String end){
	// // 	//post man ---->select-->form data
		
	// // 	List<Rider_route_details> lst=RiderService.getbyroute(start,end);
	// // 	// we have to write code for alert 
	// // 	return "Some one need help on your route";
	// // }
	


    }
}
