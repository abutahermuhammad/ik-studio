import { BsVectorPen } from "react-icons/bs";
import { sanitizeString } from "../utils/string.utils";
import { TbTools, TbListDetails } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SiGitbook } from "react-icons/si";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: BsVectorPen,
  groups: [
    { name: "content", icon: HiOutlineDocumentText, title: "Content" },
    { name: "editorial", icon: SiGitbook, title: "editorial" },
    { name: "features", icon: TbTools, title: "Features" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      hidden: ({ document }) => !document.title,
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      group: "features",
    },
    {
      name: "recommended",
      title: "Recommended Post",
      type: "boolean",
      group: "features",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      group: "editorial",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          title: "Caption",
          name: "caption",
          type: "blockContent",
        },
        {
          title: "Alt",
          name: "alt",
          type: "string",
        },
      ],
      options: {
        hotspot: true,
      },
      group: "content",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "editorial",
      initialValue: new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      options: {
        maxLength: 55,
      },
    },
    {
      name: "body",
      // title: "Body",
      type: "blockContent",
      group: "content",
    },
    {
      name: "references",
      title: "References",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
      group: "editorial",
    },
    {
      name: "importantLinks",
      title: "Important Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
      group: "editorial",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
