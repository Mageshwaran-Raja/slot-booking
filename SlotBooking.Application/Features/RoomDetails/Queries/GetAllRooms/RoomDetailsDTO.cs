namespace SlotBooking.Application.Features.RoomDetails.Queries.GetAllRooms
{
    public class RoomDetailsDTO
    {
        public Guid Id { get; set; }
        public string RoomName { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public bool IsTVAvailable { get; set; }
        public bool IsWhiteBoardAvailable { get; set; }
        public string Location { get; set; } = string.Empty;
    }
}
