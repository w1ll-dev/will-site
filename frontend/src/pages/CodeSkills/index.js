import React from "react";
import nodeImage from "../../assets/images/node.png";
import flutterImage from "../../assets/images/flutter.png";
import reactImage from "../../assets/images/react.png";
import {
  Wrapper,
  PageTitle,
  SkillsRow,
  SkillCard,
  SkillTitle,
  SkillAvatar,
  SkillSummary,
} from "./style";
import { text } from "../../assets/text/pt";
const { skills, skillsPageTitle } = text;

const codeSkillsList = [
  {
    skillIcon: reactImage,
    skillTitle: skills.reactjs.title,
    skillSummary: skills.reactjs.summary,
  },
  {
    skillIcon: flutterImage,
    skillTitle: skills.flutter.title,
    skillSummary: skills.flutter.summary,
  },
  {
    skillIcon: nodeImage,
    skillTitle: skills.nodejs.title,
    skillSummary: skills.nodejs.summary,
  },
];

export const CodeSkills = () => {
  return (
    <Wrapper>
      <PageTitle children={skillsPageTitle} />
      <SkillsRow>
        {codeSkillsList.map(({ skillIcon, skillTitle, skillSummary }) => (
          <SkillCard key={Math.random()}>
            <SkillTitle children={skillTitle} />
            <SkillAvatar skillImage={skillIcon} />
            <SkillSummary children={skillSummary} />
          </SkillCard>
        ))}
      </SkillsRow>
    </Wrapper>
  );
};
