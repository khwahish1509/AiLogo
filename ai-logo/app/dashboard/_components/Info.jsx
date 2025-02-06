import { UserDetailContex } from '@/app/_context/UserDetailContext';
import React, { useContext } from 'react'

function Info() {
    const {userDetail,setUserDetail} = useContext(UserDetailContex);
  return (
    <div>Info</div>
  )
}

export default Info