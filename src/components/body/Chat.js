import React, {useEffect, useRef, useContext} from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../contexts/authContext';
import Profile from '../util/Profile';

function Chat(props) {
  const { chat, room, typing, deleteMsg } = props;
  const messages = chat[room];
  const { user } = useContext(AuthContext);
  const lastMsgRef = useRef(null);

  useEffect(() => {
    if(lastMsgRef.current !== null)
      lastMsgRef.current.focus();
  }, [messages])

  const msgCount = messages.length;

  return (
    <div className="container relative">
      {typing && (
        <p className="typing-indicator">{user} is typing...</p>
      )}
      <ul>
        {messages.map((msg, index) => (
          <li className={user === msg.sender ? 'self' : ''} tabIndex={index === msgCount - 1 ? "1" : "-1"} key={msg.id} ref={index === msgCount - 1 ? lastMsgRef : null}>
            <div className={`flex ${ user === msg.sender ? 'flex-right' : ''}`}>
              {user !== msg.sender && (
                <div className="profile-container">
                  <Profile person={msg.sender} />
                </div>
              )}
              {user === msg.sender && !msg.isDeleted && <button onClick={() => deleteMsg(msg.id)}><span role="img" aria-label="delete">❌</span></button>}
              <article>
                <h3>{msg.sender}</h3>
                {msg.isDeleted ? (<p>(This message was deleted)</p>) : (
                  <>
                    <p>{msg.text}</p>
                    <small>{msg.time}</small>
                  </>
                )}
                
              </article>

            </div>
          </li>
        ))}
      </ul>
      {messages.length === 0 && (
        <p>This is a new room. No messages at the moment.</p>
      )}
    </div>
  )
}

Chat.propTypes = {
  chat : PropTypes.object.isRequired,
  room : PropTypes.string.isRequired,
  typing : PropTypes.bool.isRequired,
  deleteMsg: PropTypes.func.isRequired
}

export default Chat

