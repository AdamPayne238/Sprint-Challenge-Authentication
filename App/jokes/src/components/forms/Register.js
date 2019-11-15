import React, { useState } from "react";
import { connect } from "react-redux";

import { registerUser } from "../actions";

function Register({ registerUser }){
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleUserName = event => {
        setUsername(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        }
        registerUser(user)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                username="username"
                placeholder="User Name"
                onChange={handleUserName}
                value={username}
                />
                <input 
                password="password"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
                />
                <button>Register</button>
            </form>
        </div>
    );
};

export default connect(
    null,
    {registerUser}
)(Register);