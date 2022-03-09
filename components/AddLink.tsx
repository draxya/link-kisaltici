import React, { useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios';

type AddLinkParams = {
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>
}

const AddLink: React.FC<AddLinkParams> = ({ id, setId }) => {

    const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(url.trim()) {
        const config: AxiosRequestConfig = {
        method: "POST",
        url: "/api/add",
        headers: {
            "Content-Type": "application/json"
        },
        data: {url}
        }

        const { data } = await axios(config);
        setId(data);
    }

  }

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
        <input 
        type="url" 
        className='bg-gray-100 w-full h-10 px-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-sm text-1xl text-neutral-500' 
        placeholder="Kısaltılacak URL'yi girin."
        onChange={(e) => setUrl(e.target.value)}
        />
        <button type='submit' className="p-3 bg-purple-400 hover:bg-purple-500 rounded-lg transition-all duration-100 text-sm text-white mt-4">
            Kısalt
        </button>
    </form>
  )
}

export default AddLink