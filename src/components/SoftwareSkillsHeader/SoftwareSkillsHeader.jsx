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
require("./SoftwareSkillsHeader.css");
var React = require("react");
var SoftwareSkillsHeader = /** @class */ (function (_super) {
    __extends(SoftwareSkillsHeader, _super);
    function SoftwareSkillsHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareSkillsHeader.prototype.render = function () {
        return (<div className='software-skills-header'>
                <div className='software-skills-header__title'>Languages I Use</div>
                <div className='software-skills-header__subtitle'>
                    To succeed in today's fast-paced industry, it's vital to learn and use the most modern technologies.
                    These are a few languages that I've used to help create products that move the world.
                </div>
            </div>);
    };
    return SoftwareSkillsHeader;
}(React.Component));
exports["default"] = SoftwareSkillsHeader;
