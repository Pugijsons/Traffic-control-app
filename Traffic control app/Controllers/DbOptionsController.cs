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

        public DbOptionsController(ICarService carService, ITrafficControlDbContext context)
        {
            _carService = carService;
            _context = context;
        }

        [HttpPut]
        [Route("upload")]
        public IActionResult AddCars(string path)
        {
            _carService.AddCars(path);
            return Ok();
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
