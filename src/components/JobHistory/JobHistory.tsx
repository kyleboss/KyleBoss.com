import './JobHistory.css';
import * as React from "react";
import JobHistoryNode from "../JobHistoryNode/JobHistoryNode";

interface IJobHistoryProps {
}

interface IJobHistoryState {
}

export default class JobHistory extends React.Component<IJobHistoryProps, IJobHistoryState> {
    public jobs() {
        return [
            { company: 'OSIsoft', startDate: 'May 2013', endDate: 'Aug 2013', jobTitle: 'SWE Intern', formerly: null,
                companyUrl: 'http://www.osisoft.com' },
            { company: 'Spokeo', startDate: 'May 2014', endDate: 'Aug 2014', jobTitle: 'SWE Intern', formerly: null,
                companyUrl: 'http://www.spokeo.com'},
            { company: 'Adobe', startDate: 'May 2015', endDate: 'Aug 2015', jobTitle: 'SWE Intern',
                formerly: 'Tubemogul', companyUrl: 'http://www.tubemogul.com' },
            { company: 'Adobe', startDate: 'Aug 2015', endDate: 'Dec 2015', jobTitle: 'Software Engineer',
                formerly: 'Tubemogul', companyUrl: 'http://www.tubemogul.com' },
            { company: 'Spokeo', startDate: 'May 2016', endDate: 'Present', jobTitle: 'Software Engineer',
                formerly: null, companyUrl: 'http://www.spokeo.com' }
        ]
    }

    public jobHistoryNodes() {
        return this.jobs().map(function(object) {
            return <JobHistoryNode
                company={object.company}
                startDate={object.startDate}
                endDate={object.endDate}
                jobTitle={object.jobTitle}
                formerly={object.formerly}
                companyUrl={object.companyUrl}
                key={object.company + '-' + object.startDate}
            />
        });
    }

    public render() {
        return (
            <div className='job-history'>
                <div className='job-history__content'>
                    <div className='job-history__title'>Companies I've worked for</div>
                    <div className='job-history__timeline'>{this.jobHistoryNodes()}</div>
                </div>
            </div>
        );
    }
}