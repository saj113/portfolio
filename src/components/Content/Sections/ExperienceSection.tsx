import React from 'react';
import SectionContainer from './SectionContainer';
import {Col, Row} from 'react-bootstrap';
import ExperienceInfo from '../../../models/ExperienceInfo';
import {useAppContext} from '../../../context/AppContext';

const ExperienceItem: React.FC<ExperienceInfo> = ({company, location, position, startDate, endDate, projectDescription, accomplishments}) => (
  <>
    <Row className="justify-content-between align-items-center">
      <Col sm="auto"><h4>{company}</h4></Col>
      <Col sm="auto"><span>{startDate} - {endDate}</span></Col>
    </Row>
    <Row className="justify-content-between align-items-center">
      <Col sm="auto"><em>{position}</em></Col>
      <Col sm="auto"><em>{location}</em></Col>
    </Row>
    { projectDescription && (<p>{projectDescription}</p>) }
    {accomplishments.length > 0 && (
      <ul>
        {accomplishments.map((accomplishment, key) => (
          <li key={key}>{accomplishment}</li>
        ))}
      </ul>
    )}
  </>
);

const ExperienceSection: React.FC = () => {
  const {experiences} = useAppContext();
  return (
    <SectionContainer id="section-experience" title={'Experience'}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} {...experience} />
      ))}
    </SectionContainer>
  );
};

export default ExperienceSection;
