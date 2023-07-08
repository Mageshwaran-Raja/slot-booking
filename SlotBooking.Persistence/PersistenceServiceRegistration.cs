using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SlotBooking.Persistence.DatabaseContext;

namespace SlotBooking.Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection AddPersistenceService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SlotBookingContext>(options => options
                .UseSqlServer(configuration.GetConnectionString("SlotBookingDatabaseConnectionString")));
            return services;
        }
    }
}
