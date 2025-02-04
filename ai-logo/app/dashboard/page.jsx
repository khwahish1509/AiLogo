"use client"
import React, {useContext} from 'react'
// import Info from './_components/Info'
import { UserDetailContext } from "../provider";  // ✅ Import Provider
import LogoList from './_components/LogoList'
import Info from './_components/Info'

function Dashboard() {
  const { userDetail } = useContext(UserDetailContext) || {};
  return (
    
    <div className='mt-20'>
        <Info/>

        <LogoList/>
    </div>
  )
}

export default Dashboard