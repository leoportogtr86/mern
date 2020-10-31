import React, { useState } from 'react'
import axios from 'axios'



export default () => {

    const [msg, setMsg] = useState('')

    axios.get('http://localhost:3001/').then((res) => {

        setMsg(res.data.msg)
    })


    return (

        <div>

            <h1 className="text-center text-primary">{msg}</h1>

        </div>
    )
}