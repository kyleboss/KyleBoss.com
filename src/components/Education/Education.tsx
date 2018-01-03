import './Education.css';
import * as React from "react";

interface IEducationProps {
}

interface IEducationState {
}


export default class Education extends React.Component<IEducationProps, IEducationState> {

    public educationLogo() {
        return(<img
            className='education__logo-img'
            src='http://clipground.com/images/berkeley-clipart-6.jpg'
        />)
    }

    public render() {
        return (
            <div className='education'>
                <div className='education__content'>
                    <div className='education__title'>Places I Studied At</div>
                    <div className='education__row'>
                        <div className='education__logo-container'>{this.educationLogo()}</div>
                        <div className='education__descriptors'>
                            <div className='education__institution'>
                                <div className='education__name'>UC Berkeley</div>
                                <div className='education__date'>August 2012 - May 2016</div>
                            </div>
                            <div className='education__degree'>Bachelors in Computer Science</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}