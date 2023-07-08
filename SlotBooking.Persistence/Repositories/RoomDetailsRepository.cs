using SlotBooking.Application.Contracts.Persistence;
using SlotBooking.Domain;
using SlotBooking.Persistence.DatabaseContext;

namespace SlotBooking.Persistence.Repositories
{
    public class RoomDetailsRepository : GenericRepository<RoomDetails>, IRoomDetailsRepository
    {
        public RoomDetailsRepository(SlotBookingContext databaseContext) : base(databaseContext)
        {
        }
    }
}
