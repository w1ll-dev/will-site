import React from "react";
import {
  Wrapper,
  PageResume,
  Welcome,
  HomeAvatar,
  MyName,
  AboutMeTitle,
  PageContent,
  ShortSummary,
  CompleteSummary,
  ContactContainer,
  ContactTitle,
  ContactRow,
  ContactLabel,
  ContactIcon,
} from "./style";
import githubIcon from "../../assets/icons/github.svg";
import githubWhiteIcon from "../../assets/images/github-white.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import { text } from "../../assets/text/pt";
import { LinkContainer } from "../../components/commom";
import { Contacts } from "../../contants";
import { useTheme } from "../../context/theme";

const { LINKEDIN_URL, GITHUB_URL } = Contacts;

const {
  contacts,
  welcome,
  my_name,
  short_summary,
  about_me_title,
  complete_summary,
} = text;

export const HomePage = () => {
  const isMobile = window.innerWidth < 1200;
  const { activeTheme } = useTheme();
  return (
    <Wrapper>
      <Welcome children={welcome} />
      <HomeAvatar />
      <PageContent>
        <MyName children={my_name} />
        <ShortSummary children={short_summary} />
        <AboutMeTitle children={about_me_title} />
        <CompleteSummary children={complete_summary} />
        {isMobile && (
          <ContactContainer>
            <ContactTitle>Perfis</ContactTitle>
            <ContactRow>
              <LinkContainer href={LINKEDIN_URL}>
                <ContactIcon src={linkedinIcon} />
                <ContactLabel children={contacts.linkedIn} />
              </LinkContainer>
              <LinkContainer href={GITHUB_URL}>
                <ContactIcon
                  src={activeTheme === "light" ? githubIcon : githubWhiteIcon}
                />
                <ContactLabel children={contacts.github} />
              </LinkContainer>
            </ContactRow>
          </ContactContainer>
        )}
      </PageContent>
    </Wrapper>
  );
};
