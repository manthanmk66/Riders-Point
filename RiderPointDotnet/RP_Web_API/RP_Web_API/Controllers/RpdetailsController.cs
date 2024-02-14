using Microsoft.AspNetCore.Mvc;
using model;
using BLL;

namespace RP_Web_API.Controllers
{
    [ApiController]
    [Route("RpDetails/[action]")]
    public class RpDetailsController : ControllerBase
    {
        private readonly ILogger<RpDetailsController> _logger;

        public RpDetailsController(ILogger<RpDetailsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetAll")]
        public IEnumerable<rp_details> Getallrp()
        {
            List<rp_details> lst=BLLservice.GetAllrp();
            return lst; 
        }
    }
}
