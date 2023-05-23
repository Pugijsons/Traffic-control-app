using System;
using Microsoft.VisualBasic;

namespace TrafficControl.Core.Models
{
    public class Car : Entity
    {
        public string Date { get; set; }
        public int Speed { get; set; }
        public string LicensePlate { get; set; }
    }
}
