import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'year',
      type: 'string',
    }),
    defineField({
      name: 'madeAt',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'showOnHome',
      type: 'boolean',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
