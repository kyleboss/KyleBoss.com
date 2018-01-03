import './ContactMethod.css';
import * as React from "react";

interface IContactMethodProps {
    iconName: string
    textValue: string
    contactUrl: string;
}

interface IContactMethodState {

}


export default class ContactMethod extends React.Component<IContactMethodProps, IContactMethodState> {
    public render() {
        return (
            <div className='contact-method'>
                <img
                    className='contact-method__icon'
                    src={'https://s3-us-west-2.amazonaws.com/kyleboss.com/' + this.props.iconName + '.png'}
                />
                <div className='contact-method__text'><a href={this.props.contactUrl}>{this.props.textValue}</a></div>
            </div>
        );
    }
}