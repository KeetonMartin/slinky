import React from 'react';
import { Hero } from 'react-daisyui'
import { OurSubscriber } from './OurSubscriber';

// const url = "//yahoo.us21.list-manage.com/subscribe/post?u=84d6144f422eb763aabe8f8ca&amp;id=62ec518f77&amp;f_id=009cc3e1f0";

class OurHero extends React.Component {
    render() {
        return (
            <Hero className='h-screen items-center'>
                <Hero.Overlay className="bg-base-100" />
                <Hero.Content className="text-center">
                    <div className="max-w-4xl items-center ">

                        <div className="card w-48 bg-primary text-primary-content mx-auto my-8">
                            <div className="card-body items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                                </svg>
                            </div>
                        </div>


                        <h1 className="text-5xl font-bold">Find Love. Earn Cash. Slinky.</h1>
                        <p className="py-6">
                            Slinky is a dating app that rewards you with cash for finding love.
                            All your friends are talking about it.
                            Coming soon to a phone near you.
                        </p>


                        <div className="card bg-primary text-primary-content mx-auto ">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">We're still building our app</h2>
                                <p className="card-subtitle">But you can sign up to be notified when we launch.</p>
                                <OurSubscriber />
                            </div>
                        </div>

                        {/* <div class="mockup-phone border-primary my-8">
                            <div class="camera"></div>
                            <div class="display">
                                <div class="artboard artboard-demo phone-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                                        <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </Hero.Content>
            </Hero>
        )
    }
}

// Path: src/components/ourHero.js
export default OurHero;