import * as React from 'react';
import ExperienceInfo from '../models/ExperienceInfo';
import SkillInfo from '../models/SkillInfo';
import SocialMediaLink from '../models/SocialMediaLink';

interface AppContextValue {
    experiences: ExperienceInfo[];
    skills: SkillInfo[];
    socialMediaLinks: SocialMediaLink[];
}

const AppContext = React.createContext({} as AppContextValue);
export const AppContextProvider = AppContext.Provider;
export const useAppContext = (): AppContextValue => React.useContext<AppContextValue>(AppContext);
