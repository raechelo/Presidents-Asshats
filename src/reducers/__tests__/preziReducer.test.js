import { preziReducer } from '../preziReducer';
import * as actions from '../../actions';

describe('preziReducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = preziReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the state with an array of presidents', () => {
    const expected = ['Georgie Wash', 'Abie Link'];
    const result = preziReducer(undefined, actions.setPrezis(['Georgie Wash', 'Abie Link']));

    expect(result).toEqual(expected);
  })
});