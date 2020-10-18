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

const { lastJob } = text;

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
        <PageTitle children={text.experiencesPageTitle} />
        <LastJobTitle children={lastJob.title} />
        <Summary children={lastJob.resume} />
      </ResumeLastJob>
      <ResponsabilitiesContainer>
        {lastJob.jobResposabilities.map(({ icon, title, summary }, index) => (
          <JobResposabilityContainer key={Math.random()}>
            <JobResposabilityTitle children={title} />
            <ResponsabilityIcon src={currentIcons[index]} />
            <Summary children={summary} />
          </JobResposabilityContainer>
        ))}
      </ResponsabilitiesContainer>
    </Wrapper>
  );
};
