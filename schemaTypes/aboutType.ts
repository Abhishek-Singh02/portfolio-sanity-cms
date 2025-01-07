import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
