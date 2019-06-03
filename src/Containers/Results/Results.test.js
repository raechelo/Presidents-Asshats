import React from 'react';
import { fetchPres } from '../../Thunks/fetchPres';
import { mapDispatchToProps, mapStateToProps } from './Results';

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

  it('should pass a boolean value for loading to props', () => {
    const mockState = {
      loading: false
    }
    const expectedState = {
      loading: false
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expectedState);
  });

  it('should pass an error message in case of an error', () => {
    const mockState = {
      error: 'Error!'
    }
    const expectedState = {
      error: 'Error!'
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expectedState);
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