import React from "react";
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
import { useTheme } from "../../context/theme";
import { i18n } from '../../translate/i18n';
import { i18nKeys } from "../../constants";
import { jobsIcons } from './icons'
const {
  experiences_page_title,
  jobs
} = i18nKeys;

export const ExperiencesPage = () => {
  const { activeTheme } = useTheme()
  const currentIcons = activeTheme === "dark" ? "light" : "dark"

  return (
    <Wrapper>{
      jobs.map((job, jobIndex) =>
        <>
          <ResumeLastJob>
            {jobIndex === 0 && <PageTitle children={i18n.t(experiences_page_title)} />}
            <LastJobTitle children={i18n.t(job.title)} />
            <Summary children={i18n.t(job.resume)} />
          </ResumeLastJob>
          <ResponsabilitiesContainer>
            {job.job_responsabilities.map(({ title, summary }, responsabilityIndex) => (
              <JobResposabilityContainer key={responsabilityIndex}>
                <JobResposabilityTitle children={i18n.t(title)} />
                <ResponsabilityIcon src={jobsIcons[jobIndex][responsabilityIndex][currentIcons]} />
                <Summary children={i18n.t(summary)} />
              </JobResposabilityContainer>
            ))}
          </ResponsabilitiesContainer>
        </>
      )}</Wrapper>
  );
};
