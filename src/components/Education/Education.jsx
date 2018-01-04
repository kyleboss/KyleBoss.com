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
require("./Education.css");
var React = require("react");
var Education = /** @class */ (function (_super) {
    __extends(Education, _super);
    function Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Education.prototype.educationLogo = function () {
        return (<img className='education__logo-img' src='http://clipground.com/images/berkeley-clipart-6.jpg'/>);
    };
    Education.prototype.render = function () {
        return (<div className='education'>
                <div className='education__content'>
                    <div className='education__title'>Places I Studied At</div>
                    <div className='education__row'>
                        <div className='education__logo-container'>{this.educationLogo()}</div>
                        <div className='education__descriptors'>
                            <div className='education__institution'>
                                <div className='education__name'>UC Berkeley</div>
                                <div className='education__date'>August 2012 - May 2016</div>
                            </div>
                            <div className='education__degree'>Bachelors in Computer Science</div>
                        </div>
                    </div>
                </div>
            </div>);
    };
    return Education;
}(React.Component));
exports["default"] = Education;
