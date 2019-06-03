import React from 'react'

export default function PreziCard(props) {
  const { president, number, birth_year, death_year, took_office, left_office, party} = props
  return (
    <article className="PreziCard">
      <h2>{president}</h2>
      <h4>Number: {number}</h4>
      <h4>Born: {birth_year}</h4>
      <h4>Died: {death_year}</h4>
      <h4>Took Office: {took_office}</h4>
      <h4>Left Office: {left_office}</h4>
      <h4>Party: {party}</h4>
    </article>
  )
}
