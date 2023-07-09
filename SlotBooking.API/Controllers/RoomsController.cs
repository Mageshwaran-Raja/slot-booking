using MediatR;
using Microsoft.AspNetCore.Mvc;
using SlotBooking.Application.Features.RoomDetails.Commands.CreateRoom;
using SlotBooking.Application.Features.RoomDetails.Queries.GetAllRooms;

namespace SlotBooking.API.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class RoomsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public RoomsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("GetAllRooms")]
        public async Task<ActionResult<List<RoomDetailsDTO>>> Get(bool isLoggedInUser = false)
        {
            var rooms = await _mediator.Send(new GetAllRoomsQuery());
            return Ok(rooms);
        }

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> Post(CreateRoomCommand createRoom)
        {
            var response = await _mediator.Send(createRoom);
            return CreatedAtAction(nameof(Get), new { id = response });
        }
    }
}