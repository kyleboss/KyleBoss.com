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
require("./JobHistory.css");
var React = require("react");
var JobHistoryNode_1 = require("../JobHistoryNode/JobHistoryNode");
var JobHistory = /** @class */ (function (_super) {
    __extends(JobHistory, _super);
    function JobHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JobHistory.prototype.jobs = function () {
        return [
            { company: 'OSIsoft', startDate: 'May 2013', endDate: 'Aug 2013', jobTitle: 'SWE Intern', formerly: null,
                companyUrl: 'http://www.osisoft.com' },
            { company: 'Spokeo', startDate: 'May 2014', endDate: 'Aug 2014', jobTitle: 'SWE Intern', formerly: null,
                companyUrl: 'http://www.spokeo.com' },
            { company: 'Adobe', startDate: 'May 2015', endDate: 'Dec 2015', jobTitle: 'SWE Intern',
                formerly: 'Tubemogul', companyUrl: 'http://www.tubemogul.com' },
            { company: 'Spokeo', startDate: 'May 2016', endDate: 'Mar 2018', jobTitle: 'Software Engineer',
                formerly: null, companyUrl: 'http://www.spokeo.com' },
            { company: 'JOANY', startDate: 'Mar 2018', endDate: 'Jul 2018', jobTitle: 'Software Engineer',
                formerly: null, companyUrl: 'http://www.joany.com' },
        ];
    };
    JobHistory.prototype.jobHistoryNodes = function () {
        return this.jobs().map(function (object) {
            return <JobHistoryNode_1.default company={object.company} startDate={object.startDate} endDate={object.endDate} jobTitle={object.jobTitle} formerly={object.formerly} companyUrl={object.companyUrl} key={object.company + '-' + object.startDate}/>;
        });
    };
    JobHistory.prototype.render = function () {
        return (<div className='job-history'>
                <div className='job-history__content'>
                    <div className='job-history__title'>Companies I've worked for</div>
                    <div className='job-history__timeline'>{this.jobHistoryNodes()}</div>
                </div>
            </div>);
    };
    return JobHistory;
}(React.Component));
exports["default"] = JobHistory;
