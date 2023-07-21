using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TrafficControl.Core.Models;

namespace TrafficControl.Data
{
    public interface ITrafficControlDbContext
    {
        public DbSet<Car> Cars { get; set; }
        DbSet<T> Set<T>() where T : class;
        EntityEntry<T> Entry<T>(T entity) where T : class;
        public int SaveChanges();
    }
}
