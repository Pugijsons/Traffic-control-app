using System;
using TrafficControl.Core.Models;

namespace TrafficControl.Core.Services
{
    public interface IDayOverview
    {
        public Car[] ShowDayOverview(DateTime date);
    }
}
