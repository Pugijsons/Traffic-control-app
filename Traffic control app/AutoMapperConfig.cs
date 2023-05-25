using System;
using AutoMapper;
using TrafficControl.Core.Models;

namespace Traffic_control_app
{
    public class AutoMapperConfig
    {
        public static IMapper CreateMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                
            });

            config.AssertConfigurationIsValid();

            return config.CreateMapper();
        }
    }
}