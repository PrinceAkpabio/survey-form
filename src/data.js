const date = new Date().getMilliseconds();

export const form = [{
  title:
    "Ph.D Seminar Research Audience Survey Questionnaire: Looking at the FRCN (Radio Nigeria) slogan – Uplifting the people and uniting the nation: Are these promises being met?",
  intro: [
    "Dear Respondent, the researcher is a Ph.D. student at the Department of Mass Communication, Enugu State University of Technology.  This is to request your kind responses to the questions that follow, which have been raised to address the research topic – Looking at the FRCN (Radio Nigeria) slogan – Uplifting the people and uniting the nation: Are these promises being met?",

    "The results of the study shall be instructive for media policy makers and the management of FRCN.",

    "Please note that there are no right or wrong answers to any of these questions, as no marks will be awarded. So be honest in responding to the questions. The responses will be treated with utmost confidentiality.",

    "You may please use the contact information below, if necessary.",
  ],
  input: [
    { id: 1 + date, name: "name", type: "text", label: "Full Name" },
    { id: 2 + date, name: "age", type: "text", label: "Age" },
    {
      id: 3 + date,
      name: "residence",
      type: "text",
      label: "Country/State",
    },
    {
      id: 4 + date,
      name: "comment",
      type: "textarea",
      label: "Comment",
    },
  ],
}];
