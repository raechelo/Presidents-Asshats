import * as actions from './index';

describe('isLoading', () => {

  it('should return a boolean value for loading', () => {
    const expected = { type: 'IS_LOADING', isLoading: true};
    const result = actions.isLoading(true);

    expect(result).toEqual(expected);
  });

  it('should return a boolean value for loading', () => {
    const expected = { type: 'IS_LOADING', isLoading: false};
    const result = actions.isLoading(false);

    expect(result).toEqual(expected);
  });
});

describe('setError', () => {

  it('should return a message in case of error', () => {
    const expected = { type: 'SET_ERROR', message: 'Error!'};
    const result = actions.setError('Error!');

    expect(result).toEqual(expected);
  });
});

describe('setPrezis', () => {

  it('should return a type of SET_PRES with an array of presidents', () => {
    const pres = ['Georgie Wash', 'Abie Link'];
    const expected = { type: 'SET_PRES', pres };
    const result = actions.setPrezis(pres);

    expect(result).toEqual(expected);
  })
})