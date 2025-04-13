using Microsoft.AspNetCore.Mvc;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        // GET route
        [HttpGet]
        public IActionResult GetTestMessage()
        {
            return Ok(new { Message = "Test route is working!" });
        }

        // POST route
        [HttpPost]
        public IActionResult PostTestMessage([FromBody] TestMessage testMessage)
        {
            if (testMessage == null || string.IsNullOrEmpty(testMessage.Content))
            {
                return BadRequest(new { Message = "Content cannot be empty." });
            }

            return Ok(new { Message = $"Received: {testMessage.Content}" });
        }

        // PUT route
        [HttpPut]
        public IActionResult PutTestMessage([FromBody] TestMessage testMessage)
        {
            if (testMessage == null || string.IsNullOrEmpty(testMessage.Content))
            {
                return BadRequest(new { Message = "Content cannot be empty." });
            }

            return Ok(new { Message = $"Updated content: {testMessage.Content}" });
        }

        // DELETE route
        [HttpDelete]
        public IActionResult DeleteTestMessage([FromBody] TestMessage testMessage)
        {
            if (testMessage == null || string.IsNullOrEmpty(testMessage.Content))
            {
                return BadRequest(new { Message = "Content cannot be empty." });
            }

            return Ok(new { Message = $"Deleted content: {testMessage.Content}" });
        }

        // Custom route with a parameter
        [HttpGet("custom/{id}")]
        public IActionResult GetCustomMessage(int id)
        {
            return Ok(new { Message = $"Custom message with ID: {id}" });
        }

        // Another custom POST route with parameters
        [HttpPost("custom")]
        public IActionResult PostCustomMessage([FromBody] TestMessage testMessage)
        {
            if (testMessage == null || string.IsNullOrEmpty(testMessage.Content))
            {
                return BadRequest(new { Message = "Content cannot be empty." });
            }

            return Ok(new { Message = $"Custom POST received: {testMessage.Content}" });
        }
    }

    public class TestMessage
    {
        public string Content { get; set; }
    }
}
