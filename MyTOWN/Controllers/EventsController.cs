using System;
using Microsoft.AspNetCore.Mvc;
using MyTOWN.Repositories;
using MyTOWN.Models;


namespace MyTOWN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;
        public EventsController(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_eventRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _eventRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Events events)
        {
            _eventRepository.Add(events);
            return CreatedAtAction("Get", new { id = events.Id }, events);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Events events)
        {
            if (id != events.Id)
            {
                return BadRequest();
            }

            _eventRepository.Update(events);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _eventRepository.Delete(id);
            return NoContent();
        }
    }
}

