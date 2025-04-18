import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, handleNameOnChange] = useInputField("");
    const [email, handleEmailOnChange] = useInputField("");
    const [password, handlePasswordOnChange] = useInputField("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={handleNameOnChange} placeholder='Your Name'/>
                <br />
                <input type="email" defaultValue={email} onChange={handleEmailOnChange} placeholder='Your Email' />
                <br />
                <input type="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='Your Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;