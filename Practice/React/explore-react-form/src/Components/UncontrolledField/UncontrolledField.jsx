import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef("");
    const passRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email, pass);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='Your Email' />
                <br />
                <input ref={passRef} type="password" name="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;