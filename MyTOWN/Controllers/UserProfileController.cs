using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyTOWN.Models;
using MyTOWN.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTOWN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;

        public UserProfileController (IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }



        // GET: api/<UserProfileController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfileRepository.GetAll());
        }

        // GET api/<UserProfileController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _userProfileRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userProfileRepository.GetByEmail(email);

            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        // POST api/<UserProfileController>
        [HttpPost]
        public IActionResult Post(UserProfile userprofile)
        {
            _userProfileRepository.Add(userprofile);
            return CreatedAtAction("Get", new { id = userprofile.Id }, userprofile);
        }

       

      
    }
}
