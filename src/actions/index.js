export const setError = message => ({
  type: 'SET_ERROR',
  message
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const setPrezis = pres => ({
  type: 'SET_PRES',
  pres
})