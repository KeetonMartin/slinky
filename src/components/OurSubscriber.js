import React, { useState } from 'react';
import { Button, Input } from 'react-daisyui'
// import the hook
import { useMailChimp } from 'react-use-mailchimp-signup';

export const OurSubscriber = () => {
    const { error, loading, status, subscribe, message } = useMailChimp({
        action: `https://yahoo.us21.list-manage.com/subscribe/post?u=84d6144f422eb763aabe8f8ca&amp;id=62ec518f77&amp;f_id=009cc3e1f0`,
    });

    const [inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        if (inputs) {
            subscribe(inputs);
        }
    };

    return (
        <>
            {error && <p>ERROR</p>}
            {loading && <p>...Loading</p>}
            {status && <p>{status}</p>}
            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div className='container mx-auto justify-center mt-4 flex'>
                    {/* <label htmlFor="mchimpEmail">Email</label> */}
                    {/* <input type="email" name="email" id="mchimpEmail" onChange={handleInputChange} /> */}
                    <div className='flex flex-row'>
                    <Input className='mx-1' placeholder='email' type="email" name="email" id="mchimpEmail" onChange={handleInputChange} />
                    <Button className='mx-1' type="submit" color="secondary">Join waitlist</Button>
                    </div>
                </div>
                {/* <button type="submit">Sign me up!</button> */}
            </form>
        </>
    );
};
