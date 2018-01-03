import './ContactMethods.css';
import * as React from "react";
import ContactMethod from "../ContactMethod/ContactMethod";

interface IContactMethodsProps {
}

interface IContactMethodsState {

}


export default class ContactMethods extends React.Component<IContactMethodsProps, IContactMethodsState> {
    public render() {
        return (
            <div className='hero__contact-methods'>
                <ContactMethod iconName='github' textValue='kyleboss' contactUrl='http://github.com/kyleboss' />
                <ContactMethod iconName='linkedin' textValue='kyleboss' contactUrl='https://linkedin.com/in/kyleboss' />
                <ContactMethod
                    iconName='twitter'
                    textValue='@likeakyleboss'
                    contactUrl='https://twitter.com/likeakyleboss'
                />
                <ContactMethod iconName='email' textValue='kyle@kyleboss.com' contactUrl='mailto:kyle@kyleboss.com' />
            </div>
        );
    }
}