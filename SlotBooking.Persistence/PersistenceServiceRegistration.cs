using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SlotBooking.Application.Contracts.Persistence;
using SlotBooking.Persistence.DatabaseContext;
using SlotBooking.Persistence.Repositories;

namespace SlotBooking.Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection AddPersistenceService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SlotBookingContext>(options => options
                .UseSqlServer(configuration.GetConnectionString("SlotBookingDatabaseConnectionString")));

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IRoomDetailsRepository, RoomDetailsRepository>();
            return services;
        }
    }
}
