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


            <form onSubmit={handleSubmit}>
                <div className='container mx-auto my-2 justify-center mt-4 flex'>
                    {/* <label htmlFor="mchimpEmail">Email</label> */}
                    {/* <input type="email" name="email" id="mchimpEmail" onChange={handleInputChange} /> */}
                    <div className='flex flex-row'>
                        <Input className='mx-1 text-base-content' placeholder='email' type="email" name="email" id="mchimpEmail" onChange={handleInputChange} />
                        <Button className='mx-1' type="submit" color="secondary">Join waitlist</Button>
                    </div>
                </div>
                {/* <button type="submit">Sign me up!</button> */}
            </form>

            <div className="max-w-md items-center ">

                {(error || status === "failed") && <div className="alert alert-error shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! {message}...</span>
                    </div>
                </div>
                }
                {loading && <button className="btn loading bg-secondary"></button>}
                {/* {status && <p>{status}</p>} */}
                {status === "success" && message && <div className="alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{message}</span>
                    </div>
                </div>
                }
            </div>
        </>
    );
};
