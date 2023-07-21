using System.Collections.Generic;
using TrafficControl.Core.Models;

namespace TrafficControl.Core.Services
{
    public interface ICarService : IEntityService<Car>
    {
        public void AddCars(List<string> carList);
    }
}
