using Microsoft.EntityFrameworkCore;
using SlotBooking.Application.Contracts.Persistence;
using SlotBooking.Domain.Common;
using SlotBooking.Persistence.DatabaseContext;

namespace SlotBooking.Persistence.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        protected readonly SlotBookingContext _databaseContext;

        public GenericRepository(SlotBookingContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task CreateAsync(T entity)
        {
            await _databaseContext.AddAsync(entity);
            await _databaseContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity)
        {
            _databaseContext.Remove(entity);
            await _databaseContext.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<T>> GetAsync()
        {
            return await _databaseContext.Set<T>().AsNoTracking().ToListAsync();
        }

        public async Task<T> GetByIdAsync(Guid id)
        {
            return await _databaseContext.Set<T>().AsNoTracking().FirstOrDefaultAsync(q => q.Id == id);
        }

        public async Task UpdateAsync(T entity)
        {
            _databaseContext.Update(entity);
            _databaseContext.Entry(entity).State = EntityState.Modified;
            await _databaseContext.SaveChangesAsync();
        }
    }
}
