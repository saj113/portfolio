import React from 'react';

export const data = {
  experiences: [{
    company: 'Namecheap Inc',
    location: 'Ukraine',
    position: 'Full-Stack Software Engineer',
    startDate: 'Oct 2020',
    endDate: 'Present',
    projectDescription: <span>At namecheap.com, a domain registrar, my main focus was supporting existing functionality, bug fixing, and minor optimizations.<br />In the new project spaceship.com, a product platform for purchasing domains, hosting, and SSL certificates, I worked on expanding the functionality specifically related to domain names.<br />My role involved API design, database work, microservice development, frontend development, and participating in the production deployment process.</span>,
    accomplishments: [
      <span>Developed microservices and micro-frontends to establish highly scalable application architecture, driving $200M of revenue every year using the latest technologies of <strong>.NET C#, Node JS, React JS, AWS, RDB, NoSql</strong>.</span>,
      'Implemented and designed domain business logic, leading to a significant 23% increase in global revenue.',
      'Made strategic technology decisions to drive project success and optimize outcomes.',
      'Coordinated with cross-functional teams to align priorities and collaboratively achieve project goals.',
      'Implemented Continuous Integration/Deployment pipelines, conducted pull requests, code reviews, load/stress testing, and unit/integration testing.',
      'Utilized Scrum and Kanban methodologies for estimating work hours and tracking progress.'
    ]
  }, {
    company: 'Dedicated Lab',
    location: 'Ukraine',
    position: 'Full-Stack Software Engineer',
    startDate: 'Aug 2019',
    endDate: 'Oct 2020',
    projectDescription: <span>In my role as a senior full stack software engineer, I worked on a project using .NET Core for the backend and Vue for the frontend. My responsibilities included breaking down a monolithic application into modules, integrating DDD paradigms, and implementing the CQRS architectural style.<br />I also gained some leadership experience and was responsible for the domain logic and design of multiple bounded contexts.</span>,
    accomplishments: [
      <span>Developed essential back-end and front-end features for comprehensive web application using <strong>.NET C#, Vue JS, CQRS, Sagas, PostgreSQL</strong>.</span>,
      'Divided monolithic application into modular components to align with Domain-Driven Design (DDD) principles.',
      'Implemented Command Query Responsibility Segregation (CQRS) pattern to enhance parallel development by separating queries and commands.',
      'Incorporated Sagas to enable distributed transactions and ensure robustness in application.',
      'Actively contributed to professional growth of team members by sharing knowledge and mentoring.',
      'Built databases and table structures for web applications.'
    ]
  }, {
    company: 'Akvelon (Tideworks Technology)',
    location: 'Ukraine',
    position: '.NET / Java Software Engineer',
    startDate: 'Jun 2014',
    endDate: 'Aug 2019',
    projectDescription: <span>Worked on dynamically controlling container handling equipment in a terminal. I integrated new functionality into a tightly coupled system, performed extensive refactoring, and wrote numerous procedures in Oracle.<br />Subsequently, I transitioned to a project focused on gaining experience in distributed systems. This involved developing microservices using Java and React, applying Domain-Driven Design (DDD) principles, and utilizing Kafka for messaging. Although unfamiliar with these technologies initially, I dedicated myself to learning and studying extensively, making it a highly engaging and enriching experience.</span>,
    accomplishments: [
      <span>Implemented essential back-end functionality for both microservices and monolithic architectures using <strong>.NET C#, Java, Oracle, Spring, Kafka, ActiveMq, IoT</strong>.</span>,
      'Developing applications for the management of automated cranes at container terminals (IoT).',
      'Implemented and utilized custom frameworks that enhance development of integration tests.',
      'Developed and refactored Oracle procedures to enhance performance and maintainability.',
      'Mastered Java Spring, Hibernate, and other related technologies to expand capabilities and contribute to more exciting projects.',
      'Integrated Kafka to enable efficient asynchronous communication among microservices.'
    ]
  }, {
    company: 'Lavasoft',
    location: 'Ukraine',
    position: '.NET Software Engineer',
    startDate: 'Feb 2014',
    endDate: 'Sep 2014',
    accomplishments: [
      <span>Used critical thinking to break down problems, evaluate solutions and make decisions using <strong>.NET, WPF, MVVM</strong>.</span>
    ]
  }, {
    company: 'SMISS',
    location: 'Ukraine',
    position: '.NET Software Engineer',
    startDate: 'Sep 2012',
    endDate: 'Sep 2013',
    accomplishments: [
      <span>Coordinated with other engineers to evaluate and improve software using <strong>.NET, WinForms</strong>.</span>
    ]
  }],
  skills: [{
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
  }],
  socialMediaLinks: [{
    link: 'https://github.com/saj113',
    icon: 'bi-github',
  }, {
    link: 'https://instagram.com/aleksandr.golub.113',
    icon: 'bi-instagram',
  }, {
    link: 'https://www.linkedin.com/in/oleksandr-holub-ua/',
    icon: 'bi-linkedin',
  }, {
    link: 'https://www.facebook.com/aleksander.golub.9/',
    icon: 'bi-facebook',
  }]
}
