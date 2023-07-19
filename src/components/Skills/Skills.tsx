import React from 'react';
import Section from '../Section/Section';
import {useAppContext} from '../../context/AppContext';
import SkillInfo from '../../models/SkillInfo';

const SkillItem: React.FC<SkillInfo> = ({type, technologies}) => (
    <div>
        <span><strong>{type}:</strong> {technologies}</span>
    </div>
);

const Skills: React.FC = () => {
    const { skills } = useAppContext();
    return (
        <Section id="section-skills" title={'Skills'}>
            {skills.map((skillInfo, index) => (
                <SkillItem key={index} {...skillInfo} />
            ))}
        </Section>
    );
}

export default Skills;
