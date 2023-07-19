import React from 'react';
import Section from '../Section/Section';

type SkillInfo = {
    type: string;
    technologies: string;
};

const skillsInfo: SkillInfo[] = [{
    type: 'Languages',
    technologies: '.NET C#, Java, Javascript',
}, {
    type: 'Frameworks',
    technologies: 'ASP.NET Core Web API, EF, Unity3d, NodeJS, ReactJS (Redux, MobX), VueJS, jQuery, TypeScript, Jest',
}, {
    type: 'Databases',
    technologies: 'Oracle, PostgreSQL, MS SQL, Redis, MongoDB',
}, {
    type: 'Cloud',
    technologies: 'AWS',
}, {
    type: 'CI/CD',
    technologies: 'Docker, Jenkins, GitLab CI/CD, Octopus Deploy, Vault',
}, {
    type: 'Architectures',
    technologies: 'REST, SOA, DDD, Distributed Systems, Microservices, Micro-frontends, MVVM, CQRS',
}, {
    type: 'Apache',
    technologies: 'ActiveMQ, Kafka',
}];

const SkillItem: React.FC<SkillInfo> = ({type, technologies}) => (
    <div>
        <span><strong>{type}:</strong> {technologies}</span>
    </div>
);

const Skills: React.FC = () => (
    <Section id="section-skills" title={'Skills'}>
        {skillsInfo.map((skillInfo, index) => (
            <SkillItem key={index} {...skillInfo} />
        ))}
    </Section>
);

export default Skills;
