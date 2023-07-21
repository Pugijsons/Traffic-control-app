using System;

namespace TrafficControl.Core.Models
{
    public class Car : Entity
    {
        public DateTime Date { get; set; }
        public int Speed { get; set; }
        public string LicensePlate { get; set; }
    }
}
