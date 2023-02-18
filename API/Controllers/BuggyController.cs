using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {

           
            return NotFound("not found");
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {

           
            return BadRequest(new ProblemDetails{Title = "This is a bad request"});
        }
        
        [HttpGet("unauthorized")]        
        public ActionResult GetUnauthorized()
        {

           
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {

            ModelState.AddModelError("Problem1", "This is first problem");
            ModelState.AddModelError("Problem2", "This is second problem");
            return ValidationProblem();
        }

        [HttpGet("sever-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("this is server error");
        }
    }
}