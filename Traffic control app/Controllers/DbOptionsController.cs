using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrafficControl.Core.Services;
using TrafficControl.Data;

namespace Traffic_control_app.Controllers
{
    [Route("dboptions")]
    [ApiController]
    public class DbOptionsController : BaseApiController
    {
        private readonly ICarService _carService;
        private readonly ITrafficControlDbContext _context;
        private readonly IFileParse _parser;

        public DbOptionsController(ICarService carService, ITrafficControlDbContext context, IFileParse parser)
        {
            _carService = carService;
            _context = context;
            _parser = parser;
        }

        [HttpPut]
        [Route("upload")]
        public IActionResult AddCars(IFormFile file)
        {
            var parseResult = _parser.ConvertFileToList(file);
            if (parseResult == null)
            {
                return BadRequest();
            }

            _carService.AddCars(parseResult);
            return Ok("File uploaded.");
        }

        [HttpPost]
        [Route("clear")]
        public IActionResult Clear()
        {
            _context.Cars.RemoveRange(_context.Cars);
            _context.SaveChanges();
            return Ok();
        }
    }
}
