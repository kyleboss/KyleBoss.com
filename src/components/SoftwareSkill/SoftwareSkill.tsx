import './SoftwareSkill.css';
import * as React from "react";

interface ISoftwareSkillProps {
    logoUrl: string
    skillName: string
    skillUrl: string;
}

interface ISoftwareSkillState {
}


export default class SoftwareSkill extends React.Component<ISoftwareSkillProps, ISoftwareSkillState> {
    public softwareSkillClassNames() {
        return 'software-skill__logo software-skill__logo--' + this.props.skillName.split(' ')[0].toLowerCase()
    }

    public render() {
        return (
            <a href={this.props.skillUrl} className='software-skill bracket'>
                <span className='bracket-text'>
                    <img src={this.props.logoUrl} className={this.softwareSkillClassNames()} />
                    <div className='software-skill__skill-name'>{this.props.skillName}</div>
                </span>
            </a>
        );
    }
}