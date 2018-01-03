import './Languages.css';
import * as React from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import LanguageMap from "../LanguageMap/LanguageMap";

export interface ILanguage {
    name: string;
    fluency?: string;
}

interface ILanguagesProps { }

interface ILanguagesState {
    activeLanguage: ILanguage;
}

const englishLanguage = {name: 'English', fluency: 'Native'};
const spanishLanguage = {name: 'Spanish', fluency: 'Fluent'};
const portugueseLanguage = {name: 'Portuguese', fluency: 'Advanced'};
const nullLanguage = {name: 'none', fluency: null}

const languages = [englishLanguage, spanishLanguage, portugueseLanguage];
const mapLanguages = [englishLanguage, spanishLanguage, portugueseLanguage, nullLanguage];
const languageMappings = {english: englishLanguage, spanish: spanishLanguage, portuguese: portugueseLanguage,
    none: nullLanguage};

export default class Languages extends React.Component<ILanguagesProps, ILanguagesState> {

    constructor(props) {
        super(props);
        this.state = { activeLanguage: nullLanguage };
        this.languageSelectors = this.languageSelectors.bind(this);
        this.languageMaps = this.languageMaps.bind(this);
    }

    public onLanguageHover = (languageName): void => {
        this.setState({activeLanguage: languageMappings[languageName.toLowerCase()]});
    }

    public languageSelectors = (activeLanguage: ILanguage, onLanguageHover: (ILanguage) => void) => {
        return languages.map(function(object) {
            return(<LanguageSelector
                name={object.name}
                fluency={object.fluency}
                isActive={object.name == activeLanguage.name}
                onLanguageHover={onLanguageHover}
                key={object.name}
            />);
        });
    }

    public languageMaps = (activeLanguage: ILanguage) => {
        return mapLanguages.map(function(object) {
            return(<LanguageMap
                name={object.name.toLowerCase()}
                isActive={object.name == activeLanguage.name}
                key={object.name}
            />);
        });
    }

    public render() {
        return (
            <div className='languages'>
                <div className='languages__content'>
                    <div className='languages__title'>Languages I Speak</div>
                    <div className='languages__interactive-box'>
                        <div
                            className='languages__selectors'
                            onMouseLeave={_e => this.onLanguageHover('none')}>
                            {this.languageSelectors(this.state.activeLanguage, this.onLanguageHover)}
                        </div>
                        <div className='languages__maps'>{this.languageMaps(this.state.activeLanguage)}</div>
                    </div>
                </div>
            </div>
        );
    }
}