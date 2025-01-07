import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'file',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})
