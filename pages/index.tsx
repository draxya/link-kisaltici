import type { NextPage } from 'next'
import React, { useState } from 'react';
import AddLink from '../components/AddLink';
import { FaGithub } from 'react-icons/fa';
import { Header } from "../components/Header";

const Home: NextPage = () => {

  const [id, setId] = useState("");

  const baseUrl = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  return (

    <div className="h-screen w-screen flex justify-center items-center bg-violet-400 ">
      
      <Header title="Link Kısaltıcı"/>

      <div className="max-w-2xl bg-white rounded-md w-full p-6 ">

        <h1 className='font-semibold text-2xl'>Link Kısaltıcı</h1>
        <AddLink id={id} setId={setId} />

        {id && (
          <div className='bg-fuchsia-50 flex items-center justify-center w-full text-xl text-cyan-800 mt-4 p-3 rounded-sm'>
            <a href={`${baseUrl}/${id}`} target="_blank">{`${baseUrl}/${id}`}</a>
          </div>
        )}

        <div className="footer">
          <a href='https://github.com/draxya/link-kisaltici'><FaGithub className='github' /></a>
        </div>
        
      </div>
    </div>


  )
}

export default Home
