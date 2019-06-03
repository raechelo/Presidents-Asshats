import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPres } from '../../Thunks/fetchPres';
import PreziCard from '../../Components/PreziCard/PreziCard';


export class Results extends Component {
  
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/presidents'
    this.props.fetchPres(url)
  }

  render() {
    const displayCards = this.props.pres.map(p => (<PreziCard {...p} />))
    return (
      <section className="Results">
        {this.props.loading ? 'Loading...' : displayCards}
        {this.props.error !== '' && <p>{this.props.error}</p>}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  pres: state.pres,
  loading: state.loading,
  error: state.error
})

export const mapDispatchToProps = dispatch => ({
  fetchPres: url => dispatch(fetchPres(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
