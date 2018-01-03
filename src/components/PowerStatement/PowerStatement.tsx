import './PowerStatement.css';
import * as React from "react";

interface IPowerStatementProps {
}

interface IPowerStatementState {

}


export default class PowerStatement extends React.Component<IPowerStatementProps, IPowerStatementState> {
    public render() {
        return (
            <div className='power-statement'>
                <div className='power-statement__text'>
                    As a leader, public speaker, and entrepreneur, Kyle is a positive force in the software engineering
                    arena. With his creativity and anything-is-possible attitude, anything <strong>is</strong> possible.
                </div>
            </div>
        );
    }
}