using AutoMapper;
using MediatR;
using SlotBooking.Application.Contracts.Persistence;

namespace SlotBooking.Application.Features.RoomDetails.Queries.GetAllRooms
{
    public class GetAllRoomsQueryHandler : IRequestHandler<GetAllRoomsQuery, List<RoomDetailsDTO>>
    {
        private readonly IMapper _mapper;
        private readonly IRoomDetailsRepository _roomDetailsRepository;

        public GetAllRoomsQueryHandler(IMapper mapper, IRoomDetailsRepository roomDetailsRepository)
        {
            _mapper = mapper;
            _roomDetailsRepository = roomDetailsRepository;
        }

        public async Task<List<RoomDetailsDTO>> Handle(GetAllRoomsQuery request, CancellationToken cancellationToken)
        {
            var leaveTypes = await _roomDetailsRepository.GetAsync();

            var leaveTypesDto = _mapper.Map<List<RoomDetailsDTO>>(leaveTypes);

            return leaveTypesDto;
        }

    }
}
