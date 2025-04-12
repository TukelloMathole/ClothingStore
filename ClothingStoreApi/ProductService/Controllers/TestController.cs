using Microsoft.AspNetCore.Mvc;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTestMessage()
        {
            return Ok(new { Message = "Test route is working!" });
        }

        [HttpPost]
        public IActionResult PostTestMessage([FromBody] TestMessage testMessage)
        {
            if (testMessage == null || string.IsNullOrEmpty(testMessage.Content))
            {
                return BadRequest(new { Message = "Content cannot be empty." });
            }

            return Ok(new { Message = $"Received: {testMessage.Content}" });
        }
    }

    public class TestMessage
    {
        public string Content { get; set; }
    }
}
