const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// 3. Validate function which is invoked on user input
const verifyInput = dayAndDate => {
  const {date, weekday} = dayAndDate
  if (!weekday) {
    return 'Did not select day of week'
  }
  if (!date) {
    return 'Did not input date of event'
  }
  return true
}

export default {
  name: 'dayAndDate',
  title: 'Event Date + Day of Week',
  type: 'object',

  validation: Rule => Rule.custom(verifyInput),

  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'weekday',
      title: 'Day of Week',
      type: 'string',
      description: 'Select day of week',
      options: {
        list: days,
        layout: 'radio'
      },
    }
  ],

  preview: {
    select: {
      date: 'date',
      day: 'weekday',
    },
    prepare({date, day}) {
      return {
        title: date,
        subtitle: day,
      }
    }
  }
}