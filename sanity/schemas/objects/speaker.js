const verifyInput = speaker => {
  const {name, affiliation} = speaker
  if (!name) {
    return ' Name of invitee required.'
  }
  return true;
}

export default {
  name: 'speaker',
  title: 'Notable Invitee Information',
  type: 'object',

  validation: Rule => Rule.custom(verifyInput),

  fields: [
    {
      name: 'name',
      title: 'Speaker / Panelist Name',
      type: 'string',
      description: 'Please format as first and last name (ex. Jane Doe)'
    },
    {
      name: 'affiliation',
      title: 'Affiliation',
      type: 'string',
      description: 'Include a short description of the invitee\'s industry affiliation, background, job title, etc.'
    },
  ],

  preview: {
    select: {
      name: 'name',
      affiliation: 'affiliation',

    },
    prepare({name, affiliation}) {
      return {
        title: name,
        subtitle: affiliation
      }
    }
  }
}