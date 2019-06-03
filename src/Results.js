import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPres } from './thunks/fetchPres';
import PreziCard from './PreziCard';

export class Results extends Component {
  
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/presidents'
    this.props.fetchPres(url)
  }

  render() {
    const displayCards = this.props.pres.map(p => (<PreziCard {...p} />))
    return (
      <section className="Results">
        {displayCards}
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
