import './ContactMethods.css';
import * as React from "react";
import ContactMethod from "../ContactMethod/ContactMethod";

interface IContactMethodsProps {
}

interface IContactMethodsState {

}


export default class ContactMethods extends React.Component<IContactMethodsProps, IContactMethodsState> {
    public contactMethodObjects() {
        return([
            { iconName: 'github', textValue: 'kyleboss', contactUrl: 'http://github.com/kyleboss' },
            { iconName: 'twitter', textValue: '@likeakyleboss', contactUrl: 'https://twitter.com/likeakyleboss' },
            { iconName: 'linkedin', textValue: 'kyleboss', contactUrl: 'https://linkedin.com/in/kyleboss' },
            { iconName: 'email', textValue: 'kyle@kyleboss.com', contactUrl: 'mailto:kyle@kyleboss.com' }

        ]);
    }

    public contactMethods(index) {
        var object = this.contactMethodObjects()[index];
        return(<ContactMethod
            iconName={object.iconName}
            textValue={object.textValue}
            contactUrl={object.contactUrl}
        />);
    }

    public render() {
        return (
            <div className='hero__contact-methods'>
                <div className='hero__contact-methods-row'>
                    {this.contactMethods(0)}
                    {this.contactMethods(1)}
                </div>
                <div className='hero__contact-methods-row'>
                    {this.contactMethods(2)}
                    {this.contactMethods(3)}
                </div>
            </div>
        );
    }
}