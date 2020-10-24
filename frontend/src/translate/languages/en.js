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

  last_job,
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
      last_job: {
        title: last_job.title,
        resume: last_job.resume,
        job_responsabilities: 
        [
          {
            title: last_job.job_responsabilities[0].title,
            summary: last_job.job_responsabilities[0].summary,
          },
          {
            title: last_job.job_responsabilities[1].title,
            summary: last_job.job_responsabilities[1].summary,
          },
          {
            title: last_job.job_responsabilities[2].title,
            summary: last_job.job_responsabilities[2].summary,
          },
        ]
      },
    },
  },
};
