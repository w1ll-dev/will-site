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
} from "./style";
import { text } from "../../assets/text/pt";

export const HomePage = () => {
  return (
    <Wrapper>
      <Welcome children={text.welcome} />
      <PageContent>
        <HomeAvatar />
        <MyName children={text.my_name} />
        <ShortSummary children={text.short_summary} />
        <AboutMeTitle children={text.about_me_title} />
        <CompleteSummary children={text.complete_summary} />
      </PageContent>
    </Wrapper>
  );
};
