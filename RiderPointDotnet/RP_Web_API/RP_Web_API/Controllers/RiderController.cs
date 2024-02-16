using Microsoft.AspNetCore.Mvc;
using model;
using BLL;

namespace RP_Web_API.Controllers
{
    [ApiController]
    [Route("Rider/[action]")]
    public class RiderController : ControllerBase
    {
        private readonly ILogger<RiderController> _logger;

        public RiderController(ILogger<RiderController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetRider")]
        public IEnumerable<rp_details> Getallrriders()
        {
            List<rp_details> lst=RiderService.GetAllriders();
            return lst; 
        }
        [HttpPost(Name ="addRiderStatus")]
        public string addStatus(Status_rider rider){
            // string bike="kawasaki";
			Console.WriteLine(rider.Bike);
             bool s= RiderService.addStatus(rider);
			return s?"Status added":"reenter please";
        }
	[HttpPost(Name="addRiderRoute")]
	public string addRiderRoute(Rider_route_details route){
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
	
	
	[HttpGet(Name="Byroute/{id}")]
	public List<Rider_route_details> getbyroute(int id){
		//post man ---->select-->form data
		return RiderService.getbyroute(id);
	}
	
	
	// // All ID operation
	// @HttpGet("/getRiderByid/{id}")
	// public RpDetails getRiderbyid(@PathVariable String id){
	// 	//post man ---->select-->form data
	// 	return RiderService.getRiderbyid(id);
	// }
	// @HttpGet(Name="getStatusByid/{id}")
	// public Rider_Status getStatusbyid(@PathVariable String id){
	// 	//post man ---->select-->form data
	// 	return RiderService.getStatusbyid(id);
	// }
	// @HttpGet(Name="getRouteByid/{id}")
	// public Rider_route_details getRoutebyid(@PathVariable String id){
	// 	//post man ---->select-->form data
	// 	return RiderService.getRoutebyid(id);
	// }	
	
	// // All Update operation
	// [HttpPut(Name="editRider")]
	// public String updaterider(@RequestBody RpDetails rider){
		
	// 	RpDetails s=RiderService.updateRider(rider);
	// 	if(s!=null)
	// 	{
	// 		return "Status added";
	// 	}
	// 	else
	// 	{
	// 		return "Failed to add plz re enter";
	// 	}
	// }
	
	// [HttpPut(Name="editStatus")]
	// public String editStatus(@RequestBody Rider_Status rsstatus){
		
	// 	Rider_Status s=RiderService.editStatus(rsstatus);
	// 	if(s!=null)
	// 	{
	// 		return "Status added";
	// 	}
	// 	else
	// 	{
	// 		return "Failed to add plz re enter";
	// 	}
	// }
	// [HttpPut(Name="addRiderRoute")]
	// public String editRiderRoute(@RequestBody Rider_route_details rroute){
	// 	Rider_route_details s=RiderService.editRiderRoute(rroute);
	// 	if(s!=null)
	// 	{
	// 		return "Rider route added";
	// 	}
	// 	else
	// 	{
	// 		return "Failed to add plz re enter";
	// 	}
	// }
	
	
	
	// [HttpPost(Name="Alert")]
	// public String sendAlert(@RequestParam String start,@RequestParam String end){
	// 	//post man ---->select-->form data
		
	// 	List<Rider_route_details> lst=RiderService.getbyroute(start,end);
	// 	// we have to write code for alert 
	// 	return "Some one need help on your route";
	// }
	


    }
}
