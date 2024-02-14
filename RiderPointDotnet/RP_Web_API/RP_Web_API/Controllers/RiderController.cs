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
    }
}
