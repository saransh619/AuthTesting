import React, { useState } from 'react'

export const Dashboard= () => {
    const[data,setData]=useState("");


    return (
        <>
            <h1>Hello {data}</h1>
        </>
    )
}
