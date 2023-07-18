import React, {PropsWithChildren} from 'react';

type SectionProps = {
    title?: string;
} & PropsWithChildren;

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <>
        <h2 className="section-title mb-md-3 mb-sm-2">{title}</h2>
        <div className="section-content">
            {children}
        </div>
    </>
);

export default Section;
