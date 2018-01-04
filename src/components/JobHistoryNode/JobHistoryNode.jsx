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
require("./JobHistoryNode.css");
var React = require("react");
var JobHistoryNode = /** @class */ (function (_super) {
    __extends(JobHistoryNode, _super);
    function JobHistoryNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JobHistoryNode.prototype.logoUrl = function () {
        var base = 'https://s3-us-west-2.amazonaws.com/kyleboss.com/';
        var fileNameStart = this.props.company.split(' ')[0].toLowerCase();
        var fileNameEnd = '-logo.png';
        return base + fileNameStart + fileNameEnd;
    };
    JobHistoryNode.prototype.hexagon = function () {
        return (<a href={this.props.companyUrl} className='job-history-node--link'>
                    <div className='job-history-node__hexagon'>
                        <img className='job-history-node__hexagon-content' src={this.logoUrl()}/>
                        </div>
                </a>);
    };
    JobHistoryNode.prototype.render = function () {
        return (<div className='job-history-node'>
                <div className='job-history-node__top-portion'>
                    <div className='job-history-node__company-name'>{this.props.company}</div>
                    {this.props.formerly &&
            <div className='job-history-node__former-name'>{'Formerly ' + this.props.formerly}</div>}
                </div>
                {this.hexagon()}
                <div className='job-history-node__bottom-portion'>
                    <div className='job-history-node__job-title'>{this.props.jobTitle}</div>
                    <div className='job-history-node__time-period'>{this.props.startDate} - {this.props.endDate}</div>
                </div>
            </div>);
    };
    return JobHistoryNode;
}(React.Component));
exports["default"] = JobHistoryNode;
