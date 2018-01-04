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
require("./PowerStatement.css");
var React = require("react");
var PowerStatement = /** @class */ (function (_super) {
    __extends(PowerStatement, _super);
    function PowerStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerStatement.prototype.render = function () {
        return (<div className='power-statement'>
                <div className='power-statement__text'>
                    As a leader, public speaker, and entrepreneur, Kyle is a positive force in the software engineering
                    arena. With his creativity and anything-is-possible attitude, anything <strong>is</strong> possible.
                </div>
            </div>);
    };
    return PowerStatement;
}(React.Component));
exports["default"] = PowerStatement;
