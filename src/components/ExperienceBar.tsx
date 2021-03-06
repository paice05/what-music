import React from "react";

import "../styles/components/ExperienceBar.module.css";

import { useChallenges } from "../contexts/challenges";

interface Props {}

const ExperienceBar: React.FC<Props> = (props) => {
    const { currentExperience, experienceToNextLevel } = useChallenges();

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className="current-experience" style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
};

export default ExperienceBar;
