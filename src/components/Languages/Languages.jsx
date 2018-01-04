"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("./Languages.css");
var React = require("react");
var LanguageSelector_1 = require("../LanguageSelector/LanguageSelector");
var LanguageMap_1 = require("../LanguageMap/LanguageMap");
var englishLanguage = { name: 'English', fluency: 'Native' };
var spanishLanguage = { name: 'Spanish', fluency: 'Fluent' };
var portugueseLanguage = { name: 'Portuguese', fluency: 'Advanced' };
var nullLanguage = { name: 'none', fluency: null };
var languages = [englishLanguage, spanishLanguage, portugueseLanguage];
var mapLanguages = [englishLanguage, spanishLanguage, portugueseLanguage, nullLanguage];
var languageMappings = { english: englishLanguage, spanish: spanishLanguage, portuguese: portugueseLanguage,
    none: nullLanguage };
var Languages = /** @class */ (function (_super) {
    __extends(Languages, _super);
    function Languages(props) {
        var _this = _super.call(this, props) || this;
        _this.onLanguageHover = function (languageName) {
            _this.setState({ activeLanguage: languageMappings[languageName.toLowerCase()] });
        };
        _this.languageSelectors = function (activeLanguage, onLanguageHover) {
            return languages.map(function (object) {
                return (<LanguageSelector_1.default name={object.name} fluency={object.fluency} isActive={object.name == activeLanguage.name} onLanguageHover={onLanguageHover} key={object.name}/>);
            });
        };
        _this.languageMaps = function (activeLanguage) {
            return mapLanguages.map(function (object) {
                return (<LanguageMap_1.default name={object.name.toLowerCase()} isActive={object.name == activeLanguage.name} key={object.name}/>);
            });
        };
        _this.state = { activeLanguage: nullLanguage };
        _this.languageSelectors = _this.languageSelectors.bind(_this);
        _this.languageMaps = _this.languageMaps.bind(_this);
        return _this;
    }
    Languages.prototype.render = function () {
        var _this = this;
        return (<div className='languages'>
                <div className='languages__content'>
                    <div className='languages__title'>Languages I Speak</div>
                    <div className='languages__interactive-box'>
                        <div className='languages__selectors' onMouseLeave={function (_e) { return _this.onLanguageHover('none'); }}>
                            {this.languageSelectors(this.state.activeLanguage, this.onLanguageHover)}
                        </div>
                        <div className='languages__maps'>{this.languageMaps(this.state.activeLanguage)}</div>
                    </div>
                </div>
            </div>);
    };
    return Languages;
}(React.Component));
exports["default"] = Languages;
