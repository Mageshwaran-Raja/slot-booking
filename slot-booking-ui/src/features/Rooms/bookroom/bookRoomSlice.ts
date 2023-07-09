import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RoomDetails } from "../../../app/models/RoomDetails";
import { RootState } from "../../../app/store/configureStore";
import agent from "../../../app/api/agent";

// interface RoomsState {
//     status: string;
//     roomDetailssLoaded: boolean;
// }

// const initialState : RoomsState = {
//     rooms: null,
//     status: 'idle',
//     roomDetailssLoaded: false
// }

const roomsAdapter = createEntityAdapter<RoomDetails>();

export const fetchRoomsAsync = createAsyncThunk<RoomDetails[]>(
    'rooms/fetchRoomsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.Rooms.list();
        }
        catch (error: any) {
            thunkAPI.rejectWithValue({error: error.data});
        }
    }
)

export const bookRoomSlice = createSlice ({
    name: 'rooms',
    initialState: roomsAdapter.getInitialState({
    status: 'idle',
    roomDetailssLoaded: false
    }),
    reducers: {
    },
    extraReducers: (builder => {
        builder.addCase(fetchRoomsAsync.pending, (state) => {
            state.status = 'pending'
        });
        builder.addCase(fetchRoomsAsync.fulfilled, (state, action) => {
            roomsAdapter.setAll(state, action.payload);
            state.status = 'idle'
            state.roomDetailssLoaded = true
        });
        builder.addCase(fetchRoomsAsync.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'idle'
        })
    })
});

export const roomSelector = roomsAdapter.getSelectors((state: RootState) => state.rooms);