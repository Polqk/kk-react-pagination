import _ from 'lodash';
import update from 'immutability-helper';
import { SET_PAGE, SET_PAGES_COUNT, SET_DATA } from '../actions/types';

export default function () {
  var _$merge, _$merge2, _update;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case SET_PAGE:
      return _.merge({}, state, (_$merge = {}, _$merge[action.name] = action.payload, _$merge));
    case SET_PAGES_COUNT:
      return _.merge({}, state, (_$merge2 = {}, _$merge2[action.name] = action.payload, _$merge2));
    case SET_DATA:
      return update(state, (_update = {}, _update[action.name] = {
        data: {
          $set: action.payload
        }
      }, _update));
    // return _.merge({}, state, { [action.name]: action.payload });
    default:
      return state;
  }
}