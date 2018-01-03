import './LanguageSelector.css';
import * as React from "react";
import {ILanguage} from "../Languages/Languages";

interface ILanguageSelectorProps {
    name: string;
    fluency: string;
    isActive: boolean;
    onLanguageHover: (ILanguage) => void;
}

interface ILanguageSelectorState {
}

export default class LanguageSelector extends React.Component<ILanguageSelectorProps, ILanguageSelectorState> {
    public render() {
        return (
            <div
                className={'language-selector bracket ' + (this.props.isActive ? 'language-selector--active' : '')}
                onMouseEnter={_e => this.props.onLanguageHover(this.props.name)}
            >
                <div className='bracket-text'>
                    <div className='language-selector__name'>{this.props.name}</div>
                    <div className='language-selector__fluency'>{this.props.fluency}</div>
                </div>
            </div>
        );
    }
}