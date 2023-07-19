import {ReactNode} from 'react';

type ExperienceInfo = {
    company: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    projectDescription?: string | ReactNode;
    accomplishments: (string | ReactNode)[];
};

export default ExperienceInfo;
