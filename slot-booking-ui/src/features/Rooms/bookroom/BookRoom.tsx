import { useEffect, useState } from "react";
import { getScalingFactor } from "../../../app/util/util";
import { Button, Dropdown, Icon } from 'semantic-ui-react';
import '../bookroom/BookRoom.css';
import { useAppDispatch, useAppSelector } from "../../../app/store/configureStore";
import { fetchRoomsAsync, roomSelector } from "./bookRoomSlice";

export default function BookRoom() {
    const rooms = useAppSelector(roomSelector.selectAll)
    const { roomDetailssLoaded, status } = useAppSelector(state => state.rooms);
    const dispatch = useAppDispatch();
    const [scalingFactor, setscalingFactor] = useState<number | null>(getScalingFactor(window.innerWidth));
    
    useEffect(() => {
        setscalingFactor(getScalingFactor(window.innerWidth));
    }, [window.innerWidth])

    useEffect(() => {
        if (!roomDetailssLoaded) dispatch(fetchRoomsAsync());
    }, [roomDetailssLoaded, dispatch]);

    console.log(rooms, status)

    const navStyles = {
        width: `calc(340px * ${scalingFactor})`,
        height: `calc(57px * ${scalingFactor})`,
        border: "1px solid #9DA2B6",
        display: 'flex',
        borderRadius: '6px',
        alignItems: 'center',
        justifyContents: 'center',
        color: '#1F2131',
        fontSize: `calc(18px * ${scalingFactor})`,
        fontWeight: 500,
        marginRight: `calc(24px * ${scalingFactor})`
    }

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]



    return (
        <>
            <span className="title" style={{ fontSize: 'calc(.55em + 1vw)' }}>Book a Room</span>
            <br />
            <span className="title" style={{
                fontSize: `calc(20px * ${scalingFactor})`,
                position: 'absolute',
                color: '#626D8A',
                fontWeight: '500',
                top: `calc(167px * ${scalingFactor})`
            }}>
                Book a conference room at any kanini location
            </span>
            <div style={{
                marginTop: `calc(97px * ${scalingFactor})`,
                display: 'inline-flex',
                alignItems: 'center'
            }}>
                {/* DropDown Select Location */}
                <Dropdown placeholder="select location" style={navStyles} clearable options={options} selection />
                <Dropdown placeholder="select date" style={navStyles} clearable options={options} selection />
                <Dropdown placeholder="select employees" style={navStyles} clearable options={options} selection />
                <button
                style={{
                    width: `calc(114px * ${scalingFactor})`,
                    height: `calc(50px * ${scalingFactor})`,
                    borderRadius: '4px',
                    background: '#5162F6',
                    border: 'none',
                    color: '#fff',
                    fontWeight: 400,
                    fontSize: `calc(20px * ${scalingFactor})`,
                    letterSpacing: `calc(.4px * ${scalingFactor})`,
                    padding: `calc(14px * ${scalingFactor}) calc(25px * ${scalingFactor})`,
                    cursor: 'pointer'
                }}
                >Search</button>
            </div>
            <div style={{display: 'flex', height: `calc(720px * ${scalingFactor})`,flexWrap: 'wrap',
            flexDirection: 'row', marginTop: `calc(66px * ${scalingFactor})`, justifyContent: 'space-between'
            }}>
                <div style={{
                    width: `calc(408px * ${scalingFactor})`,
                    height: `calc(345px * ${scalingFactor})`,
                    border: `calc(1px * ${scalingFactor}) solid #E1E1E1`,
                    borderRadius: `calc(8px * ${scalingFactor})`
                }} className="room-card">
                    <img src='/images/img.png' alt='img' 
                    style={{height: `calc(200px * ${scalingFactor})`,width: '100%'
                    }}/>
                    <div style={{
                       width: `100%`,
                       height: `calc(25px * ${scalingFactor})`, 
                       fontSize: `calc(16px * ${scalingFactor})`,
                       fontWeight: 400,
                       padding: `0px calc(18px * ${scalingFactor})`,
                       display: "flex",
                       justifyContent: 'space-between'
                    }} className="room-title">Conference Room:
                    {/* <span> <b>Spring 4px</b></span> */}
                    <span style={{
                        width: `calc(87px * ${scalingFactor})`,
                        background: '#5162F624',
                        fontSize: `calc(14px * ${scalingFactor})`,
                        color:'#5162F6',
                        padding: `calc(3px * ${scalingFactor}) calc(16px * ${scalingFactor})`,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: "center"
                    }} className="location">Chennai</span>
                    </div>
                    <div style={{padding: `0px calc(18px * ${scalingFactor})`,fontSize: `calc(16px * ${scalingFactor})`,}} className="room-name"><b>Spring 4x</b></div>
                </div>
                <div style={{
                    width: `calc(408px * ${scalingFactor})`,
                    height: `calc(345px * ${scalingFactor})`,
                    border: `calc(1px * ${scalingFactor}) solid #E1E1E1`,
                    borderRadius: `calc(8px * ${scalingFactor})`
                }} className="room-card"></div>
                <div style={{
                    width: `calc(408px * ${scalingFactor})`,
                    height: `calc(345px * ${scalingFactor})`,
                    border: `calc(1px * ${scalingFactor}) solid #E1E1E1`,
                    borderRadius: `calc(8px * ${scalingFactor})`
                }} className="room-card"></div>
                <div style={{
                    width: `calc(408px * ${scalingFactor})`,
                    height: `calc(345px * ${scalingFactor})`,
                    border: `calc(1px * ${scalingFactor}) solid #E1E1E1`,
                    borderRadius: `calc(8px * ${scalingFactor})`
                }} className="room-card"></div>
                <div style={{
                    width: `calc(408px * ${scalingFactor})`,
                    height: `calc(345px * ${scalingFactor})`,
                    border: `calc(1px * ${scalingFactor}) solid #E1E1E1`,
                    borderRadius: `calc(8px * ${scalingFactor})`
                }} className="room-card"></div>
            </div>
        </>
    )
}