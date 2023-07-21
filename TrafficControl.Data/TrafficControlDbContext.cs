using Microsoft.EntityFrameworkCore;
using TrafficControl.Core.Models;

namespace TrafficControl.Data
{
    public class TrafficControlDbContext : DbContext, ITrafficControlDbContext
    {
        public TrafficControlDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
    }

}

    