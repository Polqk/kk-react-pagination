import { SET_PAGE, SET_PAGES_COUNT } from '../actions/types'
import _ from 'lodash'

export default function (state = {}, action) {
    switch (action.type) {
    case SET_PAGE:
        return _.merge({}, state, {[action.name]: action.payload})
    case SET_PAGES_COUNT:
        return _.merge({}, state, {[action.name]: action.payload})
    default:
        return state
    }
}