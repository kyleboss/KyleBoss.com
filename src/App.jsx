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
require("./App.css");
var React = require("react");
var react_1 = require("react");
var Hero_1 = require("./components/Hero/Hero");
var PowerStatement_1 = require("./components/PowerStatement/PowerStatement");
var SoftwareSkills_1 = require("./components/SoftwareSkills/SoftwareSkills");
var JobHistory_1 = require("./components/JobHistory/JobHistory");
var Languages_1 = require("./components/Languages/Languages");
var Education_1 = require("./components/Education/Education");
var react_heap_1 = require("react-heap");
var logo = require("./logo.svg");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<div className="App">
        {process.env.NODE_ENV === 'production' && <react_heap_1.default appId="113684961"/>}
        {process.env.NODE_ENV === 'development' && <react_heap_1.default appId="3493464632"/>}
        <Hero_1.default />
        <PowerStatement_1.default />
        <SoftwareSkills_1.default />
        <JobHistory_1.default />
        <Languages_1.default />
        <Education_1.default />
      </div>);
    };
    return App;
}(react_1.Component));
exports["default"] = App;
