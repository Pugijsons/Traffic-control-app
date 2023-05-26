using System;
using Traffic_control_app.Models;
using TrafficControl.Core.Models;

namespace TrafficControl.Core.Services
{
    public interface IFilteringService
    {
        public Car[] Filter(FilterRequest filter);
        public Car[] FilterBySpeed(int? speed, Car[] filteredCars);
        public Car[] FilterByToSpecificDate(DateTime? date, Car[] filteredCars);
        public Car[] FilterByFromSpecificDate(DateTime? date, Car[] filteredCars);
    }
}