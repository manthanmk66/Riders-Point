using Microsoft.AspNetCore.Mvc;
using model;
using BLL;

namespace RP_Web_API.Controllers
{
    [ApiController]
    [Route("Pillion/[action]")]
    public class PillionController : ControllerBase
    {
        private readonly ILogger<PillionController> _logger;

        public PillionController(ILogger<PillionController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetPillion")]
        public IEnumerable<rp_details> GetallPillion()
        {
            List<rp_details> lst=PillionService.GetAllpillion();
            return lst; 
        }
    }
}
