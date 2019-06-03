import React from 'react';
import { fetchPres } from '../../Thunks/fetchPres';
import { Results, mapDispatchToProps, mapStateToProps } from './Results';

jest.mock('../../Thunks/fetchPres')

describe('mapStateToProps', () => {

  it('should pass presidents to props', () => {
    const mockState = {
      pres: ['Georgie Wash', 'Abie Link']
    }
    const expectedState = {
      pres: ['Georgie Wash', 'Abie Link']
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expectedState)
  });
});

describe('mapDispatchToProps', () => {
 it('should dispsatch fetchPres', () => {
  const mockDispatch = jest.fn();
  const mockState = {
      pres: ['Georgie Wash', 'Abie Link']
  }
  const actionToDispatch = fetchPres(mockState);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.fetchPres(mockState)
  expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
 });
});