import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import duration from './objects/duration'
import dayAndDate from './objects/dayAndDate'
import eventInfo from './documents/eventInfo'

export default createSchema({

  name: "default",
  types: schemaTypes.concat([
    duration,
    dayAndDate,
    eventInfo
  ]),
});