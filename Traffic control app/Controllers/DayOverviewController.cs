using System;
using Microsoft.AspNetCore.Mvc;
using TrafficControl.Core.Services;

namespace Traffic_control_app.Controllers
{
    [Route("dayoverview")]
    [ApiController]
    public class DayOverviewController : BaseApiController
    {
        private readonly IDayOverview _overview;

        public DayOverviewController(IDayOverview overview)
        {
            _overview = overview;
        }

        [HttpGet]
        [Route("retrievedata")]
        public IActionResult GetDayOverview(string date)
        {
            return Ok(_overview.ShowDayOverview(DateTime.Parse(date)));
        }
    } 
}