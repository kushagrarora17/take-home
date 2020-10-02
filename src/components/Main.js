import React, {useState} from 'react'
import { CHAT_STORAGE_KEY, DEFAULT_ROOMS, ROOMS_STORAGE_KEY } from '../utils/constants';
import { deepCopyFunction } from '../utils/process';
import Chat from './body/Chat';
import Rooms from './body/Rooms';
import CreateRoom from './footer/CreateRoom';
import SendMessage from './footer/SendMessage';
import Heading from './header/Heading';
import Users from './header/Users';

export default function Main() {

  const [rooms, setRooms] = useState(
    window.localStorage.getItem(ROOMS_STORAGE_KEY) ? 
    JSON.parse(window.localStorage.getItem(ROOMS_STORAGE_KEY)) : 
    DEFAULT_ROOMS
  );
  const [currentRoom, setCurrentRoom] = useState(DEFAULT_ROOMS[0]);

  const [chat, setChat] = useState(
    window.localStorage.getItem(CHAT_STORAGE_KEY) ? 
    JSON.parse(window.localStorage.getItem(CHAT_STORAGE_KEY)) :
    {}
  );

  const [isTyping, setIsTyping] = useState(false);

  const addRoomHandler = (roomName) => {

    if(roomName.trim() === "") {
      window.alert("Room name cannoyt be blank. Try again.")
      return;
    }

    if(rooms.indexOf(roomName) > -1){
      window.alert("Room already present. Try different name.")
      return;
    }

    const updatedRooms = [...rooms, roomName];
    setRooms(updatedRooms);

    window.localStorage.setItem(ROOMS_STORAGE_KEY, JSON.stringify(updatedRooms));
  }

  const addMessageHandler = (msgObj) => {
    const oldChat = deepCopyFunction(chat);

    oldChat[currentRoom].push(msgObj);

    setChat(oldChat);
    window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(oldChat));
  }

  const deleteMessageHandler = id => {
    const oldChat = deepCopyFunction(chat);

    for(let i = 0; i < oldChat[currentRoom].length; i++) {
      const current = oldChat[currentRoom][i];

      if(current.id === id){
        current.isDeleted = true;
        setChat(oldChat);
        window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(oldChat));
        break;
      }
    }
  }

  if(typeof chat[currentRoom] === "undefined")
    chat[currentRoom] = [];

  return (
    <div className="relative content">
      <div className="header flex">
        <div className="users no-grow-shrink bordered w-25">
          <Users />
        </div>
        <div className="heading no-grow-shrink bordered w-75">
          <Heading messageCount={chat[currentRoom].length} room={currentRoom}/>
        </div>
      </div>
      <div className="body flex">
        <div className="rooms no-grow-shrink bordered w-25">
          <Rooms rooms={rooms} active={currentRoom} changeRoom={setCurrentRoom}/>
        </div>
        <div className="chat no-grow-shrink bordered w-75">
          <Chat chat={chat} room={currentRoom} typing={isTyping} deleteMsg={deleteMessageHandler}/>
        </div>
      </div>
      <div className="footer flex">
        <div className="create-room no-grow-shrink bordered w-25">
          <CreateRoom addRoom={addRoomHandler}/>
        </div>
        <div className="send-message no-grow-shrink bordered w-75">
          <SendMessage addMessage={addMessageHandler} setTyping={setIsTyping}/>
        </div>
      </div>
    </div>
  )
}
