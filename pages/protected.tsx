import { useSession } from 'next-auth/react'
import React from 'react'

const Protected = (): JSX.Element => {
    const {data: session, status} = useSession();

    if (status === "authenticated"){
        return <div style={{height: "100px"}}>This page is protected. Ur logged in as {session.user.name}</div>
    }

    return <div style={{height: "100px"}}><a href="/">Go home</a></div>

}

export default Protected