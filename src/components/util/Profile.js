import React from 'react';
import PropTypes from 'prop-types'
import superman from '../../assets/icons/superman.png'
import batman from '../../assets/icons/batman.png'
import flash from '../../assets/icons/flash.png'
import aquaman from '../../assets/icons/aquaman.png'
import arrow from '../../assets/icons/arrow.png'
import wonder_woman from '../../assets/icons/wonder woman.png'
import green_lantern from '../../assets/icons/green lantern.png'

export default function Profile(props) {

  const {person, styles} = props;

  const UserImageMap = {
    superman,
    batman,
    flash,
    aquaman,
    arrow,
    "wonder woman" : wonder_woman,
    "green lantern" : green_lantern
  }

  return (
    <img src={UserImageMap[person.toLowerCase()]} alt="" className={`profile ${styles ? styles : ''}`}/>
  )
}

Profile.propTypes = {
  person : PropTypes.string.isRequired,
  styles : PropTypes.string
}