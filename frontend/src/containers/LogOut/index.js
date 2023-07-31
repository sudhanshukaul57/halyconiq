import React from 'react'
import { useHistory } from "react-router-dom";

export default function LogOut(props) {
    props.setSession(false)
    useHistory().push("/");

    return (
        <div>
            
        </div>
    )
}


