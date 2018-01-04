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
require("./LanguageMap.css");
var React = require("react");
var LanguageMap = /** @class */ (function (_super) {
    __extends(LanguageMap, _super);
    function LanguageMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageMap.prototype.render = function () {
        return (<div style={{ backgroundImage: 'url("' + 'https://s3-us-west-2.amazonaws.com/kyleboss.com/' + this.props.name + '-map.png")' }} className={'language-map ' + (this.props.isActive ? 'language-map--active' : '')}/>);
    };
    return LanguageMap;
}(React.Component));
exports["default"] = LanguageMap;
