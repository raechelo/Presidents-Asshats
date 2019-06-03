import { setError } from '../errorReducer';
import * as actions from '../../actions';

describe('errorReducer', () => {

  it('should return the initial state', () => {
    const expected = '';
    const result = setError(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return a message in case of an error', () => {
    const expected = 'Error!';
    const result = setError(undefined, actions.setError('Error!'));

    expect(result).toEqual(expected);
  });
});