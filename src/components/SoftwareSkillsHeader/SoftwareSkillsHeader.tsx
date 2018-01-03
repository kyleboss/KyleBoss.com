import './SoftwareSkillsHeader.css';
import * as React from "react";

interface ISoftwareSkillsHeaderProps {
}

interface ISoftwareSkillsHeaderState {
}


export default class SoftwareSkillsHeader extends React.Component<ISoftwareSkillsHeaderProps,
    ISoftwareSkillsHeaderState> {
    public render() {
        return (
            <div className='software-skills-header'>
                <div className='software-skills-header__title'>Languages I Use</div>
                <div className='software-skills-header__subtitle'>
                    To succeed in today's fast-paced industry, it's vital to learn and use the most modern technologies.
                    These are a few languages that I've used to help create products that move the world.
                </div>
            </div>
        );
    }
}