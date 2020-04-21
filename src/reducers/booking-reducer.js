import { FETCH_USER_BOOKINGS_INIT, FETCH_USER_BOOKINGS_SUCCESS, FETCH_USER_BOOKINGS_FAIL } from '../actions/types'

const INITIAL_STATE = {
    data: [],
    errors: [],
    isFetching: false
}

export const userBookingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_BOOKINGS_INIT:
          return { ...state, errors: [], isFetching: true }
        case FETCH_USER_BOOKINGS_SUCCESS:
          return { ...state, data: action.userBookings, isFetching: false}
        case FETCH_USER_BOOKINGS_FAIL:
          return { ...state, errors: action.errors, isFetching: false}
        default:
          return state
    }
}
