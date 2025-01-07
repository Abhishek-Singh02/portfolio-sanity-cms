import {defineField, defineType} from 'sanity'

export const introType = defineType({
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
  ],
})
