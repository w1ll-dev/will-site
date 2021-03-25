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
import { i18n } from '../../translate/i18n';
import { i18nKeys } from "../../constants";
const { skills, skills_page_title } = i18nKeys;

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
      <PageTitle children={i18n.t(skills_page_title)} />
      <SkillsRow>
        {codeSkillsList.map(({ skillIcon, skillTitle, skillSummary }) => (
          <SkillCard key={Math.random()}>
            <SkillTitle children={i18n.t(skillTitle)} />
            <SkillAvatar skillImage={skillIcon} />
            <SkillSummary children={i18n.t(skillSummary)} />
          </SkillCard>
        ))}
      </SkillsRow>
    </Wrapper>
  );
};
