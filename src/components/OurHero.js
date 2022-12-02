import React from 'react';
import { Hero } from 'react-daisyui'
import { OurSubscriber } from './OurSubscriber';

// const url = "//yahoo.us21.list-manage.com/subscribe/post?u=84d6144f422eb763aabe8f8ca&amp;id=62ec518f77&amp;f_id=009cc3e1f0";

class OurHero extends React.Component {
    render() {
        return (
            <Hero className='h-auto items-center'>
                <Hero.Overlay className="bg-opacity-60" />
                <Hero.Content className="text-center">
                    <div className="max-w-xl items-center ">

                        <h1 className="text-5xl font-bold">Find Love. Earn Crypto. Slinky.</h1>
                        <p className="py-6">
                            Slinky is a dating app that rewards you with cryptocurrency for finding love.
                            All your friends are talking about it.
                            Coming soon to a phone near you.
                        </p>


                        <div className="card w-auto bg-primary text-primary-content mx-auto ">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">We're still building our app</h2>
                                <p className="card-subtitle">But you can sign up to be notified when we launch.</p>
                                <OurSubscriber />
                            </div>
                        </div>

                        <div class="mockup-phone border-primary my-8">
                            <div class="camera"></div>
                            <div class="display">
                                <div class="artboard artboard-demo phone-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                                        <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z" />
                                    </svg>

                                </div>
                            </div>
                        </div>


                    </div>
                </Hero.Content>
            </Hero>
        )
    }
}

// Path: src/components/ourHero.js
export default OurHero;