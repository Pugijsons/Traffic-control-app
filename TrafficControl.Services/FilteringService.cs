using System;
using System.Linq;
using Traffic_control_app.Models;
using TrafficControl.Core.Models;
using TrafficControl.Core.Services;
using TrafficControl.Data;

namespace TrafficControl.Services
{
    public class FilteringService : IFilteringService
    {
        private readonly ITrafficControlDbContext _context;
        private Car[] _filteredCars;
        public FilteringService(ITrafficControlDbContext context)
        {
            _context = context;
        }
        public Car[] Filter(FilterRequest filterRequest)
        {
            _filteredCars = _context.Cars.ToArray();
            if (filterRequest.BySpeed)
            {
                _filteredCars = FilterBySpeed(filterRequest.Speed, _filteredCars);
            }

            if (filterRequest.ByFromDate)
            {
                _filteredCars = FilterByFromSpecificDate(filterRequest.FromDate, _filteredCars);
            }

            if (filterRequest.ByToDate)
            {
                _filteredCars = FilterByToSpecificDate(filterRequest.ToDate, _filteredCars);
            }

            return _filteredCars;
        }

        public Car[] FilterBySpeed(int? speed, Car[] filteredCars)
        {
            return filteredCars.Where(car => car.Speed >= speed).ToArray();
        }

        public Car[] FilterByToSpecificDate(DateTime? date, Car[] filteredCars)
        {
            return filteredCars.Where(car => car.Date.CompareTo(date) < 0).ToArray();
        }

        public Car[] FilterByFromSpecificDate(DateTime? date, Car[] filteredCars)
        {
            return filteredCars.Where(car => car.Date.CompareTo(date) > 0).ToArray();
        }
    }
}
