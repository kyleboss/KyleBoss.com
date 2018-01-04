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
require("./LanguageSelector.css");
var React = require("react");
var LanguageSelector = /** @class */ (function (_super) {
    __extends(LanguageSelector, _super);
    function LanguageSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageSelector.prototype.render = function () {
        var _this = this;
        return (<div className={'language-selector bracket ' + (this.props.isActive ? 'language-selector--active' : '')} onMouseEnter={function (_e) { return _this.props.onLanguageHover(_this.props.name); }}>
                <div className='bracket-text'>
                    <div className='language-selector__name'>{this.props.name}</div>
                    <div className='language-selector__fluency'>{this.props.fluency}</div>
                </div>
            </div>);
    };
    return LanguageSelector;
}(React.Component));
exports["default"] = LanguageSelector;
