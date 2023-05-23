using System.Collections.Generic;
using TrafficControl.Core.Models;
using TrafficControl.Core.Services;
using TrafficControl.Data;

namespace TrafficControl.Services
{
    public class EntityService<T> : DbService, IEntityService<T> where T : Entity
    {
        public EntityService(ITrafficControlDbContext context) : base(context)
        {
        }

        public T Create(T entity)
        {
            return Create<T>(entity);
        }

        public void Delete(T entity)
        {
            Delete<T>(entity);
        }

        public List<T> GetAll()
        {
            return GetAll<T>();
        }

        public T GetById(int id)
        {
            return GetById<T>(id);
        }

        public void Update(T entity)
        {
            Update<T>(entity);
        }
    }
}
