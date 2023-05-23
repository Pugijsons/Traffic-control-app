using System;
using Microsoft.AspNetCore.Mvc;
using TrafficControl.Core.Services;

namespace Traffic_control_app.Controllers
{
    [ApiController]
    public class DayOverviewController : BaseApiController
    {
        private readonly IDayOverview _overview;

        public DayOverviewController(IDayOverview overview)
        {
            _overview = overview;
        }

        [HttpGet]
        [Route("dayoverview")]
        public IActionResult GetDayOverview(DateTime date)
        {
            return Ok(_overview.ShowDayOverview(date));
        }
    }
}