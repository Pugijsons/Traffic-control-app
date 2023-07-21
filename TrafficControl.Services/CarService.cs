using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using TrafficControl.Core.Models;
using TrafficControl.Core.Services;
using TrafficControl.Data;

namespace TrafficControl.Services
{
    public class CarService : EntityService<Car>, ICarService
    {
        private readonly ITrafficControlDbContext _context;
        public CarService(ITrafficControlDbContext context) : base(context)
        {
            _context = context;
        }

        public Car StringToCar(string carInfo)
        {
            string[] carData = carInfo.Split('\t');
            return new Car
            {
                Date = DateTime.Parse(carData[0]),
                Speed = Int32.Parse(carData[1]),
                LicensePlate = carData[2]
            };
        }

        public void AddCars(List<string> carList)
        { 
            Car[] carData = carList.Select(carData => StringToCar(carData)).ToArray();
            _context.Cars.AddRange(carData);
            _context.SaveChanges();
        }
    }
}
