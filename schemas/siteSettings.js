import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  title: "Settings",
  type: "document",
  icon: MdSettings,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "description",
      type: "string",
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: {
        metadata: ["location", "palette"],
      },
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
};
