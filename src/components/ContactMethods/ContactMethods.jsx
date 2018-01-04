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
require("./ContactMethods.css");
var React = require("react");
var ContactMethod_1 = require("../ContactMethod/ContactMethod");
var ContactMethods = /** @class */ (function (_super) {
    __extends(ContactMethods, _super);
    function ContactMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactMethods.prototype.render = function () {
        return (<div className='hero__contact-methods'>
                <ContactMethod_1.default iconName='github' textValue='kyleboss' contactUrl='http://github.com/kyleboss'/>
                <ContactMethod_1.default iconName='linkedin' textValue='kyleboss' contactUrl='https://linkedin.com/in/kyleboss'/>
                <ContactMethod_1.default iconName='twitter' textValue='@likeakyleboss' contactUrl='https://twitter.com/likeakyleboss'/>
                <ContactMethod_1.default iconName='email' textValue='kyle@kyleboss.com' contactUrl='mailto:kyle@kyleboss.com'/>
            </div>);
    };
    return ContactMethods;
}(React.Component));
exports["default"] = ContactMethods;
