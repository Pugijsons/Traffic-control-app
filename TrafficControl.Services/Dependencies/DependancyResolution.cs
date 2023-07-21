using Microsoft.Extensions.DependencyInjection;
using TrafficControl.Core.Models;
using TrafficControl.Core.Services;

namespace TrafficControl.Services.Dependencies
{
    public static class DependencyResolution
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IEntityService<Car>, EntityService<Car>>();
            services.AddScoped<IDbService, DbService>();
            services.AddScoped<ICarService, CarService>();
            services.AddScoped<IFilteringService, FilteringService>();
            services.AddScoped<IDayOverview, DayOverview>();
            services.AddScoped<IFileParse, FileParse>();
        }
    }
}
