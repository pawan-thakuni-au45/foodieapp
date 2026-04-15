import { useEffect, useState } from "react"

const useUserOnline =()=>{
    const [onlineuser,setOnlineuser]=useState(true)
     
    useEffect(()=>{
        window.addEventListener('offline',()=>{setOnlineuser(false)})
        window.addEventListener('online',()=>{setOnlineuser(true)})

    },[])

    return onlineuser
}

export default useUserOnline