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
require("./SoftwareSkills.css");
var React = require("react");
var SoftwareSkill_1 = require("../SoftwareSkill/SoftwareSkill");
var SoftwareSkillsHeader_1 = require("../SoftwareSkillsHeader/SoftwareSkillsHeader");
var SoftwareSkills = /** @class */ (function (_super) {
    __extends(SoftwareSkills, _super);
    function SoftwareSkills() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareSkills.prototype.render = function () {
        return (<div className='software-skills'>
                <SoftwareSkillsHeader_1.default />
                <div className='software-skills__content'>
                    <SoftwareSkill_1.default skillUrl='https://www.linkedin.com/pulse/ruby-rails-one-most-demand-programming-languages-2016-amr-esam' logoUrl='https://s3-us-west-2.amazonaws.com/kyleboss.com/ruby-logo.png' skillName='Ruby on Rails'/>
                    <SoftwareSkill_1.default skillUrl='https://stackoverflow.blog/2017/03/09/developer-hiring-trends-2017/' logoUrl='https://s3-us-west-2.amazonaws.com/kyleboss.com/react-logo.png' skillName='React'/>
                    <SoftwareSkill_1.default skillUrl='https://yourstory.com/read/aa2afff746-why-is-android-apps-development-important-for-your-mobile-strategy-' logoUrl='https://s3-us-west-2.amazonaws.com/kyleboss.com/android-logo.png' skillName='Android'/>
                </div>
            </div>);
    };
    return SoftwareSkills;
}(React.Component));
exports["default"] = SoftwareSkills;
