import React from "react";
import codeReviewLightIcon from "../../assets/icons/color-icons/light/code-review.svg";
import flutterDevLightIcon from "../../assets/icons/color-icons/light/flutter-dev.svg";
import reactDevLightIcon from "../../assets/icons/color-icons/light/react-dev.svg";
import codeReviewDarkIcon from "../../assets/icons/color-icons/dark/code-review.svg";
import flutterDevDarkIcon from "../../assets/icons/color-icons/dark/flutter-dev.svg";
import reactDevDarkIcon from "../../assets/icons/color-icons/dark/react-dev.svg";
import {
  Wrapper,
  PageTitle,
  LastJobTitle,
  Summary,
  JobResposabilityContainer,
  JobResposabilityTitle,
  ResponsabilitiesContainer,
  ResumeLastJob,
  ResponsabilityIcon,
} from "./style";
import { text } from "../../assets/text/pt";
import { useTheme } from "../../context/theme";
import { i18n } from '../../translate/i18n';
import { i18nKeys } from "../../contants";

const {
  experiences_page_title,
  last_job,
} = i18nKeys;

const darkIcons = [
  flutterDevDarkIcon,
  reactDevDarkIcon, 
  codeReviewDarkIcon, 
];
const lightIcons = [
  flutterDevLightIcon,
  reactDevLightIcon,
  codeReviewLightIcon,
];

export const ExperiencesPage = () => {
  const {activeTheme} = useTheme()
  const currentIcons = activeTheme === "dark" ? lightIcons : darkIcons

  return (
    <Wrapper>
      <ResumeLastJob>
        <PageTitle children={i18n.t(experiences_page_title)} />
        <LastJobTitle children={i18n.t(last_job.title)} />
        <Summary children={i18n.t(last_job.resume)} />
      </ResumeLastJob>
      <ResponsabilitiesContainer>
        {last_job.job_responsabilities.map(({title, summary}, index) => (
          <JobResposabilityContainer key={index}>
            <JobResposabilityTitle children={i18n.t(title)} />
            <ResponsabilityIcon src={currentIcons[index]} />
            <Summary children={i18n.t(summary)} />
          </JobResposabilityContainer>
        ))}
      </ResponsabilitiesContainer>
    </Wrapper>
  );
};
