import {fetchExample as fetchExampleApi} from '../api'
import {actionsEnum} from './actionsEnum'

export const exampleAction = () => {
  return dispatch => {
    dispatch(exampleActionRequest())

    return fetchExampleApi()
      .then(response => {
        dispatch(exampleActionCompleted(response))
      })
      .catch(error => {
        dispatch(exampleActionFailed(error))
      })
  }
}

const exampleActionRequest = () => ({
  type: actionsEnum.EXAMPLE_REQUEST,
})

const exampleActionCompleted = payload => ({
  type: actionsEnum.EXAMPLE_SUCCESS,
  payload,
})

const exampleActionFailed = error => ({
  type: actionsEnum.EXAMPLE_FAILURE,
  errorMessage: error,
})
