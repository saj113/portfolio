import React, {PropsWithChildren} from 'react';

type SectionProps = {
    id: string;
    title?: string;
} & PropsWithChildren;

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <div id={id}>
        <h2 className="section-title mb-md-3 mb-sm-2">{title}</h2>
        <div className="section-content">
            {children}
        </div>
    </div>
);

export default Section;
