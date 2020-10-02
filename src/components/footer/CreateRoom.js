import React, {useRef} from 'react'
import PropTypes from 'prop-types'

function CreateRoom(props) {

  const { addRoom } = props;

  const roomInputRef = useRef(null);

  const handleRoomSubmit = ev => {
    ev.preventDefault();

    const newRoom = roomInputRef.current.value;

    addRoom(newRoom);

    roomInputRef.current.value = "";
  }

  return (
    <div className="container">
      <form onSubmit={handleRoomSubmit} className="flex">
        <input type="text" ref={roomInputRef} placeholder="Create new room" className="bordered"/>
        <input type="submit" value="" className="bordered"/>
      </form>
    </div>
  )
}

CreateRoom.propTypes = {
  addRoom : PropTypes.func.isRequired
}

export default CreateRoom

