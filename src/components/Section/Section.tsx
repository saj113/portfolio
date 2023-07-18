import React, {PropsWithChildren} from 'react';

type SectionProps = {
    title: string;
} & PropsWithChildren;

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className="text-white">
        <h1 className="section-title mb-md-3 mb-sm-2">{title}</h1>
        <div className="section-content">
            {children}
        </div>
    </div>
);

export default Section;
