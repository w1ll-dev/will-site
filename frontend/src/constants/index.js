import { 
  flutterDevDarkIcon,
  reactDevDarkIcon,
  codeReviewDarkIcon,
  kidsLightIcon,
  maintenceLightIcon,
  flutterDevLightIcon,
  reactDevLightIcon,
  codeReviewLightIcon,
  maintenceDarkIcon,
  kidsDarkIcon
} from '../assets'

export const RoutesENUM = {
  HOME: "/home",
  BLOG: "/blog",
  EXPERIENCE: "/experience",
  SETTINGS: "/settings",
  CODE_SKILLS: "/code-skills",
};

export const Contacts = {
  GITHUB_URL: "https://github.com/w1ll-dev/",
  LINKEDIN_URL: "https://www.linkedin.com/in/will-m%C3%A1rcio-84a082192/",
};

export const Idiom = {
  storageKey: "i18nextLng",
  ptKey: "pt-BR",
  enKey: "en-US"
}

export const i18nKeys = {
  welcome: "welcome",
  about_me_title: "about_me_title",
  my_name: "my_name",
  short_summary: "short_summary",
  complete_summary: "complete_summary",
  experiences_page_title: "experiences_page_title",
  skills_page_title: "skills_page_title",
  theme_title: "theme_title",
  language:   "language",
  skills: {
    flutter: {
      title: "skills.flutter.title",
      summary: "skills.flutter.summary",
    },
    reactjs: {
      title: "skills.reactjs.title",
      summary: "skills.reactjs.summary",
    },
    nodejs: {
      title: "skills.nodejs.title",
      summary: "skills.nodejs.summary",
    },
  },
  settings_title: "settings_title",
  contacts: {
    linkedIn: "contacts.linkedIn",
    github: "contacts.github",
  },
  jobs: [
    {
      title: "jobs.0.title",
      resume: "jobs.0.resume",
      job_responsabilities: [
        {
          title: "jobs.0.job_responsabilities.0.title",
          summary: "jobs.0.job_responsabilities.0.summary",
        },
        {
          title: "jobs.0.job_responsabilities.1.title",
          summary: "jobs.0.job_responsabilities.1.summary",
        },
        {
          title: "jobs.0.job_responsabilities.2.title",
          summary: "jobs.0.job_responsabilities.2.summary",
        },
      ],
    },
    {
      title: "jobs.1.title",
      resume: "jobs.1.resume",
      job_responsabilities: [
        {
          title: "jobs.1.job_responsabilities.0.title",
          summary: "jobs.1.job_responsabilities.0.summary",
        },
        {
          title: "jobs.1.job_responsabilities.1.title",
          summary: "jobs.1.job_responsabilities.1.summary",
        },
      ],
    },
  ],
};
