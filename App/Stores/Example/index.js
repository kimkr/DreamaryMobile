import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  fetchUser: null,
  // The operation has started and is loading
  fetchUserLoading: null,
  // User informations were successfully fetched
  fetchUserSuccess: ['user'],
  // An error occurred
  fetchUserFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators

export const INITIAL_STATE = {
  user: {},
  userIsLoading: false,
  userErrorMessage: null,
}

export const liveInEurope = (state) => {
  if (Object.entries(state.user).length <= 0) return null

  // For this example, we imagine this cities are european cities
  let europeanCities = ['Gwenborough', 'Wisokyburgh', 'McKenziehaven', 'South Elvis', 'Roscoeview']

  return europeanCities.includes(state.user.address.city)
}

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
