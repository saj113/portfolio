import React from 'react';
import SectionContainer from '../SectionContainer';
import {useAppContext} from '../../../../context/AppContext';
import SkillInfo from '../../../../models/SkillInfo';

const SkillItem: React.FC<SkillInfo> = ({type, technologies}) => (
    <div>
        <span><strong>{type}:</strong> {technologies}</span>
    </div>
);

const SkillsSection: React.FC = () => {
    const { skills } = useAppContext();
    return (
        <SectionContainer id="section-skills" title={'Skills'}>
            {skills.map((skillInfo, index) => (
                <SkillItem key={index} {...skillInfo} />
            ))}
        </SectionContainer>
    );
}

export default SkillsSection;
