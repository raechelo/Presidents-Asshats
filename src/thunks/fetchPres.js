import { fetchData } from '../api/fetchData';
import { setPrezis, isLoading, setError } from '../actions';

export const fetchPres = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const response = await fetchData(url)
      dispatch(setPrezis(response))
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}