import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/authContext";
import { USERS } from '../../utils/constants';
import Profile from '../util/Profile';


export default function Users() {

  const {user, setUser} = useContext(AuthContext);

  return (
    <div className="container">
      <div className="flex">
        <div className="profile-container">
          <Profile person={user}/>
        </div>
        <select onChange={ev => setUser(ev.target.value)} value={user} className="user-change">
          {USERS.map(user => <option value={user} key={user}>{user}</option>)}
        </select>
      </div>
    </div>
  )
}
