using SlotBooking.Domain.Common;

namespace SlotBooking.Domain
{
    public class RoomDetails : BaseEntity
    {
        public string RoomName { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public bool IsTVAvailable { get; set; }
        public bool IsWhiteBoardAvailable { get; set; }
        public string Location { get; set; } = string.Empty;
    }
}
