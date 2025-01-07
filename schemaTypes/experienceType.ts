import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'timeline',
      type: 'object',
      fields: [
        defineField({
          name: 'start',
          type: 'string',
        }),
        defineField({
          name: 'end',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineField({
      name: 'company',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'url',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'url',
              type: 'url',
            }),
          ],
        },
      ],
    }),
  ],
})
