import './Hero.css';
import * as React from "react";
import ContactMethod from "../ContactMethod/ContactMethod";
import ContactMethods from "../ContactMethods/ContactMethods";

interface IHeroProps {
}

interface IHeroState {
}


export default class Hero extends React.Component<IHeroProps, IHeroState> {
    public resumeButton() {
        return(<a className='hero__resume-button' href="https://s3-us-west-2.amazonaws.com/kyleboss.com/Resume.png">
            Résumé
        </a>)
    }

    public render() {
        return (
            <div className='hero'>
                <div className="hero__background" />
                {this.resumeButton()}
                <div className='hero__main-text-container'>
                    <div className="hero__main-text">Hello, I am</div>
                    <div className="hero__main-text hero__main-text--emphasized">Kyle Boss</div>
                    <div className='hero__main-text hero__main-text--subtitle'>
                        <div className="tablet-and-desktop-only">
                            Positive, energetic, & socially-aware software engineer
                        </div>
                        <div className="mobile-only">Energetic software engineer</div>
                    </div>
                </div>
                <ContactMethods />
            </div>
        );
    }
}