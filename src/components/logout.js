import React, { useEffect } from 'react'

const Logout=(props)=>{

    useEffect(() => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        props.history.push("/login");
}, [])

    return(
        <React.Fragment>
            <h1>This is Logout Page</h1>
        </React.Fragment>
    )
}

export default Logout;