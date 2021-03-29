import React from "react";
import { i18n } from '../../translate/i18n';
import { i18nKeys } from "../../constants";
import {
  Wrapper,
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
import {
  githubIcon,
  githubWhiteIcon,
  linkedinIcon,
} from '../../assets'
import { LinkContainer } from "../../components/commom";
import { Contacts } from "../../constants";
import { useTheme } from "../../context/theme";

const { LINKEDIN_URL, GITHUB_URL } = Contacts;

const {
  contacts,
  welcome,
  my_name,
  short_summary,
  about_me_title,
  complete_summary,
} = i18nKeys;

export const HomePage = () => {
  const isMobile = window.innerWidth < 438;
  const { activeTheme } = useTheme();

  return (
    <Wrapper>
      <Welcome children={i18n.t(welcome)} />
      <HomeAvatar />
      <PageContent>
        <MyName children={i18n.t(my_name)} />
        <ShortSummary children={i18n.t(short_summary)} />
        <AboutMeTitle children={i18n.t(about_me_title)} />
        <CompleteSummary children={i18n.t(complete_summary)} />
        {isMobile && (
          <ContactContainer>
            <ContactTitle>{i18n.t(contacts.contactsTitle)}</ContactTitle>
            <ContactRow>
              <LinkContainer href={LINKEDIN_URL}>
                <ContactIcon src={linkedinIcon} />
                <ContactLabel children={i18n.t(contacts.linkedIn)} />
              </LinkContainer>
              <LinkContainer href={GITHUB_URL}>
                <ContactIcon
                  src={activeTheme === "light" ? githubIcon : githubWhiteIcon}
                />
                <ContactLabel children={i18n.t(contacts.github)} />
              </LinkContainer>
            </ContactRow>
          </ContactContainer>
        )}
      </PageContent>
    </Wrapper>
  );
};
