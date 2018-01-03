import './LanguageMap.css';
import * as React from "react";

interface ILanguageMapProps {
    name: string;
    isActive: boolean;
}

interface ILanguageMapState {
}

export default class LanguageMap extends React.Component<ILanguageMapProps, ILanguageMapState> {
    public render() {
        return (
            <div
                style={{backgroundImage: 'url("' + 'https://s3-us-west-2.amazonaws.com/kyleboss.com/' + this.props.name + '-map.png")'}}
                className={'language-map ' + (this.props.isActive ? 'language-map--active' : '')}/>
        );
    }
}