const verifyInput = duration => {
  const {start, end, timeOfDay1, timeOfDay2} = duration
  if (!start) {
    return 'Event start time required.'
  }
  const timeRegex = /^\d\d:\d\d$/;
  if (!timeRegex.test(start)) {
    return 'Incorrectly formatted start time'
  }
  if (!end) {
    return 'Event end time required.'
  }
  if (!timeRegex.test(end)) {
    return 'Incorrectly formatted end time'
  }
  if (!timeOfDay1 || !timeOfDay2) {
    return 'Time of Day required.'
  }
  return start < end ? true : `Event must start before it ends.`
}

export default {
  name: 'duration',
  title: 'Event Duration',
  type: 'object',

  validation: Rule => Rule.custom(verifyInput),

  fields: [
    {
      name: 'start',
      title: 'Event Start Time',
      type: 'string',
      description: 'Please input as hh:mm (ex. 04:30)',
    },
    {
      name: 'timeOfDay1',
      title: 'Start: Time of Day',
      type: 'string',
      description: 'AM or PM?',
      options: {
        list: ['AM', 'PM'],
        layout: 'radio'
      },
    },
    {
      name: 'end',
      title: 'Event End Time',
      type: 'string',
      description: 'Please input as hh:mm (ex. 04:30)',
    },
    {
      name: 'timeOfDay2',
      title: 'End: Time of Day',
      type: 'string',
      description: 'AM or PM?',
      options: {
        list: ['AM', 'PM'],
        layout: 'radio'
      },
    }
  ],

  preview: {
    select: {
      start: 'start',
      end: 'end',
      timeOfDay1: 'timeOfDay1',
      timeOfDay2: 'timeOfDay2'

    },
    prepare({start, end, timeOfDay1, timeOfDay2}) {
      return {
        title: `${start}${timeOfDay1} - ${end}${timeOfDay2}`
      }
    }
  }
}