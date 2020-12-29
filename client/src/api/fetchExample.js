import axios from 'axios'
import {serviceURL, getErrorMessage} from './apiUtils'

const projectURL = `${serviceURL}/todos/1`

export const fetchExample = () => {
  return axios.get(projectURL).then(resolve).catch(handleError)
}

const resolve = response => {
  return response.data
}

const handleError = error => {
  if (axios.isCancel(error)) {
    return undefined
  } else {
    throw new Error(`Could not fetch application: ${getErrorMessage(error)}`)
  }
}
