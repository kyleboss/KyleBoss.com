import './JobHistoryNode.css';
import * as React from "react";

interface IJobHistoryNodeProps {
    company: string;
    formerly?: string
    startDate: string;
    endDate: string;
    jobTitle: string;
    companyUrl: string;
}

interface IJobHistoryNodeState {
}


export default class JobHistoryNode extends React.Component<IJobHistoryNodeProps, IJobHistoryNodeState> {
    public logoUrl() {
        var base = 'https://s3-us-west-2.amazonaws.com/kyleboss.com/';
        var fileNameStart = this.props.company.split(' ')[0].toLowerCase();
        var fileNameEnd = '-logo.png'
        return base + fileNameStart + fileNameEnd
    }

    public hexagon() {
        return (<a href={this.props.companyUrl} className='job-history-node--link'>
                    <div className='job-history-node__hexagon'>
                        <img className='job-history-node__hexagon-content' src={this.logoUrl()} />
                        </div>
                </a>);
    }

    public render() {
        return (
            <div className='job-history-node'>
                <div className='job-history-node__top-portion'>
                    <div className='job-history-node__company-name'>{this.props.company}</div>
                    {this.props.formerly &&
                    <div className='job-history-node__former-name'>{'Formerly ' + this.props.formerly}</div>
                    }
                </div>
                {this.hexagon()}
                <div className='job-history-node__bottom-portion'>
                    <div className='job-history-node__job-title'>{this.props.jobTitle}</div>
                    <div className='job-history-node__time-period'>{this.props.startDate} - {this.props.endDate}</div>
                </div>
            </div>
        );
    }
}