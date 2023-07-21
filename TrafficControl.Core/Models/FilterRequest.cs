using System;

namespace Traffic_control_app.Models
{
    public class FilterRequest
    {
        public bool BySpeed { get; set; }
        public bool ByToDate { get; set; }
        public bool ByFromDate { get; set; }
        public int? Speed { get; set; }
        public DateTime? ToDate { get; set; }
        public DateTime? FromDate { get; set; }
    }
}
