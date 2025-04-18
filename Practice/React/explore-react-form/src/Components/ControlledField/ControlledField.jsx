import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 5) {
            setPassError("Password must be 6 characters or longer");
        } else {
            setPassError("");
        }
    }

    const  handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 5) {
            setPassError("Password must be 6 characters or longer");
        } else {
            setPassError("");
        }
    }

    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} required />
                <br />
                <p style={{color: "red"}}>
                    {passError}
                </p>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;