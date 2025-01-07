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
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
})
