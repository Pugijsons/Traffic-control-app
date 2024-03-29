﻿using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TrafficControl.Core.Models;
using TrafficControl.Core.Services;
using TrafficControl.Data;

namespace TrafficControl.Services
{
    public class DbService : IDbService
    {
        private readonly ITrafficControlDbContext _context;
        public DbService(ITrafficControlDbContext context)
        {
            _context = context;
        }

        public T Create<T>(T entity) where T : Entity
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public void Delete<T>(T entity) where T : Entity
        {
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public List<T> GetAll<T>() where T : Entity
        {
            return _context.Set<T>().ToList();
        }

        public T GetById<T>(int id) where T : Entity
        {
            return _context.Set<T>().SingleOrDefault(s => s.Id == id);
        }

        public void Update<T>(T entity) where T : Entity
        {
            _context.Entry<T>(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
