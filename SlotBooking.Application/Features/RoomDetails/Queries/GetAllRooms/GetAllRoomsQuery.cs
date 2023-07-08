using MediatR;

namespace SlotBooking.Application.Features.RoomDetails.Queries.GetAllRooms
{
    public class GetAllRoomsQuery : IRequest<List<RoomDetailsDTO>>
    {
    }
}
