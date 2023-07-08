using MediatR;

namespace SlotBooking.Application.Features.RoomDetails.Commands.CreateRoom
{
    public class CreateRoomCommand : IRequest<Guid>
    {
        public string RoomName { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public bool IsTVAvailable { get; set; }
        public bool IsWhiteBoardAvailable { get; set; }
        public string Location { get; set; } = string.Empty;
    }
}
