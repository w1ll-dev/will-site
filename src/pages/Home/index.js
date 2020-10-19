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
  ContactIcon,
} from "./style";
import githubIcon from "../../assets/icons/github.svg";
import githubWhiteIcon from "../../assets/images/github-white.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import { text } from "../../assets/text/pt";
import { LinkContainer } from "../../components/commom";
import { Contacts} from "../../contants";
import { useTheme } from "../../context/theme";

const {LINKEDIN_URL, GITHUB_URL} = Contacts

export const HomePage = () => {
  const isMobile = window.innerWidth < 1200;
  const { activeTheme } = useTheme();
  return (
    <Wrapper>
      <Welcome children={text.welcome} />
      <PageContent>
        <HomeAvatar />
        <MyName children={text.my_name} />
        <ShortSummary children={text.short_summary} />
        <AboutMeTitle children={text.about_me_title} />
        <CompleteSummary children={text.complete_summary} />
        {isMobile && (
          <ContactContainer>
            <ContactTitle>Perfis</ContactTitle>
            <ContactRow>
              <LinkContainer href={LINKEDIN_URL}>
                <ContactIcon src={linkedinIcon} />
              </LinkContainer>
              <LinkContainer href={GITHUB_URL}>
                <ContactIcon src={activeTheme === "light" ? githubIcon : githubWhiteIcon} />
              </LinkContainer>
            </ContactRow>
          </ContactContainer>
        )}
      </PageContent>
    </Wrapper>
  );
};
