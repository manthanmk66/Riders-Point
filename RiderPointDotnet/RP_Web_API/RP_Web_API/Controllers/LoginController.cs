using Microsoft.AspNetCore.Mvc;
using model;
using BLL;

namespace RP_Web_API.Controllers
{
    // [EnableCors(origins: "*", headers: "*", methods: "*")]
    [ApiController]
    [Route("login/")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Getlogin",Name = "Login")]
        public IEnumerable<Login> Get()
        {
            List<Login> lst=BLLservice.GetAlldetails();
            return lst; 
        }
       
    }
}
