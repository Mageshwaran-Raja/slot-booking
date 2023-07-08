using AutoMapper;
using MediatR;
using SlotBooking.Application.Contracts.Persistence;

namespace SlotBooking.Application.Features.RoomDetails.Commands.CreateRoom
{
    public class CreateRoomCommandHandler : IRequestHandler<CreateRoomCommand, Guid>
    {
        private readonly IMapper _mapper;
        private readonly IRoomDetailsRepository _roomDetailsRepository;

        public CreateRoomCommandHandler(IMapper mapper, IRoomDetailsRepository roomDetailsRepository)
        {
            _mapper = mapper;
            _roomDetailsRepository = roomDetailsRepository;
        }
        public async Task<Guid> Handle(CreateRoomCommand request, CancellationToken cancellationToken)
        {
            var room = _mapper.Map<Domain.RoomDetails>(request);

            await _roomDetailsRepository.CreateAsync(room);

            return room.Id;
        }
    }
}
