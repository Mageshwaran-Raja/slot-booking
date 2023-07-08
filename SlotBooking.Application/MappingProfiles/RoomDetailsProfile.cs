using AutoMapper;
using SlotBooking.Application.Features.RoomDetails.Commands.CreateRoom;
using SlotBooking.Application.Features.RoomDetails.Queries.GetAllRooms;
using SlotBooking.Domain;

namespace SlotBooking.Application.MappingProfiles
{
    public class RoomDetailsProfile : Profile
    {
        public RoomDetailsProfile()
        {
            CreateMap<RoomDetails, RoomDetailsDTO>().ReverseMap();
            CreateMap<CreateRoomCommand, RoomDetails>().ReverseMap();
        }
    }
}
