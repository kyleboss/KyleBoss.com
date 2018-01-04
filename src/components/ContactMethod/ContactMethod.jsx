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
require("./ContactMethod.css");
var React = require("react");
var ContactMethod = /** @class */ (function (_super) {
    __extends(ContactMethod, _super);
    function ContactMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactMethod.prototype.render = function () {
        return (<div className='contact-method'>
                <img className='contact-method__icon' src={'https://s3-us-west-2.amazonaws.com/kyleboss.com/' + this.props.iconName + '.png'}/>
                <div className='contact-method__text'><a href={this.props.contactUrl}>{this.props.textValue}</a></div>
            </div>);
    };
    return ContactMethod;
}(React.Component));
exports["default"] = ContactMethod;
