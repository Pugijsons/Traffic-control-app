﻿using System.Collections.Generic;
using TrafficControl.Core.Models;

namespace TrafficControl.Core.Services
{
    public interface IDbService
    {
        public T GetById<T>(int id) where T : Entity;

        public T Create<T>(T entity) where T : Entity;

        public void Update<T>(T entity) where T : Entity;

        public void Delete<T>(T entity) where T : Entity;

        public List<T> GetAll<T>() where T : Entity;
    }
}
