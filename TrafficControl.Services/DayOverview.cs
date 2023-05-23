using System.Linq;
using System;
using TrafficControl.Core.Models;
using TrafficControl.Core.Services;
using TrafficControl.Data;

namespace TrafficControl.Services
{
    public class DayOverview : IDayOverview
    {
        private readonly ITrafficControlDbContext _context;
        public DayOverview(ITrafficControlDbContext context)
        {
            _context = context;
        }

        public Car[] ShowDayOverview(DateTime date)
        { 
            return _context.Cars.Where(car => DateTime.Parse(car.Date) == date.Date).ToArray();
        }
    }
}
