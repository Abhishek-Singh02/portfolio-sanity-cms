import {defineField, defineType} from 'sanity'

export const socialMediaType = defineType({
  name: 'social-media',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      type: 'text',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'order',
      name: 'order',
      by: [
        {
          field: 'order',
          direction: 'asc',
        },
      ],
    },
  ],
})
