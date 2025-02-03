"use client"
import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const result = await axios.post('/api/users', {
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress?.emailAddress
          });
          console.log("User saved:", result.data);
          setUserDetail(result.data);
        } catch (error) {
          console.error("Error saving user:", error.response?.data || error.message);
        }
      })();
    }
  }, [user]);

  return (
    <div>
      <Header />
      <div className='px-10 lg:px-32 xl:px-48 2xl:px-56'>
        {children}
      </div>
    </div>
  );
}

export default Provider;
