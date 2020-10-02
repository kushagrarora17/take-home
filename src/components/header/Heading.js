import React from 'react'
import PropTypes from 'prop-types'
import faceIcon from '../../assets/icons/face.png'
import ThemeToggler from '../util/ThemeToggler';

function Heading(props) {
  const {
    messageCount, room
  } = props;
  return (
    <div className="container">
      <div className="flex align-center">
        <div>
          <ThemeToggler />
        </div>
        <div className="room-name">
          #{room}
        </div>
        <div className="msg-count">
          {messageCount} <img src={faceIcon} alt="messages"/>
        </div>
      </div>
    </div>
  )
}

Heading.propTypes = {
  messageCount : PropTypes.number.isRequired,
  room : PropTypes.string.isRequired
}

export default Heading

