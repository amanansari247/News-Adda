'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Searchbox() {
    const[input,setInput] = useState("");
    const router = useRouter();
    const handleSearch =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!input){
            return;
        }
         router.push(`/search?term=${input}`)
    }

  return( 
  <form className="max-w-4xl mx-auto flex justify-between items-centers" onSubmit={handleSearch}>
    
    <input type="text"
    value={input}
    onChange={(e)=> setInput(e.target.value)}
     placeholder="Search Keywords..." className="flex-1 w-full h-14 rounded -sm placeholder-gray-500 text-gray-500 outline-none bg-transparent" />
    <button type="submit"
    disabled={!input}
    className="text-indigo-700 disabled:text-gray-400"
    >Search</button>
    </form>
  );
}
export default Searchbox