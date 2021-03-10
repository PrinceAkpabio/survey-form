const date = new Date().getMilliseconds();

export const form = {
  title: "PHD SURVEY",
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
};
