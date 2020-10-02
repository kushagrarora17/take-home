import React from 'react'
import PropTypes from 'prop-types'

function Rooms(props) {

  const {
    active, rooms, changeRoom
  } = props;

  return (
    <div className="container">
      <ul>
        {rooms.map(room => <li className={`${active === room ? ' active' : ''}`} key={room} onClick={() => changeRoom(room)}>#{room}</li>)}
      </ul>
    </div>
  )
}

Rooms.propTypes = {
  active: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired,
  changeRoom: PropTypes.func.isRequired
}

export default Rooms

