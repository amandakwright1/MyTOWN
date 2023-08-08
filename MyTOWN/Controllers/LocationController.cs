using Microsoft.AspNetCore.Mvc;
using System;
using MyTOWN.Repositories;
using MyTOWN.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyTOWN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationRepository _locationRepository;

        public LocationController(ILocationRepository locationRepository)
        {
            _locationRepository = locationRepository;
        }


        // GET: api/<LocationController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_locationRepository.GetAll());
        }

        // GET api/<LocationController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _locationRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        //// POST api/<LocationController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<LocationController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<LocationController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}

