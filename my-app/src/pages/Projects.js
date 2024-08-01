import './Projects.css'
import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
// import ReactPlayer from 'react-player'

export default function Projects(){
    var flipDelay = 1 /* in seconds */
    const [EpiPalInfo, setEpiPalInfo] = useState(false);
    const [RobloxInfo, setRobloxInfo] = useState(false);
    const [TonStashInfo, setTonStashInfo] = useState(false);

    const Epi = () => {
        setEpiPalInfo(!EpiPalInfo);
    }
    const Rob = () => {
        setRobloxInfo(!RobloxInfo);
    }
    const Ton = () => {
        setTonStashInfo(!TonStashInfo);
    }

    return <div className="Projects">
        <div className="Card">
            <ReactCardFlip isFlipped={EpiPalInfo} flipDirection="horizontal" flipSpeedFrontToBack={flipDelay} flipSpeedBackToFront={flipDelay}>
                <div className="Front" onMouseEnter={Epi}>
                    Epipal
                </div>
                <div className="Back" onMouseLeave={Epi}>
                    <video autoPlay loop width="100%">
                        <source src="/assets/EpiPalDemo.mp4" type="video/mp4" />
                    </video>
                </div>
            </ReactCardFlip>
        </div>
        <div className="Card">
            <ReactCardFlip isFlipped={RobloxInfo} flipDirection="horizontal" flipSpeedFrontToBack={flipDelay} flipSpeedBackToFront={flipDelay}>
                <div className="Front" onMouseEnter={Rob}>
                    Roblox
                </div>
                <div className="Back" onMouseLeave={Rob}>
                    In Development
                </div>
            </ReactCardFlip>
        </div>
        <div className="Card">
            <ReactCardFlip isFlipped={TonStashInfo} flipDirection="horizontal" flipSpeedFrontToBack={flipDelay} flipSpeedBackToFront={flipDelay}>
                <div className="Front" onMouseEnter={Ton}>
                    TonStash
                </div>
                <div className="Back" onMouseLeave={Ton}>
                    <video autoPlay loop width="100%">
                        <source src="/assets/TonStash.mp4" type="video/mp4" />
                    </video>
                </div>
            </ReactCardFlip>
        </div>
    </div>
}