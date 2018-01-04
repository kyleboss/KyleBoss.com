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
require("./SoftwareSkill.css");
var React = require("react");
var SoftwareSkill = /** @class */ (function (_super) {
    __extends(SoftwareSkill, _super);
    function SoftwareSkill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareSkill.prototype.softwareSkillClassNames = function () {
        return 'software-skill__logo software-skill__logo--' + this.props.skillName.split(' ')[0].toLowerCase();
    };
    SoftwareSkill.prototype.render = function () {
        return (<a href={this.props.skillUrl} className='software-skill bracket'>
                <span className='bracket-text'>
                    <img src={this.props.logoUrl} className={this.softwareSkillClassNames()}/>
                    <div className='software-skill__skill-name'>{this.props.skillName}</div>
                </span>
            </a>);
    };
    return SoftwareSkill;
}(React.Component));
exports["default"] = SoftwareSkill;
