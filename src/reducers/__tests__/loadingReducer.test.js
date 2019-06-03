import { isLoadingReducer } from '../loadingReducer';
import { isLoading } from '../../actions';
import * as actions from '../../actions';

describe('isLoading', () => {

  it('should return initial state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return an truthy value in case of loading', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, actions.isLoading(true));

    expect(result).toEqual(expected);
  });
});