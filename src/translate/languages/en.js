import en from "../data/en.json";
const {
  welcome,
  about_me_title,
  my_name,
  short_summary,
  complete_summary,

  experiences_page_title,
  skills_page_title,

  theme_title,
  language,
  settings_title,
  contacts,

  skills,

  jobs
} = en;

const { flutter, reactjs, nodejs } = skills;

export const enText = {
  en: {
    translations: {
      welcome,
      about_me_title,
      my_name,
      short_summary,
      complete_summary,
      theme_title,
      language,
      experiences_page_title,
      skills_page_title,

      settings_title,
      contacts: {
        linkedIn: contacts.linkedIn,
        github: contacts.github,
      },
      skills: {
        flutter: {
          title: flutter.title,
          summary: flutter.summary,
        },
        reactjs: {
          title: reactjs.title,
          summary: reactjs.summary,
        },
        nodejs: {
          title: nodejs.title,
          summary: nodejs.summary,
        },
      },
      jobs: [
        {
          title: jobs[0].title,
          resume: jobs[0].resume,
          job_responsabilities: [
            {
              title: jobs[0].job_responsabilities[0].title,
              summary: jobs[0].job_responsabilities[0].summary,
            },
            {
              title: jobs[0].job_responsabilities[1].title,
              summary: jobs[0].job_responsabilities[1].summary,
            },
            {
              title: jobs[0].job_responsabilities[2].title,
              summary: jobs[0].job_responsabilities[2].summary,
            },
          ]
        },
        {
          title: jobs[1].title,
          resume: jobs[1].resume,
          job_responsabilities: [
            {
              title: jobs[1].job_responsabilities[0].title,
              summary: jobs[1].job_responsabilities[0].summary,
            },
            {
              title: jobs[1].job_responsabilities[1].title,
              summary: jobs[1].job_responsabilities[1].summary,
            },
          ]
        }
      ],
    },
  },
};
