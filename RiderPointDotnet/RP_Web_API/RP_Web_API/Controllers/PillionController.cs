using Microsoft.AspNetCore.Mvc;
using model;
using BLL;

namespace RP_Web_API.Controllers
{
	// [EnableCors(origins: "*", headers: "*", methods: "*")]
    [ApiController]
    [Route("pillion/")]
    public class PillionController : ControllerBase
    {
        private readonly ILogger<PillionController> _logger;

        public PillionController(ILogger<PillionController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetPillion",Name = "GetPillion")]
        public IEnumerable<rp_details> GetallPillion()
        {
            List<rp_details> lst=PillionService.GetAllpillion();
            return lst; 
        }
    
    	
// 		[HttpPost("addPillionStatus",addName ="addPillionStatus")]
//         public string addStatus([FromForm]Status_pillion Pillion)
// 		{
//             // string bike="kawasaki";
// 			// Console.WriteLine(Pillion.Bike);
//              bool s= PillionService.addStatus(Pillion);
// 			return s?"Status added":"reenter please";
//         }

// 	[HttpPost("addPillionRoute",Name="addPillionRoute")]
// 	public string addPillionRoute([FromForm]Pillion_route_details route){
// 		// here i changed class Pillion_route_details attribute start_time and end_time to string because it gives error
// 		bool s=PillionService.addPillionRoute(route);
// 		if(s!=null)
// 		{
// 			return "Pillion route added";
// 		}
// 		else
// 		{
// 			return "Failed to add plz re enter";
// 		}
// 	}
	
	
	// [HttpGet("byRoute",Name="Byroute")]
	// public IEnumerable<List<Pillion_route_details>> getbyroute([FromForm]string start,string end){
	// 	return PillionService.getbyroute(start,end);
	// }
	
	
// 	// // All ID operation
// 	[HttpGet("getPillion/{id}",Name="getPillionByid/{id}")]
// 	public IEnumerable<rp_details> getPillionbyid(int id){
// 		//post man ---->select-->form data
// 		return PillionService.getPillionbyid(id);
// 	}

// 	[HttpGet("getStatusByid",Name="getStatusByid/{status_id}")]
// 	public IEnumerable<Status_pillion> getStatusbyid(int status_id){
// 		//post man ---->select-->form data
// 		return PillionService.getStatusbyid(status_id);
// 	}
// 	[HttpGet("getRouteByid/{route_id}"Name="getRouteByid/{route_id}")]
// 	public IEnumerable<Pillion_route_details> getRoutebyid(int route_id){
// 		//post man ---->select-->form data
// 		return PillionService.getRoutebyid(id);
// 	}	
	
// 	// // All Update operation
// 	[HttpPut("editPillion",Name="editPillion")]
// 	public string updatePillion([FromForm]rp_details Pillion){
		
// 		bool s=PillionService.updatePillion(Pillion);
// 		if(s!=null)
// 		{
// 			return "Status added";
// 		}
// 		else
// 		{
// 			return "Failed to add plz re enter";
// 		}
// 	}
	
// 	[HttpPut("editStatus",Name="editStatus")]
// 	public string editStatus( Status_pillion rsstatus){
		
// 		bool s=PillionService.editStatus(rsstatus);
// 		if(s!=null)
// 		{
// 			return "Status added";
// 		}
// 		else
// 		{
// 			return "Failed to add plz re enter";
// 		}
// 	}

	
// 	[HttpPut("editPillionRoute",Name="editPillionRoute")]
// 	public string editPillionRoute( [FromForm]Pillion_route_details rroute){
// 		bool s=PillionService.editPillionRoute(rroute);
// 		if(s!=null)
// 		{
// 			return "Pillion route added";
// 		}
// 		else
// 		{
// 			return "Failed to add plz re enter";
// 		}
// 	}
	
}
}