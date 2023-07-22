import React from 'react';
import AboutSection from './Sections/AboutSection';
import ExperienceSection from './Sections/ExperienceSection';
import SkillsSection from './Sections/SkillsSection';
import LeetCodeSection from './Sections/LeetCodeSection';
import EducationSection from './Sections/EducationSection';
import GameDevSection from "./Sections/GameDevSection";

const Content: React.FC = () => (
    <>
        <AboutSection />
        <ExperienceSection />
        <GameDevSection />
        <SkillsSection />
        <LeetCodeSection />
        <EducationSection />
    </>
);

export default Content;
