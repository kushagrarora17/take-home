import React, { useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { AuthContext } from '../../contexts/authContext';
import { v4 as uuidv4 } from 'uuid';

function SendMessage(props) {

  const { addMessage, setTyping } = props;
  const { user } = useContext(AuthContext);

  const msgInputRef = useRef(null);

  const submitHandler = ev => {
    ev.preventDefault();

    const message = {
      id: uuidv4(),
      isDeleted: false,
      isEdited: false,
      text : msgInputRef.current.value,
      sender: user,
      time : dayjs().format("h:mm:ss A | DD-MM-YYYY")
    }

    addMessage(message);

    msgInputRef.current.value = "";
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="flex">
        <input type="text" ref={msgInputRef} placeholder="Enter message here" className="bordered" onFocus={() => setTyping(true)} onBlur={() => setTyping(false)}/>
        <input type="submit" value="" className="bordered"/>
      </form>
    </div>
  )
}

SendMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  setTyping: PropTypes.func.isRequired
}

export default SendMessage

