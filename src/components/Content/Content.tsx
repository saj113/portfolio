import React from 'react';
import AboutSection from './Sections/AboutSection/AboutSection';
import ExperienceSection from './Sections/ExperienceSection/ExperienceSection';
import SkillsSection from './Sections/SkillsSection/SkillsSection';

const Content: React.FC = () => (
    <>
        <div className="mb-5">
            <AboutSection />
        </div>
        <div className="mb-5">
            <ExperienceSection />
        </div>
        <div className="mb-5">
            <SkillsSection />
        </div>
    </>
);

export default Content;
