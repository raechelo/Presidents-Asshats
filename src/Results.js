import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPres } from './thunks/fetchPres';

export class Results extends Component {
  
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/presidents'
    this.props.fetchPres(url)
  }

  render() {
    return (
      <section>
        
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  pres: state.pres
})

export const mapDispatchToProps = dispatch => ({
  fetchPres: url => dispatch(fetchPres(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
