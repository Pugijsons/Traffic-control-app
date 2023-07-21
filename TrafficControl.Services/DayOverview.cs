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

        public GraphData[] ShowDayOverview(DateTime date)
        { 
           var overViewCars = _context.Cars.Where(c => c.Date.Date == date.Date);
           return overViewCars.GroupBy(c => c.Date.Hour)
               .Select(group => new GraphData
               {
                   Hour = group.Key,
                   AverageSpeed = group.Average(car => car.Speed)
               })
               .OrderBy(data => data.Hour)
               .ToArray();
        }
    }
}
