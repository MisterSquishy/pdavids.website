import React from 'react'

import './style.css'

export default ({
  onDone
}) => {
  return <>
    <h1>Peter Davids</h1>
    <h2>Builder, tinkerer, problem solver</h2>
    <p>Some stuff I've built lately:</p>
    <ul>
    <li>
        <a href='http://collatz.pdavids.website'>Collatz</a> -- toy visualization of the Collatz conjecture
      </li>
      <li>
        <a href='http://game.pdavids.website'>Scout</a> -- top-down RPG
      </li>
    </ul>
  </>
}