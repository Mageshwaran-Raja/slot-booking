using Microsoft.EntityFrameworkCore;
using SlotBooking.Domain;
using SlotBooking.Domain.Common;

namespace SlotBooking.Persistence.DatabaseContext
{
    public class SlotBookingContext : DbContext
    {
        public SlotBookingContext(DbContextOptions<SlotBookingContext> options) : base(options) { }

        public DbSet<RoomDetails> RoomDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(SlotBookingContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var entry in base.ChangeTracker.Entries<BaseEntity>()
                .Where(q => q.State == EntityState.Added || q.State == EntityState.Modified))
            {
                entry.Entity.ModifiedDate = DateTime.Now;

                if (entry.State == EntityState.Added)
                {
                    entry.Entity.CreatedDate = DateTime.Now;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
