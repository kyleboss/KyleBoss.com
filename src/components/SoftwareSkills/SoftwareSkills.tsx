import './SoftwareSkills.css';
import * as React from "react";
import SoftwareSkill from "../SoftwareSkill/SoftwareSkill";
import SoftwareSkillsHeader from "../SoftwareSkillsHeader/SoftwareSkillsHeader";

interface ISoftwareSkillsProps {
}

interface ISoftwareSkillsState {
}


export default class SoftwareSkills extends React.Component<ISoftwareSkillsProps, ISoftwareSkillsState> {
    public render() {
        return (
            <div className='software-skills'>
                <SoftwareSkillsHeader/>
                <div className='software-skills__content'>
                    <SoftwareSkill
                        skillUrl='https://www.linkedin.com/pulse/ruby-rails-one-most-demand-programming-languages-2016-amr-esam'
                        logoUrl='https://s3-us-west-2.amazonaws.com/kyleboss.com/ruby-logo.png'
                        skillName='Ruby on Rails' />
                    <SoftwareSkill
                        skillUrl='https://stackoverflow.blog/2017/03/09/developer-hiring-trends-2017/'
                        logoUrl='https://s3-us-west-2.amazonaws.com/kyleboss.com/react-logo.png'
                        skillName='React' />
                    <SoftwareSkill
                        skillUrl='https://yourstory.com/read/aa2afff746-why-is-android-apps-development-important-for-your-mobile-strategy-'
                        logoUrl='https://s3-us-west-2.amazonaws.com/kyleboss.com/android-logo.png'
                        skillName='Android' />
                </div>
            </div>
        );
    }
}