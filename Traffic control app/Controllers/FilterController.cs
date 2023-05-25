using Microsoft.AspNetCore.Mvc;
using Traffic_control_app.Models;
using TrafficControl.Core.Services;

namespace Traffic_control_app.Controllers
{
    [Route("filter")]
    [ApiController]
    public class FilterController : BaseApiController
    {
        public readonly IFilteringService _filteringService;

        public FilterController(IFilteringService filteringService)
        {
            _filteringService = filteringService;
        }

        [HttpGet]
        [Route("filterby")]
        public IActionResult GetFilteredResults(FilterRequest filterRequest)
        {
            return Ok(_filteringService.Filter(filterRequest));
        }
    }
}
